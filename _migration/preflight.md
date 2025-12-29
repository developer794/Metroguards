# ✈️ PREFLIGHT CHECKLIST
> **Metro Guards Security Services - Credentials & Secrets Inventory**
>
> Generated: 2025-12-29
> Status: 🟡 AWAITING CREDENTIAL COLLECTION

---

## 🎯 PURPOSE

This document tracks ALL credentials and secrets that must be:
1. **Collected** from the current developer accounts
2. **Transferred** or **Recreated** in the client's new accounts
3. **Verified** working in the new infrastructure

---

## 📋 CREDENTIAL INVENTORY

### 1️⃣ GITHUB CREDENTIALS

| Item | Current Value | New Value | Status |
|------|---------------|-----------|--------|
| Repository Owner | `developer794` | TBD | ⬜ Pending |
| Repository URL | https://github.com/developer794/Metroguards.git | TBD | ⬜ Pending |
| GitHub Account Email | ummehabiba989@gmail.com | TBD | ⬜ Pending |
| Deploy Keys | Check repo settings | TBD | ⬜ Pending |
| Webhooks | Check repo settings | TBD | ⬜ Pending |
| GitHub Actions Secrets | Check repo settings | TBD | ⬜ Pending |

**Migration Options:**
- [ ] Option A: Transfer repository ownership (Settings → Danger Zone)
- [ ] Option B: Fork to new organization + archive old repo
- [ ] Option C: Fresh clone to new repo (loses git history)

---

### 2️⃣ SUPABASE CREDENTIALS

| Item | Current Value | New Value | Status |
|------|---------------|-----------|--------|
| Project ID | `dqaghuhkouihcvqvcsco` | TBD | ⬜ Pending |
| Organization | TBD (check dashboard) | TBD | ⬜ Pending |
| Project URL | dqaghuhkouihcvqvcsco.supabase.co | TBD | ⬜ Pending |
| Anon Key | ⚠️ COLLECT FROM .env.local | TBD | ⬜ Pending |
| Service Role Key | ⚠️ COLLECT FROM .env.local | TBD | ⬜ Pending |
| Database Password | ⚠️ COLLECT FROM dashboard | TBD | ⬜ Pending |
| Connection String | `Superbase_POSTGRES_PRISMA_URL` | TBD | ⬜ Pending |

**Required Actions:**
- [ ] Export database using `pg_dump` or Supabase dashboard
- [ ] Download storage bucket contents
- [ ] Document all RLS policies
- [ ] Note storage bucket configurations

---

### 3️⃣ VERCEL CREDENTIALS

| Item | Current Value | New Value | Status |
|------|---------------|-----------|--------|
| Project Name | TBD | TBD | ⬜ Pending |
| Team/Account | TBD | TBD | ⬜ Pending |
| Project ID | ⚠️ NO .vercel/project.json FOUND | TBD | ⬜ Pending |
| Deployment URL | TBD | TBD | ⬜ Pending |
| Custom Domain | metroguards.com.au (assumed) | Same | ⬜ Pending |

**Environment Variables on Vercel:**
- [ ] `RESEND_API_KEY`
- [ ] `CONTACT_TO_EMAIL`
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] `Superbase_POSTGRES_PRISMA_URL`
- [ ] `JWT_SECRET`
- [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] `NODE_ENV`

---

### 4️⃣ EXTERNAL SERVICE CREDENTIALS

#### Resend (Email Service)
| Item | Current Value | New Value | Status |
|------|---------------|-----------|--------|
| API Key | `RESEND_API_KEY` in .env | TBD | ⬜ Pending |
| Sender Domain | Check Resend dashboard | TBD | ⬜ Pending |
| Recipient Email | admin@metroguards.com.au | Same | ⬜ Pending |

#### Google Analytics
| Item | Current Value | New Value | Status |
|------|---------------|-----------|--------|
| Measurement ID | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | TBD | ⬜ Pending |
| Property Name | TBD | TBD | ⬜ Pending |
| Account Owner | TBD | TBD | ⬜ Pending |

