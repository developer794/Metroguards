# Metro Guards Database Change Map (DBC_MAP)

## Overview
This document tracks all database structural changes for the Metro Guards Quotation System and Admin Dashboard. Every migration must be documented here before applying to the shared database.

---

## Database Connection
- **Project ID**: xaianrtwysofconxmqry
- **Project URL**: https://xaianrtwysofconxmqry.supabase.co
- **Region**: ap-southeast-2 (Sydney)

---

## Current Schema (Pre-Migration)

### Existing Tables

| Table | Purpose | Row Count |
|-------|---------|-----------|
| User | Admin/Author accounts | 1 |
| Post | Blog posts | 90 |
| ContactInquiry | Contact form submissions | 2 |
| Quotation | Quote requests from website | 3 |

---

## Migration Log

### Migration 001: Workforce Management Schema
**Date**: 2025-12-30
**Status**: ✅ APPLIED
**Author**: AI Architect
**Migration Version**: 20251230093212

#### Tables to Create:

##### 1. ServiceRate
Stores the Metro Guards pricing rates for different time slots.
```
- id (INT, PK, auto)
- name (VARCHAR) - e.g., "weekday_day", "weekend_saturday"
- description (TEXT)
- hourlyRate (DECIMAL 10,2)
- overtimeMultiplier1 (DECIMAL 4,2) - First 2 hours (1.5x)
- overtimeMultiplier2 (DECIMAL 4,2) - After 2 hours (2x)
- isActive (BOOLEAN)
- effectiveFrom (TIMESTAMP)
- effectiveTo (TIMESTAMP, nullable)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

##### 2. Site
Stores client site/location information.
```
- id (INT, PK, auto)
- name (VARCHAR)
- address (TEXT)
- suburb (VARCHAR)
- postcode (VARCHAR)
- state (VARCHAR)
- contactName (VARCHAR)
- contactPhone (VARCHAR)
- contactEmail (VARCHAR)
- industry (VARCHAR) - Construction, Retail, Healthcare, etc.
- specialInstructions (TEXT, nullable)
- isActive (BOOLEAN)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

##### 3. Booking
Stores approved quotations that become active bookings.
```
- id (INT, PK, auto)
- quotationId (INT, FK -> Quotation.id)
- siteId (INT, FK -> Site.id)
- clientName (VARCHAR)
- clientEmail (VARCHAR)
- clientPhone (VARCHAR, nullable)
- industry (VARCHAR)
- serviceType (VARCHAR)
- startDate (TIMESTAMP)
- endDate (TIMESTAMP, nullable)
- numberOfGuards (INT)
- hoursPerDay (DECIMAL 4,2)
- estimatedTotalHours (DECIMAL 10,2)
- estimatedTotalCost (DECIMAL 12,2)
- gstAmount (DECIMAL 10,2)
- grandTotal (DECIMAL 12,2)
- status (VARCHAR) - 'confirmed', 'in_progress', 'completed', 'cancelled'
- notes (TEXT, nullable)
- approvedBy (INT, FK -> User.id, nullable)
- approvedAt (TIMESTAMP, nullable)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

##### 4. Schedule
Stores individual guard schedules for each booking.
```
- id (INT, PK, auto)
- bookingId (INT, FK -> Booking.id)
- guardName (VARCHAR, nullable)
- shiftDate (DATE)
- startTime (TIME)
- endTime (TIME)
- breakMinutes (INT)
- rateType (VARCHAR) - References ServiceRate.name
- hourlyRate (DECIMAL 10,2)
- regularHours (DECIMAL 4,2)
- overtimeHours1 (DECIMAL 4,2) - First 2 hours at 1.5x
- overtimeHours2 (DECIMAL 4,2) - Beyond 2 hours at 2x
- totalCost (DECIMAL 10,2)
- isPublicHoliday (BOOLEAN)
- holidayName (VARCHAR, nullable)
- status (VARCHAR) - 'scheduled', 'completed', 'cancelled'
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

##### 5. PublicHoliday (Victoria, Australia)
Stores public holiday dates for automatic rate calculation.
```
- id (INT, PK, auto)
- name (VARCHAR)
- date (DATE)
- state (VARCHAR) - 'VIC', 'ALL'
- year (INT)
- isNewYearsEve (BOOLEAN) - For special 110/hr rate
- createdAt (TIMESTAMP)
```

