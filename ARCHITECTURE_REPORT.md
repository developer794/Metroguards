# 📋 Metro Guards Website - Technical Architecture Report

## Executive Summary
This document provides a complete architectural overview of the Metro Guards Security Services website, mapping the frontend routing structure to the Supabase backend data layer. This report is intended to guide the implementation of a new **Quotation System** within the existing Dashboard.

---

## 1. Functional Site Map (Frontend & Routing)

### 1.1 Framework & Routing Configuration
- **Framework**: Next.js 13.4.19 with App Router
- **Routing**: File-system based routing using the `/app` directory
- **Rendering**: Hybrid (Server Components + Client Components)

### 1.2 Hierarchical Site Structure

```
📁 app/
├── 📄 page.js                          # Homepage
├── 📄 layout.js                        # Root layout (global providers)
├── 📄 sitemap.js                       # Dynamic sitemap generation
├── 📄 loading.js                       # Global loading state
├── 📄 not-found.js                     # 404 page
│
├── 🔐 AUTH ROUTES
│   ├── signin/page.js                  # Sign-in page
│   ├── signup/page.js                  # Sign-up page
│   └── forgot/page.js                  # Forgot password
│
├── 🎛️ DASHBOARD (Admin Panel) ⭐
│   ├── layout.js                       # Dashboard layout (auth protected)
│   ├── page.js                         # Dashboard overview
│   ├── _components/
│   │   ├── HeaderClient.js             # Dashboard header
│   │   ├── Sidebar.js                  # Navigation sidebar
│   │   ├── SidebarContext.js           # Sidebar state management
│   │   └── StatsCards.js               # Dashboard statistics
│   ├── blogs/
│   │   ├── page.js                     # All blogs list
│   │   ├── BlogsClientPage.js          # Client component
│   │   ├── BlogCard.js                 # Blog card component
│   │   ├── CreateBlogForm.js           # Blog creation form
│   │   ├── EditBlogForm.js             # Blog edit form
│   │   ├── RichTextEditor.js           # TipTap editor
│   │   ├── DeleteButton.js             # Delete action
│   │   ├── new/page.js                 # Create new blog
│   │   └── [id]/edit/page.js           # Edit specific blog
│   ├── bookings/
│   │   ├── page.js                     # Contact inquiries list
│   │   └── ContactInquiriesClient.js   # Client component
│   └── quotations/
│       ├── page.js                     # Quotations list ⭐
│       └── QuotationsClient.js         # Client component ⭐
│
├── 📝 FORMS
│   ├── booking-form-security-services-australia/
│   ├── get-quotation/                  # Quotation request form ⭐
│   ├── careers/                        # Job application
│   ├── contacts/                       # Contact form
│   ├── incident-report-feedback-form/
│   ├── contractor-declaration-form/
│   └── book-a-guard/
│
├── 🏢 SERVICE PAGES (30+ routes)
│   ├── building-security-guards/
│   ├── construction-site-security-guards/
│   ├── event-security-guards/
│   ├── mobile-patrol-services/
│   ├── k9-security-guards-in-melbourne/
│   └── ... (other service pages)
│
├── 📍 LOCATION PAGES
│   ├── north-melbourne/
│   ├── south-melbourne/
│   ├── east-melbourne/
│   ├── west-melbourne/
│   ├── melbourne-CBD/
│   └── regional-victoria-cities/
│
├── 🏭 INDUSTRY PAGES
│   ├── industry-corporate-commercial/
│   ├── industry-construction-infrastructure/
│   ├── industry-healthcare-aged/
│   └── industry-retail-hospitality/
│
├── 📰 CONTENT PAGES
│   ├── blogs/                          # Public blog listing
│   ├── faqs/
│   ├── about-us pages (mission, values, etc.)
│   └── legal pages (privacy, disclaimer, etc.)
│
└── 🔌 API ROUTES
    └── api/
        ├── booking/route.tsx           # Booking form handler
        ├── quotation/route.ts          # Quotation form handler ⭐
        ├── quotations/[id]/route.ts    # Quotation CRUD ⭐
        ├── contact/route.ts            # Contact form
        ├── contact-inquiries/[id]/route.ts
        ├── career/route.ts             # Career application
        ├── blogs/route.js              # Blog CRUD
        ├── public-blogs/route.js       # Public blog API
        ├── send-email/route.ts         # Email sending
        ├── signin/route.js             # Auth
        └── signout/route.js            # Auth
```

