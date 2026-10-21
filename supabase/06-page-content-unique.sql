-- Run in Supabase SQL editor. Safe to re-run.
-- Admin "Content" pages save with upsert(onConflict: "page,section,field"),
-- which requires a unique constraint on page_content(page, section, field).

-- 1) Remove duplicate rows (keep the most recently updated one)
delete from public.page_content a
using public.page_content b
where a.page = b.page and a.section = b.section and a.field = b.field
  and (a.updated_at, a.id) < (b.updated_at, b.id);

-- 2) Add the constraint if missing
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conrelid = 'public.page_content'::regclass and contype = 'u'
  ) then
    alter table public.page_content
      add constraint page_content_page_section_field_key unique (page, section, field);
  end if;
end $$;
