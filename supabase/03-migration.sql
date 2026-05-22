-- ============================================================
-- VietPoint Insurance & Tax — Supabase Migration
-- FILE 3 of 4: BILINGUAL COLUMN MIGRATION
-- Run AFTER: 01-schema.sql, 02-rls-grants.sql
-- Safe to re-run: uses ADD COLUMN IF NOT EXISTS
-- ============================================================
-- Only needed if you ran 01-schema.sql on an EXISTING database
-- that was created before bilingual columns were added.
-- On a fresh database, 01-schema.sql already includes all columns.
-- ============================================================

-- claims_steps: add EN/VI text fields
alter table claims_steps
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';

-- customer_stories: add EN/VI text fields
alter table customer_stories
  add column if not exists location_en text not null default '',
  add column if not exists location_vi text not null default '',
  add column if not exists story_en    text not null default '',
  add column if not exists story_vi    text not null default '',
  add column if not exists tag_en      text not null default '',
  add column if not exists tag_vi      text not null default '';

-- manual_guides: add EN/VI text fields
alter table manual_guides
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '',
  add column if not exists tag_en         text not null default '',
  add column if not exists tag_vi         text not null default '';

-- priority_perks: add EN/VI text fields
alter table priority_perks
  add column if not exists label_en       text not null default '',
  add column if not exists label_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';
