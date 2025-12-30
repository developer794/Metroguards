/**
 * Metro Guards Exact Pricing Engine
 * 
 * Implements the official Metro Guards rate structure:
 * - Weekday Day: $40.70/hr (6:00 AM - 6:00 PM)
 * - Weekday Night: $46.00/hr (6:00 PM - 6:00 AM)
 * - Saturday: $59.50/hr
 * - Sunday: $79.50/hr
 * - Public Holidays: $95.00/hr
 * - New Year's Eve: $110.00/hr
 * 
 * Overtime Rules:
 * - First 2 hours: 1.5x base rate
 * - After 2 hours: 2x base rate
 * 
 * GST: 10% applied to all totals
 * 
 * NOTE: Rates can be customized via the admin dashboard (/dashboard/rates)
 * Database rates take priority over these defaults.
 */

// In-memory cache for database rates
let cachedRates = null;
let cacheTimestamp = null;
const CACHE_TTL = 60000; // 1 minute cache

/**
 * Fetch rates from database with caching
 * Falls back to DEFAULT_RATES if database is unavailable
 */
export async function fetchDatabaseRates() {
  // Check cache
  if (cachedRates && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_TTL)) {
    return cachedRates;
  }

  try {
    // Dynamic import to avoid circular dependencies
    const prisma = (await import('@/lib/prisma')).default;
    
    const dbRates = await prisma.serviceRate.findMany({
      where: { isActive: true },
    });

    if (dbRates && dbRates.length > 0) {
      // Convert database rates to SERVICE_RATES format
      const ratesMap = {};
      for (const rate of dbRates) {
        ratesMap[rate.name] = {
          name: rate.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          rate: Number(rate.hourlyRate),
          description: rate.description,
          overtimeMultiplier1: Number(rate.overtimeMultiplier1) || 1.5,
          overtimeMultiplier2: Number(rate.overtimeMultiplier2) || 2.0,
        };
      }

      // Merge with defaults (database rates override)
      cachedRates = { ...DEFAULT_RATES, ...ratesMap };
      cacheTimestamp = Date.now();
      return cachedRates;
    }
  } catch (error) {
    console.warn('Failed to fetch database rates, using defaults:', error.message);
  }

  return DEFAULT_RATES;
}

/**
 * Get current rates (sync version using cache or defaults)
 * Use fetchDatabaseRates() for async operations that need fresh data
 */
export function getCurrentRates() {
  if (cachedRates && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_TTL)) {
    return cachedRates;
  }
  return DEFAULT_RATES;
}

/**
 * Clear the rates cache (call after updating rates in admin)
 */
export function clearRatesCache() {
  cachedRates = null;
  cacheTimestamp = null;
}

// Metro Guards Default Rates (as of 2025)
// These are used as fallbacks when database rates are unavailable
export const DEFAULT_RATES = {
  weekday_day: {
    name: 'Weekday Day',
    rate: 40.70,
    description: 'Monday to Friday, 6:00 AM - 6:00 PM',
    startHour: 6,
    endHour: 18,
  },
  weekday_night: {
    name: 'Weekday Night',
    rate: 46.00,
    description: 'Monday to Friday, 6:00 PM - 6:00 AM',
    startHour: 18,
    endHour: 6,
  },
  saturday: {
    name: 'Saturday',
    rate: 59.50,
    description: 'Saturday All Day',
  },
  sunday: {
    name: 'Sunday',
    rate: 79.50,
    description: 'Sunday All Day',
  },
  public_holiday: {
    name: 'Public Holiday',
    rate: 95.00,
    description: 'Victorian Public Holidays',
  },
  new_years_eve: {
    name: "New Year's Eve",
    rate: 110.00,
    description: 'December 31st Special Rate',
  },
};

// Alias for backwards compatibility
export const SERVICE_RATES = DEFAULT_RATES;

// Overtime multipliers
export const OVERTIME = {
  FIRST_2_HOURS: 1.5,
  BEYOND_2_HOURS: 2.0,
  STANDARD_HOURS_PER_DAY: 8,
};

// GST Rate
export const GST_RATE = 0.10;

