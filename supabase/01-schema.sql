-- ============================================================
-- VietPoint Insurance & Tax — Supabase Schema
-- FILE 1 of 4: TABLE DEFINITIONS
-- Run ORDER: 01-schema → 02-rls-grants → 03-migration → 04-seed
-- Safe to re-run: uses CREATE TABLE IF NOT EXISTS
-- ============================================================

-- ============================================================
-- SECTION 1 — CORE TABLES
-- ============================================================

-- 1. BLOG POSTS
create table if not exists blog_posts (
  id          uuid        primary key default gen_random_uuid(),
  slug        text        unique,
  title_en    text        not null default '',
  title_vi    text        not null default '',
  excerpt_en  text        not null default '',
  excerpt_vi  text        not null default '',
  content_en  text        not null default '',
  content_vi  text        not null default '',
  image       text        not null default '',
  category    text        not null default 'Insurance',
  published   boolean     not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Migration: add slug to existing blog_posts table (safe to re-run)
alter table blog_posts add column if not exists slug text unique;

-- 2. LEADS (contact / quote form submissions)
create table if not exists leads (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null default '',
  phone      text        not null default '',
  email      text        not null default '',
  message    text        not null default '',
  source     text        not null default 'contact_form',
  created_at timestamptz not null default now()
);

-- 3. TESTIMONIALS
create table if not exists testimonials (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null default '',
  avatar     text        not null default '',
  content_en text        not null default '',
  content_vi text        not null default '',
  rating     int         not null default 5 check (rating between 1 and 5),
  active     boolean     not null default true,
  created_at timestamptz not null default now()
);

-- 4. PAGE CONTENT (editable sections — bilingual)
--    pages  : 'home' | 'about' | 'global' | 'recruitment' | 'verify_consultant'
--    sections: 'hero' | 'products' | 'stats' | 'process' | 'testimonials'
--            | 'story' | 'mission' | 'core_values' | 'team' | 'what_we_do'
--            | 'why_us' | 'cta' | 'contact' | 'hours' | 'social'
--            | 'positions' | 'benefits' | 'tips'
create table if not exists page_content (
  id         uuid        primary key default gen_random_uuid(),
  page       text        not null,
  section    text        not null,
  field      text        not null,
  value_en   text        not null default '',
  value_vi   text        not null default '',
  updated_at timestamptz not null default now(),
  unique (page, section, field)
);

-- 5. SITE SETTINGS (editable contact info, office hours)
create table if not exists site_settings (
  key        text        primary key,
  label      text        not null default '',
  value      text        not null default '',
  updated_at timestamptz not null default now()
);

-- Seed default contact values (safe to re-run via ON CONFLICT DO NOTHING)
insert into site_settings (key, label, value) values
  ('phone',         'Số điện thoại',    '(678) 825 3737'),
  ('phone_e164',    'Phone (E.164)',     '+16788253737'),
  ('email',         'Email',            'support@VietPointinsurance.com'),
  ('address',       'Địa chỉ',          '1424 N Brown Rd #450, Lawrenceville, GA 30043'),
  ('hours_weekday', 'Giờ CN – Thứ 5',   '9 AM – 7 PM'),
  ('hours_closed',  'Giờ Thứ 6 & 7',    'Closed')
on conflict (key) do nothing;

-- 6. MEDIA (image library)
create table if not exists media (
  id          uuid        primary key default gen_random_uuid(),
  url         text        not null,
  alt_en      text        not null default '',
  alt_vi      text        not null default '',
  uploaded_at timestamptz not null default now()
);

-- ============================================================
-- SECTION 2 — CUSTOMER CARE TABLES
-- ============================================================

-- 7. CUSTOMER STORIES (customer-care/stories)
create table if not exists customer_stories (
  id          uuid        primary key default gen_random_uuid(),
  name        text        not null default '',
  location_en text        not null default '',
  location_vi text        not null default '',
  amount      text        not null default '',
  story_en    text        not null default '',
  story_vi    text        not null default '',
  tag_en      text        not null default '',
  tag_vi      text        not null default '',
  tag_color   text        not null default '#2F5E9E',
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 8. MANUAL GUIDES (customer-care/user-manual)
create table if not exists manual_guides (
  id             uuid        primary key default gen_random_uuid(),
  title_en       text        not null default '',
  title_vi       text        not null default '',
  date_label     text        not null default '',
  description_en text        not null default '',
  description_vi text        not null default '',
  tag_en         text        not null default '',
  tag_vi         text        not null default '',
  active         boolean     not null default true,
  created_at     timestamptz not null default now()
);

-- 9. CLAIMS STEPS (customer-care/claims)
create table if not exists claims_steps (
  id             uuid        primary key default gen_random_uuid(),
  num            text        not null default '',
  title_en       text        not null default '',
  title_vi       text        not null default '',
  description_en text        not null default '',
  description_vi text        not null default '',
  sort_order     int         not null default 0,
  active         boolean     not null default true,
  created_at     timestamptz not null default now()
);

-- 10. PRIORITY PERKS (customer-care/priority-program)
create table if not exists priority_perks (
  id             uuid        primary key default gen_random_uuid(),
  icon           text        not null default '⭐',
  label_en       text        not null default '',
  label_vi       text        not null default '',
  description_en text        not null default '',
  description_vi text        not null default '',
  sort_order     int         not null default 0,
  active         boolean     not null default true,
  created_at     timestamptz not null default now()
);

-- ============================================================
-- SECTION 3 — INSURANCE PAGE TABLES
-- ============================================================

-- 11. IUL — Why Choose IUL cards (icon, title, description)
create table if not exists iul_reasons (
  id          uuid        primary key default gen_random_uuid(),
  icon        text        not null default '✅',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 12. IUL — How It Works steps (step_label, title, description)
create table if not exists iul_steps (
  id          uuid        primary key default gen_random_uuid(),
  step_label  text        not null default 'STEP 1',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 13. IUL — FAQ accordion (question, answer)
create table if not exists iul_faqs (
  id          uuid        primary key default gen_random_uuid(),
  question    text        not null default '',
  answer      text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 14. KID IUL — Benefits list (icon, title, description)
create table if not exists kid_iul_benefits (
  id          uuid        primary key default gen_random_uuid(),
  icon        text        not null default '✅',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 15. MAX-FUNDED IUL — Reasons accordion (num, title, description)
create table if not exists max_iul_reasons (
  id          uuid        primary key default gen_random_uuid(),
  num         text        not null default '1',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 16. TERM LIFE — Benefits list (icon, title, description)
create table if not exists termlife_benefits (
  id          uuid        primary key default gen_random_uuid(),
  icon        text        not null default '✅',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);