### 1.3 Dashboard Section Components

```
🎛️ DASHBOARD STRUCTURE
┌──────────────────────────────────────────────────────────────┐
│  DashboardLayout (layout.js)                                 │
│  ├── Auth Check (JWT verification via Jose)                 │
│  ├── SidebarProvider (Context)                              │
│  │                                                           │
│  ├── Sidebar                        │ Main Content Area     │
│  │  ├── Logo                        │  ├── HeaderClient     │
│  │  ├── Overview Link               │  │                    │
│  │  ├── Create Blog                 │  └── {children}       │
│  │  ├── All Blogs                   │      ├── StatsCards   │
│  │  ├── Contact Inquiries           │      ├── Quick Actions│
│  │  └── Quotations ⭐               │      └── Data Tables  │
│  │                                   │                       │
└──────────────────────────────────────────────────────────────┘
```

---

## 2. Backend & Data Architecture (Supabase/Prisma)

### 2.1 Database Configuration
- **Provider**: Supabase PostgreSQL
- **ORM**: Prisma Client v6.18.0
- **Connection**: Pooled via PgBouncer

### 2.2 Database Schema (Entity-Relationship)

```
┌─────────────────────────────────────────────────────────────────┐
│                      DATABASE SCHEMA                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────┐           ┌─────────────────┐             │
│  │     User        │           │      Post       │             │
│  ├─────────────────┤           ├─────────────────┤             │
│  │ id       (PK)   │──────────▶│ id       (PK)   │             │
│  │ email    (UQ)   │     1:N   │ title           │             │
│  │ password        │           │ slug     (UQ)   │             │
│  │ createdAt       │           │ excerpt         │             │
│  └─────────────────┘           │ content         │             │
│                                │ coverImage      │             │
│                                │ tags     []     │             │
│                                │ published       │             │
│                                │ authorId (FK)   │◀────────────│
│                                │ createdAt       │             │
│                                │ updatedAt       │             │
│                                └─────────────────┘             │
│                                                                  │
│  ┌─────────────────────┐       ┌─────────────────────┐         │
│  │  ContactInquiry     │       │     Quotation ⭐    │         │
│  ├─────────────────────┤       ├─────────────────────┤         │
│  │ id          (PK)    │       │ id          (PK)    │         │
│  │ name                │       │ name                │         │
│  │ email               │       │ email               │         │
│  │ phone       (opt)   │       │ phone       (opt)   │         │
│  │ serviceType         │       │ industry            │         │
│  │ location            │       │ service             │         │
│  │ message     (text)  │       │ location    (opt)   │         │
│  │ status              │       │ message     (opt)   │         │
│  │ createdAt           │       │ status              │         │
│  │ updatedAt           │       │ createdAt           │         │
│  └─────────────────────┘       │ updatedAt           │         │
│                                └─────────────────────┘         │
│                                                                  │
│  Status Values: "new" | "contacted" | "resolved"               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Prisma Schema Definition

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("Superbase_POSTGRES_PRISMA_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  posts     Post[]
}

model Post {
  id         Int       @id @default(autoincrement())
  title      String
  slug       String    @unique
  excerpt    String?
  content    String     // HTML from TipTap
  coverImage String?    // Cloudinary URL
  tags       String[]   @default([])
  published  Boolean    @default(false)
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt
  authorId   Int
  author     User      @relation(fields: [authorId], references: [id])
}

model ContactInquiry {
  id          Int      @id @default(autoincrement())
  name        String
  email       String
  phone       String?
  serviceType String
  location    String
  message     String   @db.Text
  status      String   @default("new")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Quotation {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  phone     String?
  industry  String
  service   String
  location  String?
  message   String?  @db.Text
  status    String   @default("new")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### 2.4 API Routes Summary

| Endpoint | Method | Purpose | Handler |
|----------|--------|---------|---------|
| `/api/quotation` | POST | Submit new quotation request | `route.ts` |
| `/api/quotations/[id]` | PATCH | Update quotation status | `route.ts` |
| `/api/quotations/[id]` | DELETE | Delete quotation | `route.ts` |
| `/api/booking` | POST | Submit booking form | `route.tsx` |
| `/api/contact` | POST | Contact form submission | `route.ts` |
| `/api/contact-inquiries/[id]` | PATCH/DELETE | Manage inquiries | `route.ts` |
| `/api/blogs` | GET/POST | Blog CRUD | `route.js` |
| `/api/blogs/[id]` | GET/PATCH/DELETE | Blog operations | `route.js` |
| `/api/send-email` | POST | Send email via Resend | `route.ts` |
| `/api/signin` | POST | Authentication | `route.js` |
| `/api/signout` | POST | Clear auth cookie | `route.js` |

---

## 3. Data Flow Analysis

### 3.1 Request-to-Render Flow

The application uses **Server-Side Rendering (SSR)** with direct Prisma queries in Server Components:

```
┌─────────────────────────────────────────────────────────────────┐
│                    DATA FLOW PATTERN                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. User Request                                                 │
│       │                                                          │
│       ▼                                                          │
│  2. Next.js App Router                                           │
│       │                                                          │
│       ▼                                                          │
│  3. Dashboard Layout (Server Component)                          │
│       │                                                          │
│       ├── JWT Verification (Jose)                               │
│       │     └── cookies().get("auth")                           │
│       │     └── jwtVerify(token, secret)                        │
│       │                                                          │
│       ▼                                                          │
│  4. Page Server Component (e.g., quotations/page.js)            │
│       │                                                          │
│       ├── Direct Prisma Query                                   │
│       │     └── prisma.quotation.findMany()                     │
│       │                                                          │
│       ├── Data Serialization (dates to ISO strings)             │
│       │                                                          │
│       ▼                                                          │
│  5. Client Component (e.g., QuotationsClient.js)                │
│       │                                                          │
│       ├── Receives: initialQuotations, initialStats             │
│       ├── useState for local state management                    │
│       ├── useMemo for filtering/sorting                          │
│       │                                                          │
│       ▼                                                          │
│  6. User Interactions (Updates)                                  │
│       │                                                          │
│       ├── fetch('/api/quotations/[id]', { method: 'PATCH' })    │
│       ├── Update local state                                     │
│       │                                                          │
│       ▼                                                          │
│  7. API Route (Server)                                           │
│       │                                                          │
│       └── prisma.quotation.update()                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Current Quotation Flow