// Victorian Public Holidays 2025-2026
export const PUBLIC_HOLIDAYS = {
  2025: [
    { date: '2025-01-01', name: "New Year's Day" },
    { date: '2025-01-27', name: 'Australia Day' },
    { date: '2025-03-10', name: 'Labour Day' },
    { date: '2025-04-18', name: 'Good Friday' },
    { date: '2025-04-19', name: 'Saturday before Easter Sunday' },
    { date: '2025-04-20', name: 'Easter Sunday' },
    { date: '2025-04-21', name: 'Easter Monday' },
    { date: '2025-04-25', name: 'ANZAC Day' },
    { date: '2025-06-09', name: "Queen's Birthday" },
    { date: '2025-09-26', name: 'Friday before AFL Grand Final' },
    { date: '2025-11-04', name: 'Melbourne Cup Day' },
    { date: '2025-12-25', name: 'Christmas Day' },
    { date: '2025-12-26', name: 'Boxing Day' },
    { date: '2025-12-31', name: "New Year's Eve", isNewYearsEve: true },
  ],
  2026: [
    { date: '2026-01-01', name: "New Year's Day" },
    { date: '2026-01-26', name: 'Australia Day' },
    { date: '2026-03-09', name: 'Labour Day' },
    { date: '2026-04-03', name: 'Good Friday' },
    { date: '2026-04-04', name: 'Saturday before Easter Sunday' },
    { date: '2026-04-05', name: 'Easter Sunday' },
    { date: '2026-04-06', name: 'Easter Monday' },
    { date: '2026-04-25', name: 'ANZAC Day' },
    { date: '2026-06-08', name: "Queen's Birthday" },
    { date: '2026-09-25', name: 'Friday before AFL Grand Final' },
    { date: '2026-11-03', name: 'Melbourne Cup Day' },
    { date: '2026-12-25', name: 'Christmas Day' },
    { date: '2026-12-28', name: 'Boxing Day (observed)' },
    { date: '2026-12-31', name: "New Year's Eve", isNewYearsEve: true },
  ],
};

/**
 * Check if a date is a public holiday
 * @param {Date} date - The date to check
 * @returns {{ isHoliday: boolean, name?: string, isNewYearsEve?: boolean }}
 */
export function checkPublicHoliday(date) {
  const dateStr = date.toISOString().split('T')[0];
  const year = date.getFullYear();
  
  const holidays = PUBLIC_HOLIDAYS[year] || [];
  const holiday = holidays.find(h => h.date === dateStr);
  
  if (holiday) {
    return {
      isHoliday: true,
      name: holiday.name,
      isNewYearsEve: holiday.isNewYearsEve || false,
    };
  }
  
  return { isHoliday: false };
}

/**
 * Get the day type for rate calculation
 * @param {Date} date - The date to check
 * @returns {'weekday' | 'saturday' | 'sunday' | 'public_holiday' | 'new_years_eve'}
 */
export function getDayType(date) {
  const holiday = checkPublicHoliday(date);
  
  if (holiday.isHoliday) {
    if (holiday.isNewYearsEve) {
      return 'new_years_eve';
    }
    return 'public_holiday';
  }
  
  const dayOfWeek = date.getDay();
  
  if (dayOfWeek === 0) return 'sunday';
  if (dayOfWeek === 6) return 'saturday';
  return 'weekday';
}

/**
 * Get the applicable rate for a given date and time
 * @param {Date} date - The date
 * @param {number} hour - The hour (0-23)
 * @param {Object} customRates - Optional custom rates object (defaults to cached/default rates)
 * @returns {{ rateType: string, rate: number, name: string }}
 */
export function getApplicableRate(date, hour = 9, customRates = null) {
  const rates = customRates || getCurrentRates();
  const dayType = getDayType(date);
  
  switch (dayType) {
    case 'new_years_eve':
      return {
        rateType: 'new_years_eve',
        rate: rates.new_years_eve?.rate || DEFAULT_RATES.new_years_eve.rate,
        name: rates.new_years_eve?.name || DEFAULT_RATES.new_years_eve.name,
      };
    case 'public_holiday':
      return {
        rateType: 'public_holiday',
        rate: rates.public_holiday?.rate || DEFAULT_RATES.public_holiday.rate,
        name: rates.public_holiday?.name || DEFAULT_RATES.public_holiday.name,
      };
    case 'sunday':
      return {
        rateType: 'sunday',
        rate: rates.sunday?.rate || DEFAULT_RATES.sunday.rate,
        name: rates.sunday?.name || DEFAULT_RATES.sunday.name,
      };
    case 'saturday':
      return {
        rateType: 'saturday',
        rate: rates.saturday?.rate || DEFAULT_RATES.saturday.rate,
        name: rates.saturday?.name || DEFAULT_RATES.saturday.name,
      };
    default: // weekday
      if (hour >= 6 && hour < 18) {
        return {
          rateType: 'weekday_day',
          rate: rates.weekday_day?.rate || DEFAULT_RATES.weekday_day.rate,
          name: rates.weekday_day?.name || DEFAULT_RATES.weekday_day.name,
        };
      }
      return {
        rateType: 'weekday_night',
        rate: rates.weekday_night?.rate || DEFAULT_RATES.weekday_night.rate,
        name: rates.weekday_night?.name || DEFAULT_RATES.weekday_night.name,
      };
  }
}

