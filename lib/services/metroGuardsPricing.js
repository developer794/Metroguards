/**
 * Metro Guards Official Pricing Engine
 * 
 * This module provides the exact pricing structure for Metro Guards Security Services.
 * 
 * RATE STRUCTURE (Effective 2025):
 * ================================
 * Weekday Day (06:00-18:00):    $40.70/hr
 * Weekday Night (18:00-06:00):  $46.00/hr
 * Saturday (All Day):           $59.50/hr
 * Sunday (All Day):             $79.50/hr
 * Public Holidays:              $95.00/hr
 * New Year's Eve (Dec 31):      $110.00/hr
 * 
 * OVERTIME RULES:
 * ===============
 * - First 2 hours overtime:     1.5x base rate
 * - Beyond 2 hours overtime:    2.0x base rate
 * - Standard day = 8 hours
 * 
 * GST: 10% (automatically applied)
 * 
 * LEGAL PROTECTIONS:
 * ==================
 * - $25,000 Placement Fee for direct hiring within 12 months
 * - 7-Day Invoice Dispute Window
 * - 24-Hour Cancellation Policy
 * 
 * CERTIFICATIONS:
 * ===============
 * - ISO 9001: Quality Management System
 * - ISO 14001: Environmental Management System
 * - ISO 45001: Occupational Health & Safety
 * - Australian Achiever Awards
 */

// ============================================
// METRO GUARDS OFFICIAL RATES 2025
// ============================================

export const METRO_GUARDS_RATES = {
  WEEKDAY_DAY: {
    code: 'weekday_day',
    name: 'Weekday Day',
    rate: 40.70,
    description: 'Monday to Friday, 6:00 AM - 6:00 PM',
    startHour: 6,
    endHour: 18,
  },
  WEEKDAY_NIGHT: {
    code: 'weekday_night',
    name: 'Weekday Night',
    rate: 46.00,
    description: 'Monday to Friday, 6:00 PM - 6:00 AM',
    startHour: 18,
    endHour: 6,
  },
  SATURDAY: {
    code: 'saturday',
    name: 'Saturday',
    rate: 59.50,
    description: 'Saturday All Day (12:00 AM - 11:59 PM)',
  },
  SUNDAY: {
    code: 'sunday',
    name: 'Sunday',
    rate: 79.50,
    description: 'Sunday All Day (12:00 AM - 11:59 PM)',
  },
  PUBLIC_HOLIDAY: {
    code: 'public_holiday',
    name: 'Public Holiday',
    rate: 95.00,
    description: 'Victorian Public Holidays',
  },
  NEW_YEARS_EVE: {
    code: 'new_years_eve',
    name: "New Year's Eve",
    rate: 110.00,
    description: 'December 31st Special Rate',
  },
};

// ============================================
// OVERTIME MULTIPLIERS
// ============================================

export const OVERTIME_RULES = {
  STANDARD_HOURS_PER_DAY: 8,
  FIRST_2_HOURS_MULTIPLIER: 1.5,
  BEYOND_2_HOURS_MULTIPLIER: 2.0,
};

// ============================================
// GST RATE
// ============================================

export const GST_RATE = 0.10; // 10%

// ============================================
// LEGAL PROTECTION CLAUSES
// ============================================

export const LEGAL_PROTECTIONS = {
  PLACEMENT_FEE: {
    amount: 25000,
    currency: 'AUD',
    period: '12 months',
    clause: `PLACEMENT FEE CLAUSE: Should the Client directly or indirectly employ, 
engage, or otherwise utilize the services of any security personnel introduced by 
Metro Guards within 12 months of the termination of this agreement, the Client 
agrees to pay Metro Guards a placement fee of $25,000 (AUD) per guard. This fee 
compensates Metro Guards for recruitment, training, and development investments 
made in the security personnel.`,
  },
  INVOICE_DISPUTE: {
    daysAllowed: 7,
    paymentTerms: 14,
    clause: `INVOICE DISPUTE POLICY: All invoices are due within 14 days of issue date. 
Any disputes regarding invoices must be raised in writing within 7 business days 
of the invoice date. Disputes raised after this period will not be accepted, and 
the full invoice amount becomes immediately due and payable. Metro Guards reserves 
the right to suspend services for overdue accounts exceeding 30 days.`,
  },
  CANCELLATION: {
    noticeHours: 24,
    minimumCharge: 4, // hours
    clause: `CANCELLATION POLICY: Cancellations must be made at least 24 hours in advance. 
Cancellations made less than 24 hours before the scheduled shift will incur a 
4-hour minimum charge at the applicable rate. No-shows without notification will 
be charged the full scheduled shift amount.`,
  },
  INSURANCE: {
    publicLiability: 20000000,
    clause: `INSURANCE COVERAGE: Metro Guards maintains comprehensive insurance including 
$20,000,000 Public Liability insurance, Professional Indemnity insurance, and 
Workers Compensation coverage. Certificates of Currency are available upon request.`,
  },
};

// ============================================
// CERTIFICATIONS
// ============================================

