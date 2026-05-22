-- ============================================================
-- VietPoint Insurance & Tax — Supabase Security
-- FILE 2 of 4: ROW LEVEL SECURITY + GRANTS + STORAGE
-- Run AFTER: 01-schema.sql
-- Safe to re-run: DROP POLICY IF EXISTS before each CREATE
-- ============================================================

-- ============================================================
-- ENABLE ROW LEVEL SECURITY ON ALL TABLES
-- ============================================================

alter table blog_posts        enable row level security;
alter table leads             enable row level security;
alter table testimonials      enable row level security;
alter table page_content      enable row level security;
alter table site_settings     enable row level security;
alter table media             enable row level security;
alter table customer_stories  enable row level security;
alter table manual_guides     enable row level security;
alter table claims_steps      enable row level security;
alter table priority_perks    enable row level security;
alter table iul_reasons       enable row level security;
alter table iul_steps         enable row level security;
alter table iul_faqs          enable row level security;
alter table kid_iul_benefits  enable row level security;
alter table max_iul_reasons   enable row level security;
alter table termlife_benefits enable row level security;

-- ============================================================
-- RLS POLICIES
-- ============================================================

-- blog_posts
drop policy if exists "Public read published posts"  on blog_posts;
drop policy if exists "Admin full access blog_posts" on blog_posts;
create policy "Public read published posts"
  on blog_posts for select using (published = true);
create policy "Admin full access blog_posts"
  on blog_posts for all using (auth.role() = 'authenticated');

-- leads
drop policy if exists "Public insert leads"     on leads;
drop policy if exists "Admin full access leads" on leads;
create policy "Public insert leads"
  on leads for insert with check (true);
create policy "Admin full access leads"
  on leads for all using (auth.role() = 'authenticated');

-- testimonials
drop policy if exists "Public read testimonials"       on testimonials;
drop policy if exists "Admin full access testimonials" on testimonials;
create policy "Public read testimonials"
  on testimonials for select using (active = true);
create policy "Admin full access testimonials"
  on testimonials for all using (auth.role() = 'authenticated');

-- page_content
drop policy if exists "Public read page content"       on page_content;
drop policy if exists "Admin full access page_content" on page_content;
create policy "Public read page content"
  on page_content for select using (true);
create policy "Admin full access page_content"
  on page_content for all using (auth.role() = 'authenticated');

-- site_settings
drop policy if exists "Public read site_settings"       on site_settings;
drop policy if exists "Admin full access site_settings" on site_settings;
create policy "Public read site_settings"
  on site_settings for select using (true);
create policy "Admin full access site_settings"
  on site_settings for all using (auth.role() = 'authenticated');

-- media
drop policy if exists "Public read media"       on media;
drop policy if exists "Admin full access media" on media;
create policy "Public read media"
  on media for select using (true);
create policy "Admin full access media"
  on media for all using (auth.role() = 'authenticated');

-- customer_stories
drop policy if exists "Public read customer stories"       on customer_stories;
drop policy if exists "Admin full access customer_stories" on customer_stories;
create policy "Public read customer stories"
  on customer_stories for select using (active = true);
create policy "Admin full access customer_stories"
  on customer_stories for all using (auth.role() = 'authenticated');

-- manual_guides
drop policy if exists "Public read manual guides"       on manual_guides;
drop policy if exists "Admin full access manual_guides" on manual_guides;
create policy "Public read manual guides"
  on manual_guides for select using (active = true);
create policy "Admin full access manual_guides"
  on manual_guides for all using (auth.role() = 'authenticated');

-- claims_steps
drop policy if exists "Public read claims steps"        on claims_steps;
drop policy if exists "Admin full access claims_steps"  on claims_steps;
create policy "Public read claims steps"
  on claims_steps for select using (active = true);
create policy "Admin full access claims_steps"
  on claims_steps for all using (auth.role() = 'authenticated');

-- priority_perks
drop policy if exists "Public read priority perks"       on priority_perks;
drop policy if exists "Admin full access priority_perks" on priority_perks;
create policy "Public read priority perks"
  on priority_perks for select using (active = true);
create policy "Admin full access priority_perks"
  on priority_perks for all using (auth.role() = 'authenticated');

-- iul_reasons
drop policy if exists "Public read iul_reasons" on iul_reasons;
drop policy if exists "Admin full iul_reasons"  on iul_reasons;
create policy "Public read iul_reasons"
  on iul_reasons for select using (active = true);