/**
 * Async version of getApplicableRate that fetches latest rates from database
 * @param {Date} date - The date
 * @param {number} hour - The hour (0-23)
 * @returns {Promise<{ rateType: string, rate: number, name: string }>}
 */
export async function getApplicableRateAsync(date, hour = 9) {
  const rates = await fetchDatabaseRates();
  return getApplicableRate(date, hour, rates);
}

/**
 * Calculate overtime hours and costs
 * @param {number} totalHours - Total hours worked
 * @param {number} baseRate - Base hourly rate
 * @returns {{ regularHours: number, overtimeHours1: number, overtimeHours2: number, regularCost: number, overtimeCost1: number, overtimeCost2: number, totalCost: number }}
 */
export function calculateOvertimeCost(totalHours, baseRate) {
  const standardHours = OVERTIME.STANDARD_HOURS_PER_DAY;
  
  let regularHours = Math.min(totalHours, standardHours);
  let overtimeHours = Math.max(0, totalHours - standardHours);
  
  // First 2 hours of overtime at 1.5x
  let overtimeHours1 = Math.min(overtimeHours, 2);
  // Beyond 2 hours at 2x
  let overtimeHours2 = Math.max(0, overtimeHours - 2);
  
  const regularCost = regularHours * baseRate;
  const overtimeCost1 = overtimeHours1 * baseRate * OVERTIME.FIRST_2_HOURS;
  const overtimeCost2 = overtimeHours2 * baseRate * OVERTIME.BEYOND_2_HOURS;
  
  return {
    regularHours,
    overtimeHours1,
    overtimeHours2,
    regularCost: Math.round(regularCost * 100) / 100,
    overtimeCost1: Math.round(overtimeCost1 * 100) / 100,
    overtimeCost2: Math.round(overtimeCost2 * 100) / 100,
    totalCost: Math.round((regularCost + overtimeCost1 + overtimeCost2) * 100) / 100,
  };
}

/**
 * Calculate shift cost for a single day
 * @param {Object} params
 * @param {Date} params.date - Shift date
 * @param {number} params.startHour - Start hour (0-23)
 * @param {number} params.hours - Number of hours
 * @param {number} params.guards - Number of guards
 * @param {Object} params.customRates - Optional custom rates object
 * @returns {Object} Detailed cost breakdown
 */
export function calculateShiftCost({ date, startHour = 9, hours = 8, guards = 1, customRates = null }) {
  const rateInfo = getApplicableRate(date, startHour, customRates);
  const overtimeCalc = calculateOvertimeCost(hours, rateInfo.rate);
  const holiday = checkPublicHoliday(date);
  
  const subtotalPerGuard = overtimeCalc.totalCost;
  const subtotal = subtotalPerGuard * guards;
  const gst = Math.round(subtotal * GST_RATE * 100) / 100;
  const total = Math.round((subtotal + gst) * 100) / 100;
  
  return {
    date: date.toISOString().split('T')[0],
    dayOfWeek: date.toLocaleDateString('en-AU', { weekday: 'long' }),
    rateType: rateInfo.rateType,
    rateName: rateInfo.name,
    baseRate: rateInfo.rate,
    isPublicHoliday: holiday.isHoliday,
    holidayName: holiday.name || null,
    hours,
    guards,
    regularHours: overtimeCalc.regularHours,
    overtimeHours1: overtimeCalc.overtimeHours1,
    overtimeHours2: overtimeCalc.overtimeHours2,
    regularCost: overtimeCalc.regularCost * guards,
    overtimeCost1: overtimeCalc.overtimeCost1 * guards,
    overtimeCost2: overtimeCalc.overtimeCost2 * guards,
    subtotal,
    gst,
    total,
  };
}