```
┌─────────────────────────────────────────────────────────────────┐
│               CURRENT QUOTATION SYSTEM FLOW                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  FRONTEND (Public)                BACKEND                        │
│  ─────────────────                ───────                        │
│                                                                  │
│  /get-quotation/page.js                                          │
│       │                                                          │
│       ├── Form Submission                                        │
│       │   └── FormData with reCAPTCHA token                     │
│       │                                                          │
│       ▼                                                          │
│  POST /api/quotation                                             │
│       │                                                          │
│       ├── Rate Limiting Check                                    │
│       ├── Honeypot Bot Detection                                 │
│       ├── reCAPTCHA Verification                                 │
│       ├── Form Validation                                        │
│       │                                                          │
│       ├── prisma.quotation.create()                             │
│       │                                                          │
│       ├── Send Admin Notification Email (Resend)                 │
│       └── Send Client Confirmation Email (Resend)                │
│                                                                  │
│                                                                  │
│  DASHBOARD (Admin)                                               │
│  ─────────────────                                               │
│                                                                  │
│  /dashboard/quotations/page.js (Server)                          │
│       │                                                          │
│       └── prisma.quotation.findMany()                           │
│           └── Calculate stats (new, contacted, resolved)        │
│                                                                  │
│       ▼                                                          │
│  QuotationsClient.js (Client)                                    │
│       │                                                          │
│       ├── Display quotations table                               │
│       ├── Search, filter, sort                                   │
│       ├── View details modal                                     │
│       ├── Update status → PATCH /api/quotations/[id]            │
│       ├── Delete → DELETE /api/quotations/[id]                  │
│       └── Send email → POST /api/send-email                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Where New Quotation System Data Would Fit

For an enhanced Quotation System with features like:
- Quote generation
- Pricing calculations
- PDF generation
- Quote approval workflow

**Recommended Database Extension:**

```prisma
model Quotation {
  // Existing fields...
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  phone     String?
  industry  String
  service   String
  location  String?
  message   String?  @db.Text
  status    String   @default("new")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // NEW FIELDS FOR ENHANCED QUOTATION SYSTEM ⭐
  quoteNumber    String?   @unique    // e.g., "QT-2025-0001"
  quoteAmount    Decimal?  @db.Decimal(10, 2)
  validUntil     DateTime?
  serviceDetails Json?                 // Flexible service config
  quoteItems     QuoteItem[]           // Line items
  quotePdfUrl    String?               // Generated PDF storage
  approvedAt     DateTime?
  approvedBy     Int?                  // Admin user ID
  notes          String?   @db.Text    // Internal notes
}