create policy "Admin full iul_reasons"
  on iul_reasons for all using (auth.role() = 'authenticated');

-- iul_steps
drop policy if exists "Public read iul_steps" on iul_steps;
drop policy if exists "Admin full iul_steps"  on iul_steps;
create policy "Public read iul_steps"
  on iul_steps for select using (active = true);
create policy "Admin full iul_steps"
  on iul_steps for all using (auth.role() = 'authenticated');

-- iul_faqs
drop policy if exists "Public read iul_faqs" on iul_faqs;
drop policy if exists "Admin full iul_faqs"  on iul_faqs;
create policy "Public read iul_faqs"
  on iul_faqs for select using (active = true);
create policy "Admin full iul_faqs"
  on iul_faqs for all using (auth.role() = 'authenticated');

-- kid_iul_benefits
drop policy if exists "Public read kid_iul_benefits" on kid_iul_benefits;
drop policy if exists "Admin full kid_iul_benefits"  on kid_iul_benefits;
create policy "Public read kid_iul_benefits"
  on kid_iul_benefits for select using (active = true);
create policy "Admin full kid_iul_benefits"
  on kid_iul_benefits for all using (auth.role() = 'authenticated');

-- max_iul_reasons
drop policy if exists "Public read max_iul_reasons" on max_iul_reasons;
drop policy if exists "Admin full max_iul_reasons"  on max_iul_reasons;
create policy "Public read max_iul_reasons"
  on max_iul_reasons for select using (active = true);
create policy "Admin full max_iul_reasons"
  on max_iul_reasons for all using (auth.role() = 'authenticated');

-- termlife_benefits
drop policy if exists "Public read termlife_benefits" on termlife_benefits;
drop policy if exists "Admin full termlife_benefits"  on termlife_benefits;
create policy "Public read termlife_benefits"
  on termlife_benefits for select using (active = true);
create policy "Admin full termlife_benefits"
  on termlife_benefits for all using (auth.role() = 'authenticated');

-- ============================================================
-- GRANTS
-- Required so the anon role can hit RLS checks
-- ============================================================

grant usage on schema public to anon, authenticated;

grant select on public.blog_posts        to anon;
grant select on public.testimonials      to anon;
grant select on public.page_content      to anon;
grant select on public.site_settings     to anon;
grant select on public.media             to anon;
grant select on public.customer_stories  to anon;
grant select on public.manual_guides     to anon;
grant select on public.claims_steps      to anon;
grant select on public.priority_perks    to anon;
grant select on public.iul_reasons       to anon;
grant select on public.iul_steps         to anon;
grant select on public.iul_faqs          to anon;
grant select on public.kid_iul_benefits  to anon;
grant select on public.max_iul_reasons   to anon;
grant select on public.termlife_benefits to anon;

-- leads: public can insert, admins manage all
grant insert on public.leads to anon;
grant all    on public.leads to authenticated;
grant all    on public.blog_posts        to authenticated;
grant all    on public.testimonials      to authenticated;
grant all    on public.page_content      to authenticated;
grant all    on public.site_settings     to authenticated;
grant all    on public.media             to authenticated;
grant all    on public.customer_stories  to authenticated;
grant all    on public.manual_guides     to authenticated;
grant all    on public.claims_steps      to authenticated;
grant all    on public.priority_perks    to authenticated;
grant all    on public.iul_reasons       to authenticated;
grant all    on public.iul_steps         to authenticated;
grant all    on public.iul_faqs          to authenticated;
grant all    on public.kid_iul_benefits  to authenticated;
grant all    on public.max_iul_reasons   to authenticated;
grant all    on public.termlife_benefits to authenticated;

-- ============================================================
-- STORAGE — images bucket + RLS policies
-- ============================================================

-- Create the public images bucket
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

drop policy if exists "Public read images"  on storage.objects;
drop policy if exists "Admin upload images" on storage.objects;
drop policy if exists "Admin update images" on storage.objects;
drop policy if exists "Admin delete images" on storage.objects;

create policy "Public read images"
  on storage.objects for select
  using (bucket_id = 'images');

create policy "Admin upload images"
  on storage.objects for insert
  with check (bucket_id = 'images' and auth.role() = 'authenticated');

create policy "Admin update images"
  on storage.objects for update
  using (bucket_id = 'images' and auth.role() = 'authenticated');

create policy "Admin delete images"
  on storage.objects for delete
  using (bucket_id = 'images' and auth.role() = 'authenticated');