/**
 * Async version of calculateShiftCost that fetches latest rates from database
 */
export async function calculateShiftCostAsync({ date, startHour = 9, hours = 8, guards = 1 }) {
  const rates = await fetchDatabaseRates();
  return calculateShiftCost({ date, startHour, hours, guards, customRates: rates });
}

/**
 * Calculate total cost for a booking period
 * @param {Object} params
 * @param {Date} params.startDate - Start date
 * @param {Date} params.endDate - End date
 * @param {number} params.hoursPerDay - Hours per day
 * @param {number} params.guards - Number of guards
 * @param {number} params.daysPerWeek - Days per week (optional, default: 7 = every day)
 * @param {number[]} params.workDays - Array of work days (0=Sun, 1=Mon, ..., 6=Sat)
 * @param {Object} params.customRates - Optional custom rates object
 * @returns {Object} Complete booking cost breakdown
 */
export function calculateBookingCost({
  startDate,
  endDate,
  hoursPerDay = 8,
  guards = 1,
  workDays = [1, 2, 3, 4, 5], // Default: Monday to Friday
  customRates = null,
}) {
  const rates = customRates || getCurrentRates();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const dailyBreakdown = [];
  const summary = {
    totalDays: 0,
    totalHours: 0,
    regularHours: 0,
    overtimeHours: 0,
    weekdayDayHours: 0,
    weekdayNightHours: 0,
    saturdayHours: 0,
    sundayHours: 0,
    publicHolidayHours: 0,
    newYearsEveHours: 0,
    subtotal: 0,
    gst: 0,
    total: 0,
  };
  
  // Iterate through each day
  let currentDate = new Date(start);
  while (currentDate <= end) {
    const dayOfWeek = currentDate.getDay();
    
    // Check if this day is a work day
    if (workDays.includes(dayOfWeek)) {
      const shiftCost = calculateShiftCost({
        date: new Date(currentDate),
        hours: hoursPerDay,
        guards,
        customRates: rates,
      });
      
      dailyBreakdown.push(shiftCost);
      
      // Update summary
      summary.totalDays++;
      summary.totalHours += hoursPerDay * guards;
      summary.regularHours += shiftCost.regularHours * guards;
      summary.overtimeHours += (shiftCost.overtimeHours1 + shiftCost.overtimeHours2) * guards;
      
      // Track hours by rate type
      switch (shiftCost.rateType) {
        case 'weekday_day':
          summary.weekdayDayHours += hoursPerDay * guards;
          break;
        case 'weekday_night':
          summary.weekdayNightHours += hoursPerDay * guards;
          break;
        case 'saturday':
          summary.saturdayHours += hoursPerDay * guards;
          break;
        case 'sunday':
          summary.sundayHours += hoursPerDay * guards;
          break;
        case 'public_holiday':
          summary.publicHolidayHours += hoursPerDay * guards;
          break;
        case 'new_years_eve':
          summary.newYearsEveHours += hoursPerDay * guards;
          break;
      }
      
      summary.subtotal += shiftCost.subtotal;
    }
    
    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  // Calculate final GST and total (on the combined subtotal for accuracy)
  summary.gst = Math.round(summary.subtotal * GST_RATE * 100) / 100;
  summary.total = Math.round((summary.subtotal + summary.gst) * 100) / 100;
  summary.subtotal = Math.round(summary.subtotal * 100) / 100;
  
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
    hoursPerDay,
    guards,
    workDays,
    dailyBreakdown,
    summary,
    rates,
    calculatedAt: new Date().toISOString(),
  };
}

/**
 * Async version of calculateBookingCost that fetches latest rates from database
 */
export async function calculateBookingCostAsync({
  startDate,
  endDate,
  hoursPerDay = 8,
  guards = 1,
  workDays = [1, 2, 3, 4, 5],
}) {
  const rates = await fetchDatabaseRates();
  return calculateBookingCost({
    startDate,
    endDate,
    hoursPerDay,
    guards,
    workDays,
    customRates: rates,
  });
}

/**
 * Calculate quick estimate for a quotation
 * @param {Object} params
 * @param {number} params.hoursPerWeek - Hours per week
 * @param {number} params.guards - Number of guards
 * @param {number} params.weeks - Number of weeks
 * @param {string} params.shiftType - 'day', 'night', 'mixed'
 * @param {Object} params.customRates - Optional custom rates object
 * @returns {Object} Quick estimate
 */