#### Tawk.to (Live Chat)
| Item | Current Value | New Value | Status |
|------|---------------|-----------|--------|
| Widget ID | Check TawkLoader.tsx | TBD | ⬜ Pending |
| Account Owner | TBD | TBD | ⬜ Pending |

---

### 5️⃣ APPLICATION SECRETS

| Secret | Env Variable | Purpose | Status |
|--------|--------------|---------|--------|
| JWT Signing Key | `JWT_SECRET` | User authentication | ⬜ Pending |
| NextAuth Secret | `NEXTAUTH_SECRET` | Session encryption (if used) | ⬜ Pending |

**⚠️ CRITICAL:** When transferring `JWT_SECRET`:
- If changed, ALL existing user sessions will be invalidated
- Users will need to log in again
- Consider coordinating this change during low-traffic hours

---

### 6️⃣ DOMAIN & DNS

| Item | Current Value | New Value | Status |
|------|---------------|-----------|--------|
| Domain | metroguards.com.au | Same | ⬜ Pending |
| Registrar | TBD | TBD | ⬜ Pending |
| DNS Provider | TBD (likely Vercel/Cloudflare) | TBD | ⬜ Pending |
| SSL Certificate | Auto (Vercel/Let's Encrypt) | Same | ⬜ Pending |
| MX Records | TBD | TBD | ⬜ Pending |

---

## ✅ PRE-MIGRATION CHECKLIST

### Developer Must Provide:

- [ ] **GitHub:** Full admin access or repository transfer initiation
- [ ] **Supabase:** Project transfer or database export
- [ ] **Vercel:** Project transfer or deployment credentials
- [ ] **Resend:** API key or account transfer
- [ ] **Google Analytics:** Property access or transfer
- [ ] **Domain:** Registrar login or DNS credentials
- [ ] **.env.local:** Copy of all environment variables

### Client Must Prepare:

- [ ] **Central Email:** Create organization email (e.g., admin@metroguards.com.au)
- [ ] **GitHub Account:** Create organization or personal account
- [ ] **Supabase Account:** Sign up at supabase.com
- [ ] **Vercel Account:** Sign up at vercel.com
- [ ] **Resend Account:** Sign up at resend.com (or transfer existing)
- [ ] **Payment Method:** Credit card for Supabase/Vercel paid tiers

---

## 🔐 SECRETS COLLECTION FORM

**To be filled by current developer:**

```
=== GITHUB ===
Repository URL: https://github.com/developer794/Metroguards.git
Account Email: ummehabiba989@gmail.com
2FA Enabled: [ ] Yes [ ] No

=== SUPABASE ===
Project Dashboard: https://supabase.com/dashboard/project/dqaghuhkouihcvqvcsco
Database Password: ________________________________
Anon Key: ________________________________
Service Role Key: ________________________________

=== VERCEL ===
Dashboard URL: ________________________________
Project Name: ________________________________
Team Name: ________________________________

=== ENVIRONMENT VARIABLES ===
RESEND_API_KEY: ________________________________
JWT_SECRET: ________________________________
NEXT_PUBLIC_GA_MEASUREMENT_ID: ________________________________
Superbase_POSTGRES_PRISMA_URL: ________________________________

=== EXTERNAL SERVICES ===
Tawk.to Widget ID: ________________________________
Google Analytics Property ID: ________________________________
```

---

## 📊 PREFLIGHT STATUS

| Category | Items | Collected | Remaining |
|----------|-------|-----------|-----------|
| GitHub | 6 | 0 | 6 |
| Supabase | 7 | 2 | 5 |
| Vercel | 5 | 0 | 5 |
| External Services | 4 | 0 | 4 |
| Application Secrets | 2 | 0 | 2 |
| Domain/DNS | 5 | 1 | 4 |
| **TOTAL** | **29** | **3** | **26** |

---

*Last Updated: 2025-12-29 by God-Level Handover Agent*

