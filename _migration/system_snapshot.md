# 🔮 SYSTEM SNAPSHOT
> **Metro Guards Security Services - Infrastructure Documentation**
> 
> Generated: 2025-12-29
> Agent Version: God-Level Handover Agent v1.0
> Status: 🟡 PRE-MIGRATION (Developer-Owned)

---

## 📊 OWNERSHIP MATRIX

| Asset | Current Owner | Target Owner | Status |
|-------|---------------|--------------|--------|
| GitHub Repository | `developer794` | CLIENT TBD | 🔴 Not Migrated |
| Supabase Project | Developer Account | CLIENT TBD | 🔴 Not Migrated |
| Vercel Deployment | Unknown | CLIENT TBD | 🔴 Not Migrated |
| Domain (metroguards.com.au) | Unknown | CLIENT TBD | 🔴 Not Migrated |
| Resend Email API | Developer Account | CLIENT TBD | 🔴 Not Migrated |
| Google Analytics | Unknown | CLIENT TBD | 🔴 Not Migrated |

---

## 🏗️ ARCHITECTURE OVERVIEW

### Technology Stack
```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND                                │
│  Next.js 13.4.19 (App Router) + React 18.2.0               │
│  Tailwind CSS 4.1.16 + Bootstrap 5.3.8                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      API LAYER                               │
│  Next.js API Routes (/app/api/*)                            │
│  - /api/contact, /api/quotation, /api/booking               │
│  - /api/blogs, /api/signin, /api/signout                    │
│  - /api/career, /api/contractor, /api/incident              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE                                │
│  PostgreSQL via Prisma ORM                                  │
│  Host: Supabase (dqaghuhkouihcvqvcsco.supabase.co)         │
│  Connection: Superbase_POSTGRES_PRISMA_URL                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                         │
│  • Supabase Storage (public bucket for images)              │
│  • Resend API (email delivery)                              │
│  • Google Analytics (tracking)                              │
│  • Tawk.to (live chat - TawkLoader.tsx)                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔗 CURRENT LINKS & IDENTIFIERS

### GitHub
| Property | Value |
|----------|-------|
| Repository URL | https://github.com/developer794/Metroguards.git |
| Owner Account | `developer794` |
| Primary Branch | `main` |
| Latest Commit | `e982a24` (added tag) |
| Contributor Email | ummehabiba989@gmail.com |

### Supabase
| Property | Value |
|----------|-------|
| Project ID | `dqaghuhkouihcvqvcsco` |
| Dashboard URL | https://supabase.com/dashboard/project/dqaghuhkouihcvqvcsco |
| Storage Endpoint | https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/** |
| Region | TBD (check dashboard) |
| Database Connection | Via `Superbase_POSTGRES_PRISMA_URL` env var |

### Vercel
| Property | Value |
|----------|-------|
| Project Link | ⚠️ NO `.vercel/project.json` FOUND |
| Deployment URL | TBD |
| Team/Account | TBD |

### Domain & DNS
| Property | Value |
|----------|-------|
| Production Domain | metroguards.com.au |
| Configured In | `NEXT_PUBLIC_SITE_URL` env var |

---

## 📦 DATABASE SCHEMA (Prisma Models)

```prisma
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
  content    String    // HTML from TipTap editor
  coverImage String?   // Cloudinary URL
  tags       String[]  @default([])
  published  Boolean   @default(false)
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt
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

---

## 🔐 AUTHENTICATION SYSTEM

| Component | Implementation |
|-----------|----------------|
| Method | Custom JWT (NOT Supabase Auth) |
| Library | `jose` v6.1.0 |
| Token Storage | HTTP Cookie (`auth`) |
| Secret | `JWT_SECRET` env var |
| User Table | Prisma `User` model |

**Auth Flow:**
```
Login → /api/signin → Validate credentials → Sign JWT → Set cookie
Verify → /lib/auth.js → getUserFromCookie() → jwtVerify()
Logout → /api/signout → Clear cookie
```

---

## 📁 PROJECT STRUCTURE

```
website-sss/
├── app/                          # Next.js App Router
│   ├── api/                      # 20+ API routes
│   ├── dashboard/                # Admin dashboard (22 files)
│   ├── signin/ & signup/         # Auth pages
│   ├── [60+ service pages]       # Security service landing pages
│   ├── layout.js                 # Root layout
│   └── page.js                   # Homepage
├── components/
│   ├── layout/                   # Header, Footer, Menu, MobileMenu
│   ├── homepages/                # 90 component files
│   ├── ui/                       # Radix UI components (15 files)
│   └── [shared components]
├── lib/
│   ├── auth.js                   # JWT authentication helper
│   ├── prisma.js                 # Prisma client
│   └── rate-limit.js             # Rate limiting utility
├── prisma/
│   ├── schema.prisma             # Database schema
│   ├── migrations/               # 3 SQL migration files
│   └── seed.ts                   # Database seeder
├── public/                       # 713 static assets
├── .env.local                    # Environment variables (SENSITIVE)
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
└── tailwind.config.js            # Tailwind configuration
```

---

## 📊 DEPENDENCY VERSIONS

| Package | Version | Critical For |
|---------|---------|--------------|
| next | 13.4.19 | Core framework |
| react | 18.2.0 | UI library |
| @prisma/client | 6.18.0 | Database ORM |
| resend | 6.3.0 | Email service |
| jose | 6.1.0 | JWT authentication |
| bcryptjs | 3.0.2 | Password hashing |
| tailwindcss | 4.1.16 | Styling |

---

## 🚨 MIGRATION RISK ASSESSMENT

| Risk | Level | Mitigation |
|------|-------|------------|
| Database data loss | 🔴 HIGH | Export all tables before migration |
| Auth token invalidation | 🟡 MEDIUM | Coordinate JWT_SECRET transfer |
| Image links breaking | 🔴 HIGH | Keep old Supabase project read-only temporarily |
| Email delivery interruption | 🟡 MEDIUM | Update Resend API key last |
| DNS propagation delay | 🟡 MEDIUM | Use parallel deployment strategy |

---

## 📝 MIGRATION LOG

| Date | Action | Component | Status |
|------|--------|-----------|--------|
| 2025-12-29 | Snapshot created | All | ✅ Complete |
| - | GitHub transfer | Pending | 🔴 Not Started |
| - | Supabase migration | Pending | 🔴 Not Started |
| - | Vercel migration | Pending | 🔴 Not Started |

---

*Last Updated: 2025-12-29 by God-Level Handover Agent*