model QuoteItem {
  id          Int       @id @default(autoincrement())
  quotationId Int
  quotation   Quotation @relation(fields: [quotationId], references: [id])
  description String
  quantity    Int       @default(1)
  unit        String    @default("hour")  // hour, day, week, month
  unitPrice   Decimal   @db.Decimal(10, 2)
  totalPrice  Decimal   @db.Decimal(10, 2)
  createdAt   DateTime  @default(now())
}
```

**New API Routes Needed:**

```
/api/quotation/[id]/generate-quote   POST  → Generate quote with pricing
/api/quotation/[id]/pdf              GET   → Generate/download PDF
/api/quotation/[id]/approve          POST  → Approve quote
/api/quotation/[id]/send             POST  → Send quote to customer
```

---

## 4. Tech Stack Summary

### 4.1 Core Technologies

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 13.4.19 |
| **Runtime** | React | 18.2.0 |
| **Language** | TypeScript / JavaScript | 5.9.2 |
| **Database** | Supabase PostgreSQL | - |
| **ORM** | Prisma Client | 6.18.0 |

### 4.2 State Management

| Purpose | Library | Usage |
|---------|---------|-------|
| **Local State** | React useState | Form inputs, modals, filters |
| **Context** | React Context API | Sidebar state (SidebarContext) |
| **Memoization** | React useMemo | Filtered/sorted data lists |
| **Refs** | React useRef | Dropdown outside click handling |

### 4.3 UI Components

| Category | Library | Usage |
|---------|---------|-------|
| **CSS Framework** | Tailwind CSS | 4.1.16 |
| **Component Library** | Bootstrap | 5.3.8 |
| **Icons** | Bootstrap Icons | 1.13.1 |
| **Icons** | FontAwesome | 7.1.0 |
| **Animations** | Framer Motion | 12.23.24 |
| **Sliders** | Swiper | 10.3.1 |
| **Carousels** | React Slick | 0.29.0 |
| **Rich Text Editor** | TipTap | 3.10.0 |
| **Toasts** | React Toastify | 11.0.5 |
| **UI Primitives** | Radix UI | Various |

### 4.4 Data Fetching & APIs

| Purpose | Library | Pattern |
|---------|---------|---------|
| **Server Data** | Prisma Client | Direct queries in Server Components |
| **Client Mutations** | Fetch API | POST/PATCH/DELETE to API routes |
| **Email** | Resend | Transactional emails |
| **PDF Generation** | pdf-lib | Client/server PDF creation |
| **Form Validation** | Zod | Schema validation (available) |

### 4.5 Authentication & Security

| Feature | Implementation |
|---------|---------------|
| **JWT Handling** | Jose library |
| **Password Hashing** | bcrypt / bcryptjs |
| **Bot Protection** | Honeypot fields |
| **Spam Prevention** | Google reCAPTCHA v2 |
| **Rate Limiting** | Custom rate-limit.js |
| **XSS Prevention** | DOMPurify |

---

## 5. Developer Quick Reference

### 5.1 Database Connection

```javascript
// lib/prisma.js - Singleton Prisma Client
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
```

### 5.2 Server Component Data Fetching Pattern

```javascript
// Example: /dashboard/quotations/page.js
import prisma from "@/lib/prisma";
import QuotationsClient from "./QuotationsClient";