export function calculateQuickEstimate({
  hoursPerWeek = 40,
  guards = 1,
  weeks = 4,
  shiftType = 'day',
  customRates = null,
}) {
  const rates = customRates || getCurrentRates();
  
  // Average rate based on shift type
  let avgRate;
  switch (shiftType) {
    case 'night':
      avgRate = rates.weekday_night?.rate || DEFAULT_RATES.weekday_night.rate;
      break;
    case 'mixed':
      avgRate = ((rates.weekday_day?.rate || DEFAULT_RATES.weekday_day.rate) + 
                 (rates.weekday_night?.rate || DEFAULT_RATES.weekday_night.rate)) / 2;
      break;
    default:
      avgRate = rates.weekday_day?.rate || DEFAULT_RATES.weekday_day.rate;
  }
  
  const totalHours = hoursPerWeek * weeks * guards;
  const subtotal = totalHours * avgRate;
  const gst = subtotal * GST_RATE;
  const total = subtotal + gst;
  
  return {
    hoursPerWeek,
    guards,
    weeks,
    shiftType,
    averageRate: avgRate,
    totalHours,
    subtotal: Math.round(subtotal * 100) / 100,
    gst: Math.round(gst * 100) / 100,
    total: Math.round(total * 100) / 100,
    note: 'This is an estimate. Final quote may vary based on specific dates, holidays, and overtime.',
  };
}

/**
 * Format currency for display
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Generate a cost breakdown summary for display
 * @param {Object} bookingCost - Result from calculateBookingCost
 * @returns {Object} Formatted summary for UI display
 */
export function generateCostSummary(bookingCost) {
  const { summary } = bookingCost;
  
  return {
    overview: {
      totalDays: summary.totalDays,
      totalHours: summary.totalHours,
      totalGuards: bookingCost.guards,
    },
    hoursByType: [
      { type: 'Weekday Day', hours: summary.weekdayDayHours, rate: SERVICE_RATES.weekday_day.rate },
      { type: 'Weekday Night', hours: summary.weekdayNightHours, rate: SERVICE_RATES.weekday_night.rate },
      { type: 'Saturday', hours: summary.saturdayHours, rate: SERVICE_RATES.saturday.rate },
      { type: 'Sunday', hours: summary.sundayHours, rate: SERVICE_RATES.sunday.rate },
      { type: 'Public Holiday', hours: summary.publicHolidayHours, rate: SERVICE_RATES.public_holiday.rate },
      { type: "New Year's Eve", hours: summary.newYearsEveHours, rate: SERVICE_RATES.new_years_eve.rate },
    ].filter(item => item.hours > 0),
    overtime: {
      regularHours: summary.regularHours,
      overtimeHours: summary.overtimeHours,
    },
    costs: {
      subtotal: formatCurrency(summary.subtotal),
      gst: formatCurrency(summary.gst),
      total: formatCurrency(summary.total),
    },
    rawCosts: {
      subtotal: summary.subtotal,
      gst: summary.gst,
      total: summary.total,
    },
  };
}

/**
 * Async version of calculateQuickEstimate that fetches latest rates from database
 */
export async function calculateQuickEstimateAsync({
  hoursPerWeek = 40,
  guards = 1,
  weeks = 4,
  shiftType = 'day',
}) {
  const rates = await fetchDatabaseRates();
  return calculateQuickEstimate({
    hoursPerWeek,
    guards,
    weeks,
    shiftType,
    customRates: rates,
  });
}

export default {
  SERVICE_RATES,
  DEFAULT_RATES,
  OVERTIME,
  GST_RATE,
  PUBLIC_HOLIDAYS,
  // Cache management
  fetchDatabaseRates,
  getCurrentRates,
  clearRatesCache,
  // Sync functions (use cached/default rates)
  checkPublicHoliday,
  getDayType,
  getApplicableRate,
  calculateOvertimeCost,
  calculateShiftCost,
  calculateBookingCost,
  calculateQuickEstimate,
  formatCurrency,
  generateCostSummary,
  // Async functions (fetch fresh rates from database)
  getApplicableRateAsync,
  calculateShiftCostAsync,
  calculateBookingCostAsync,
  calculateQuickEstimateAsync,
};

