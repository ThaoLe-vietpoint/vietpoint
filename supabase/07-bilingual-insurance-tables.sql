-- Standalone: bilingual columns for the 6 insurance tables (tail of 03-migration.sql).
-- Run the WHOLE file in Supabase SQL Editor. Safe to re-run.

-- iul_reasons: add EN/VI text fields
alter table public.iul_reasons
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';
-- copy existing data (old 'title'/'description' treated as English)
update public.iul_reasons set
  title_en       = coalesce(nullif(title_en, ''),       title),
  description_en = coalesce(nullif(description_en, ''), description)
where title_en = '' or description_en = '';

-- iul_steps: add EN/VI text fields
alter table public.iul_steps
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';
-- copy existing data
update public.iul_steps set
  title_en       = coalesce(nullif(title_en, ''),       title),
  description_en = coalesce(nullif(description_en, ''), description)
where title_en = '' or description_en = '';

-- iul_faqs: add EN/VI text fields
alter table public.iul_faqs
  add column if not exists question_en text not null default '',
  add column if not exists question_vi text not null default '',
  add column if not exists answer_en   text not null default '',
  add column if not exists answer_vi   text not null default '';
-- copy existing data
update public.iul_faqs set
  question_en = coalesce(nullif(question_en, ''), question),
  answer_en   = coalesce(nullif(answer_en, ''),   answer)
where question_en = '' or answer_en = '';

-- kid_iul_benefits: add EN/VI text fields
alter table public.kid_iul_benefits
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';
-- copy existing data
update public.kid_iul_benefits set
  title_en       = coalesce(nullif(title_en, ''),       title),
  description_en = coalesce(nullif(description_en, ''), description)
where title_en = '' or description_en = '';

-- max_iul_reasons: add EN/VI text fields
alter table public.max_iul_reasons
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';
-- copy existing data
update public.max_iul_reasons set
  title_en       = coalesce(nullif(title_en, ''),       title),
  description_en = coalesce(nullif(description_en, ''), description)
where title_en = '' or description_en = '';

-- termlife_benefits: add EN/VI text fields
alter table public.termlife_benefits
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';
-- copy existing data
update public.termlife_benefits set
  title_en       = coalesce(nullif(title_en, ''),       title),
  description_en = coalesce(nullif(description_en, ''), description)
where title_en = '' or description_en = '';

notify pgrst, 'reload schema';