export default async function QuotationsPage() {
  const quotations = await prisma.quotation.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Serialize dates for client component
  const serializedQuotations = quotations.map(q => ({
    ...q,
    createdAt: q.createdAt.toISOString(),
    updatedAt: q.updatedAt.toISOString(),
  }));

  return <QuotationsClient initialQuotations={serializedQuotations} />;
}
```

### 5.3 API Route Pattern

```typescript
// Example: /api/quotations/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(request, { params }) {
  const id = Number(params.id);
  const { status } = await request.json();

  const updated = await prisma.quotation.update({
    where: { id },
    data: { status },
  });
  
  return NextResponse.json(updated);
}
```

### 5.4 Authentication Check Pattern

```javascript
// Dashboard layout authentication
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

async function getUser() {
  const token = cookies().get("auth")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(
      token, 
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload;
  } catch {
    return null;
  }
}

// In layout component
const user = await getUser();
if (!user) redirect("/signin");
```

---

## 6. Recommendations for New Quotation System

### 6.1 Immediate Actions

1. **Extend Prisma Schema** with `quoteNumber`, `quoteAmount`, `quoteItems` relation
2. **Create new API routes** under `/api/quotation/[id]/` for generate, approve, send
3. **Build QuoteBuilder component** in `/dashboard/quotations/` for line-item creation
4. **Integrate PDF generation** using existing `pdf-lib` dependency

### 6.2 Dashboard Integration Point

Add new route to existing sidebar:

```javascript
// dashboard/_components/Sidebar.js
<SidebarItem 
  href="/dashboard/quotations/builder" 
  label="Quote Builder" 
  icon={/* calculator icon */}
/>
```

### 6.3 Data Flow for New System

```
Customer Request → Quotation (status: new)
                        ↓
Admin Creates Quote → QuoteItems[] + pricing
                        ↓
Generate PDF → Store URL in quotePdfUrl
                        ↓
Send to Customer → Email with PDF attachment
                        ↓
Customer Approval → Update status to "approved"
                        ↓
Convert to Booking → New Booking record
```

---

## 7. Environment Variables Required

```env
# Database
Superbase_POSTGRES_URL=postgresql://...
Superbase_POSTGRES_PRISMA_URL=postgresql://...

# Authentication
JWT_SECRET=your-jwt-secret

# Email (Resend)
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=noreply@metroguards.com.au
CONTACT_TO_EMAIL=admin@metroguards.com.au

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
RECAPTCHA_SECRET_KEY=...

# App
NEXT_PUBLIC_BASE_URL=https://metroguards.com.au
```

---

## 8. File Structure Overview

```
📁 website-sss/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 api/                # API routes
│   ├── 📁 dashboard/          # Admin dashboard
│   └── 📁 [various pages]/    # Public pages
├── 📁 components/             # Reusable components
│   ├── 📁 layout/             # Header, Footer, Menu
│   ├── 📁 homepages/          # Homepage sections
│   ├── 📁 ui/                 # UI primitives
│   └── 📁 blog/               # Blog components
├── 📁 lib/                    # Utilities
│   ├── auth.js                # Auth helpers
│   ├── prisma.js              # Database client
│   └── rate-limit.js          # Rate limiting
├── 📁 prisma/                 # Database schema
│   ├── schema.prisma          # Prisma schema
│   └── 📁 migrations/         # DB migrations
├── 📁 public/                 # Static assets
└── 📄 package.json            # Dependencies
```

---

*Report Generated: December 24, 2025*  
*For: Metro Guards Security Services Website*  
*Framework Version: Next.js 13.4.19 / React 18.2.0*