export const CERTIFICATIONS = {
  ISO_9001: {
    code: 'ISO 9001',
    name: 'Quality Management System',
    description: 'Certified quality management ensuring consistent, high-quality security services.',
  },
  ISO_14001: {
    code: 'ISO 14001',
    name: 'Environmental Management System',
    description: 'Committed to environmentally responsible operations and sustainability.',
  },
  ISO_45001: {
    code: 'ISO 45001',
    name: 'Occupational Health & Safety',
    description: 'Rigorous health and safety standards protecting our guards and your site.',
  },
  AUSTRALIAN_ACHIEVER: {
    code: 'AAA',
    name: 'Australian Achiever Awards',
    description: 'Recognized for excellence in security service delivery.',
  },
};

// ============================================
// PRICING CALCULATION FUNCTIONS
// ============================================

/**
 * Get the applicable rate for a given date and time
 * @param {Date} date - The date to check
 * @param {number} hour - The hour (0-23)
 * @param {Object} holidayInfo - Optional holiday information from database
 * @returns {Object} Rate information
 */
export function getApplicableRate(date, hour = 9, holidayInfo = null) {
  // Check for public holidays first
  if (holidayInfo?.isHoliday) {
    if (holidayInfo.isNewYearsEve) {
      return {
        ...METRO_GUARDS_RATES.NEW_YEARS_EVE,
        rateType: 'new_years_eve',
      };
    }
    return {
      ...METRO_GUARDS_RATES.PUBLIC_HOLIDAY,
      rateType: 'public_holiday',
      holidayName: holidayInfo.name,
    };
  }

  const dayOfWeek = date.getDay();

  // Sunday = 0
  if (dayOfWeek === 0) {
    return {
      ...METRO_GUARDS_RATES.SUNDAY,
      rateType: 'sunday',
    };
  }

  // Saturday = 6
  if (dayOfWeek === 6) {
    return {
      ...METRO_GUARDS_RATES.SATURDAY,
      rateType: 'saturday',
    };
  }

  // Weekday - check time
  if (hour >= 6 && hour < 18) {
    return {
      ...METRO_GUARDS_RATES.WEEKDAY_DAY,
      rateType: 'weekday_day',
    };
  }

  return {
    ...METRO_GUARDS_RATES.WEEKDAY_NIGHT,
    rateType: 'weekday_night',
  };
}

/**
 * Calculate overtime breakdown
 * @param {number} totalHours - Total hours worked
 * @param {number} baseRate - Base hourly rate
 * @returns {Object} Overtime calculation details
 */
export function calculateOvertime(totalHours, baseRate) {
  const standardHours = OVERTIME_RULES.STANDARD_HOURS_PER_DAY;

  const regularHours = Math.min(totalHours, standardHours);
  const overtimeHours = Math.max(0, totalHours - standardHours);

  // First 2 hours at 1.5x
  const overtimeHours1 = Math.min(overtimeHours, 2);
  // Beyond 2 hours at 2x
  const overtimeHours2 = Math.max(0, overtimeHours - 2);

  const regularCost = regularHours * baseRate;
  const overtimeCost1 = overtimeHours1 * baseRate * OVERTIME_RULES.FIRST_2_HOURS_MULTIPLIER;
  const overtimeCost2 = overtimeHours2 * baseRate * OVERTIME_RULES.BEYOND_2_HOURS_MULTIPLIER;

  return {
    regularHours,
    overtimeHours1,
    overtimeHours2,
    regularCost: round(regularCost),
    overtimeCost1: round(overtimeCost1),
    overtimeCost2: round(overtimeCost2),
    totalCost: round(regularCost + overtimeCost1 + overtimeCost2),
  };
}

/**
 * Calculate shift cost for a single day
 * @param {Object} params - Shift parameters
 * @returns {Object} Detailed cost breakdown
 */