#### Quotation Table Enhancement:
Add new columns to existing Quotation table:
```
- companyName (VARCHAR, nullable)
- guardsRequired (INT, nullable)
- hoursPerWeek (DECIMAL 5,2, nullable)
- startDate (DATE, nullable)
- endDate (DATE, nullable)
- estimatedCost (DECIMAL 12,2, nullable)
- gstAmount (DECIMAL 10,2, nullable)
- grandTotal (DECIMAL 12,2, nullable)
- costBreakdown (JSON/TEXT, nullable)
- isApproved (BOOLEAN, default false)
- approvedAt (TIMESTAMP, nullable)
- approvedBy (INT, FK -> User.id, nullable)
- bookingId (INT, FK -> Booking.id, nullable)
```

---

## Rate Configuration (As of 2025-12-30)

| Rate Type | Hourly Rate | Description |
|-----------|-------------|-------------|
| weekday_day | $40.70 | Mon-Fri 6:00 AM - 6:00 PM |
| weekday_night | $46.00 | Mon-Fri 6:00 PM - 6:00 AM |
| saturday | $59.50 | Saturday All Day |
| sunday | $79.50 | Sunday All Day |
| public_holiday | $95.00 | Public Holidays |
| new_years_eve | $110.00 | December 31st (Special Rate) |

### Overtime Rules
- First 2 hours overtime: **1.5x** base rate
- Beyond 2 hours overtime: **2x** base rate
- GST: **10%** applied to all totals

---

## Legal Requirements in Quotations

Every quotation must include:
1. **$25,000 Placement Fee Clause** - Protection against guard poaching
2. **7-Day Invoice Dispute Window** - All disputes within 7 days
3. **ISO Certifications**:
   - ISO 9001 (Quality Management)
   - ISO 14001 (Environmental Management)
   - ISO 45001 (Occupational Health & Safety)

---

## Industry Templates

| Industry | Key Clients | Special Requirements |
|----------|-------------|----------------------|
| Construction | Qanstruct, Ertech | Site safety, after-hours patrol |
| Retail | Costco, Aldi | Loss prevention, crowd control |
| Healthcare | Hospitals | Sensitive environment, training |
| Corporate | Office buildings | Access control, concierge |
| Events | Festivals, Concerts | Crowd management, emergency |

---

## Rollback Procedures

### If migration fails:
1. Note the error in this document
2. Run rollback SQL (provided with each migration)
3. Document the issue and resolution
4. Re-attempt with fixes

---

---

## Migration 002: Seed Service Rates and Holidays
**Date**: 2025-12-30
**Status**: ✅ APPLIED
**Author**: AI Architect
**Migration Version**: 20251230093237

### Data Seeded:
- 6 Service Rates (weekday_day, weekday_night, saturday, sunday, public_holiday, new_years_eve)
- 28 Victorian Public Holidays (2025-2026)

---

## Security Notes

### Row Level Security (RLS)
RLS is currently **not enabled** on the database tables. This is acceptable because:
- All database access is through Next.js API routes (server-side only)
- No direct client-to-Supabase connections are made
- Authentication is handled via NextAuth at the application layer

If direct Supabase client access is needed in the future, enable RLS with appropriate policies.

Reference: https://supabase.com/docs/guides/database/database-linter?lint=0013_rls_disabled_in_public

---

## Current Table Summary

| Table | Rows | Purpose |
|-------|------|---------|
| User | 1 | Admin accounts |
| Post | 90 | Blog posts |
| ContactInquiry | 2 | Contact form submissions |
| Quotation | 3 | Quote requests (enhanced with approval workflow) |
| ServiceRate | 6 | Metro Guards pricing rates |
| Site | 0 | Client site locations |
| Booking | 0 | Approved quotations / active bookings |
| Schedule | 0 | Guard shift schedules |
| PublicHoliday | 28 | Victoria public holidays 2025-2026 |

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2025-12-30 | AI Architect | Initial DBC_MAP creation |
| 1.1.0 | 2025-12-30 | AI Architect | Applied workforce management schema, seeded rates & holidays |