export function calculateShiftCost({ date, startHour = 9, hours = 8, guards = 1, holidayInfo = null }) {
  const rateInfo = getApplicableRate(date, startHour, holidayInfo);
  const overtimeCalc = calculateOvertime(hours, rateInfo.rate);

  const subtotalPerGuard = overtimeCalc.totalCost;
  const subtotal = subtotalPerGuard * guards;
  const gst = round(subtotal * GST_RATE);
  const total = round(subtotal + gst);

  return {
    date: formatDateISO(date),
    dayOfWeek: formatDayName(date),
    rateType: rateInfo.rateType,
    rateName: rateInfo.name,
    baseRate: rateInfo.rate,
    isPublicHoliday: holidayInfo?.isHoliday || false,
    holidayName: holidayInfo?.name || null,
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
 * Calculate complete booking cost
 * @param {Object} params - Booking parameters
 * @returns {Object} Complete booking cost breakdown
 */
export function calculateBookingTotal({
  startDate,
  endDate,
  hoursPerDay = 8,
  guards = 1,
  workDays = [1, 2, 3, 4, 5], // Mon-Fri by default
  holidays = [], // Array of holiday info from database
}) {
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

  // Create a map of holidays by date string for quick lookup
  const holidayMap = new Map();
  holidays.forEach((h) => {
    const dateStr = h.date instanceof Date 
      ? formatDateISO(h.date) 
      : h.date?.split('T')[0] || h.date;
    holidayMap.set(dateStr, h);
  });

  // Iterate through each day
  let currentDate = new Date(start);
  while (currentDate <= end) {
    const dayOfWeek = currentDate.getDay();

    if (workDays.includes(dayOfWeek)) {
      const dateStr = formatDateISO(currentDate);
      const holidayInfo = holidayMap.get(dateStr);

      const shiftCost = calculateShiftCost({
        date: new Date(currentDate),
        hours: hoursPerDay,
        guards,
        holidayInfo: holidayInfo
          ? { isHoliday: true, name: holidayInfo.name, isNewYearsEve: holidayInfo.isNewYearsEve }
          : null,
      });

      dailyBreakdown.push(shiftCost);

      // Update summary
      summary.totalDays++;
      summary.totalHours += hoursPerDay * guards;
      summary.regularHours += shiftCost.regularHours * guards;
      summary.overtimeHours += (shiftCost.overtimeHours1 + shiftCost.overtimeHours2) * guards;

      // Track hours by rate type
      const hoursForType = hoursPerDay * guards;
      switch (shiftCost.rateType) {
        case 'weekday_day':
          summary.weekdayDayHours += hoursForType;
          break;
        case 'weekday_night':
          summary.weekdayNightHours += hoursForType;
          break;
        case 'saturday':
          summary.saturdayHours += hoursForType;
          break;
        case 'sunday':
          summary.sundayHours += hoursForType;
          break;
        case 'public_holiday':
          summary.publicHolidayHours += hoursForType;
          break;
        case 'new_years_eve':
          summary.newYearsEveHours += hoursForType;
          break;
      }

      summary.subtotal += shiftCost.subtotal;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Calculate final GST and total
  summary.gst = round(summary.subtotal * GST_RATE);
  summary.total = round(summary.subtotal + summary.gst);
  summary.subtotal = round(summary.subtotal);

  return {
    startDate: formatDateISO(start),
    endDate: formatDateISO(end),
    hoursPerDay,
    guards,
    workDays,
    dailyBreakdown,
    summary,
    rates: METRO_GUARDS_RATES,
    calculatedAt: new Date().toISOString(),
  };
}

/**
 * Generate a quick estimate without daily breakdown
 * @param {Object} params - Estimate parameters
 * @returns {Object} Quick estimate
 */
export function generateQuickEstimate({
  hoursPerWeek = 40,
  guards = 1,
  weeks = 4,
  shiftType = 'day', // 'day', 'night', 'mixed'
}) {
  let avgRate;
  switch (shiftType) {
    case 'night':
      avgRate = METRO_GUARDS_RATES.WEEKDAY_NIGHT.rate;
      break;
    case 'mixed':
      avgRate = (METRO_GUARDS_RATES.WEEKDAY_DAY.rate + METRO_GUARDS_RATES.WEEKDAY_NIGHT.rate) / 2;
      break;
    default:
      avgRate = METRO_GUARDS_RATES.WEEKDAY_DAY.rate;
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
    subtotal: round(subtotal),
    gst: round(gst),
    total: round(total),
    note: 'This is an estimate. Final quote may vary based on specific dates, holidays, and overtime.',
  };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function round(value) {
  return Math.round(value * 100) / 100;
}

function formatDateISO(date) {
  return date.toISOString().split('T')[0];
}

function formatDayName(date) {
  return date.toLocaleDateString('en-AU', { weekday: 'long' });
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
 * Generate rate card for display
 * @returns {Array} Rate card items
 */
export function getRateCard() {
  return [
    { type: 'Weekday Day (6am-6pm)', rate: METRO_GUARDS_RATES.WEEKDAY_DAY.rate, icon: '☀️' },
    { type: 'Weekday Night (6pm-6am)', rate: METRO_GUARDS_RATES.WEEKDAY_NIGHT.rate, icon: '🌙' },
    { type: 'Saturday', rate: METRO_GUARDS_RATES.SATURDAY.rate, icon: '📅' },
    { type: 'Sunday', rate: METRO_GUARDS_RATES.SUNDAY.rate, icon: '🔴' },
    { type: 'Public Holiday', rate: METRO_GUARDS_RATES.PUBLIC_HOLIDAY.rate, icon: '🎉' },
    { type: "New Year's Eve", rate: METRO_GUARDS_RATES.NEW_YEARS_EVE.rate, icon: '🎆' },
  ];
}

// ============================================
// DEFAULT EXPORT
// ============================================

export default {
  METRO_GUARDS_RATES,
  OVERTIME_RULES,
  GST_RATE,
  LEGAL_PROTECTIONS,
  CERTIFICATIONS,
  getApplicableRate,
  calculateOvertime,
  calculateShiftCost,
  calculateBookingTotal,
  generateQuickEstimate,
  formatCurrency,
  getRateCard,
};


