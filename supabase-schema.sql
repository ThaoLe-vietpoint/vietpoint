-- ============================================================
-- VietPoint Insurance & Tax — Supabase SQL Schema
-- Paste toàn bộ file này vào Supabase Dashboard > SQL Editor > Run
-- Safe to re-run: IF NOT EXISTS, ON CONFLICT DO NOTHING
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

-- Migration: add slug to existing blog_posts table (safe to run on existing DB)
alter table blog_posts add column if not exists slug text unique;

-- 2. LEADS (contact / quote form submissions)
create table if not exists leads (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null default '',
  phone      text        not null default '',
  email      text        not null default '',
  message    text        not null default '',
  source     text        not null default 'contact_form',
  processed  boolean     not null default false,
  created_at timestamptz not null default now()
);

-- Migration: add processed column to existing leads table
alter table leads add column if not exists processed boolean not null default false;

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

-- Seed default values (safe to re-run via ON CONFLICT DO NOTHING)
insert into site_settings (key, label, value) values
  ('phone',              'Số điện thoại',             '(678) 825 3737'),
  ('phone_e164',         'Phone (E.164)',              '+16788253737'),
  ('email',              'Email',                     'support@VietPointinsurance.com'),
  ('address',            'Địa chỉ',                   '1424 N Brown Rd #450, Lawrenceville, GA 30043'),
  ('hours_weekday',      'Giờ CN – Thứ 5',            '9 AM – 7 PM'),
  ('hours_closed',       'Giờ Thứ 6 & 7',             'Closed'),
  ('notify_email',       'Email nhận thông báo',       ''),
  ('gmail_user',         'Gmail gửi thông báo',        ''),
  ('gmail_app_password', 'Gmail App Password',         '')
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
-- SECTION 2 — CUSTOMER CARE
-- ============================================================

-- 6. CUSTOMER STORIES (customer-care/stories)
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

-- 7. MANUAL GUIDES (customer-care/user-manual)
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

-- 8. CLAIMS STEPS (customer-care/claims)
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

-- 9. PRIORITY PERKS (customer-care/priority-program)
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
-- SECTION 3 — INSURANCE PAGES
-- ============================================================

-- 10. IUL — Why Choose IUL cards (icon, title, description)
create table if not exists iul_reasons (
  id          uuid        primary key default gen_random_uuid(),
  icon        text        not null default '✅',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 11. IUL — How It Works steps (step_label, title, description)
create table if not exists iul_steps (
  id          uuid        primary key default gen_random_uuid(),
  step_label  text        not null default 'STEP 1',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 12. IUL — FAQ accordion (question, answer)
create table if not exists iul_faqs (
  id          uuid        primary key default gen_random_uuid(),
  question    text        not null default '',
  answer      text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 13. KID IUL — Benefits list (icon, title, description)
create table if not exists kid_iul_benefits (
  id          uuid        primary key default gen_random_uuid(),
  icon        text        not null default '✅',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 14. MAX-FUNDED IUL — Reasons accordion (num, title, description)
create table if not exists max_iul_reasons (
  id          uuid        primary key default gen_random_uuid(),
  num         text        not null default '1',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- 15. TERM LIFE — Benefits list (icon, title, description)
create table if not exists termlife_benefits (
  id          uuid        primary key default gen_random_uuid(),
  icon        text        not null default '✅',
  title       text        not null default '',
  description text        not null default '',
  sort_order  int         not null default 0,
  active      boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- ============================================================
-- ROW LEVEL SECURITY — enable on all tables
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
-- DROP IF EXISTS first so this script is safe to re-run
-- ============================================================

-- blog_posts
drop policy if exists "Public read published posts"  on blog_posts;
drop policy if exists "Admin full access blog_posts" on blog_posts;
create policy "Public read published posts"
  on blog_posts for select using (published = true);
create policy "Admin full access blog_posts"
  on blog_posts for all using (auth.role() = 'authenticated');

-- leads
drop policy if exists "Public insert leads"    on leads;
drop policy if exists "Admin full access leads" on leads;
create policy "Public insert leads"
  on leads for insert with check (true);
create policy "Admin full access leads"
  on leads for all using (auth.role() = 'authenticated');

-- testimonials
drop policy if exists "Public read testimonials"      on testimonials;
drop policy if exists "Admin full access testimonials" on testimonials;
create policy "Public read testimonials"
  on testimonials for select using (active = true);
create policy "Admin full access testimonials"
  on testimonials for all using (auth.role() = 'authenticated');

-- page_content
drop policy if exists "Public read page content"      on page_content;
drop policy if exists "Admin full access page_content" on page_content;
create policy "Public read page content"
  on page_content for select using (true);
create policy "Admin full access page_content"
  on page_content for all using (auth.role() = 'authenticated');

-- site_settings
drop policy if exists "Public read site_settings"      on site_settings;
drop policy if exists "Admin full access site_settings" on site_settings;
create policy "Public read site_settings"
  on site_settings for select using (true);
create policy "Admin full access site_settings"
  on site_settings for all using (auth.role() = 'authenticated');

-- media
drop policy if exists "Public read media"    on media;
drop policy if exists "Admin full access media" on media;
create policy "Public read media"
  on media for select using (true);
create policy "Admin full access media"
  on media for all using (auth.role() = 'authenticated');

-- customer_stories
drop policy if exists "Public read customer stories"      on customer_stories;
drop policy if exists "Admin full access customer_stories" on customer_stories;
create policy "Public read customer stories"
  on customer_stories for select using (active = true);
create policy "Admin full access customer_stories"
  on customer_stories for all using (auth.role() = 'authenticated');

-- manual_guides
drop policy if exists "Public read manual guides"      on manual_guides;
drop policy if exists "Admin full access manual_guides" on manual_guides;
create policy "Public read manual guides"
  on manual_guides for select using (active = true);
create policy "Admin full access manual_guides"
  on manual_guides for all using (auth.role() = 'authenticated');

-- claims_steps
drop policy if exists "Public read claims steps"       on claims_steps;
drop policy if exists "Admin full access claims_steps" on claims_steps;
create policy "Public read claims steps"
  on claims_steps for select using (active = true);
create policy "Admin full access claims_steps"
  on claims_steps for all using (auth.role() = 'authenticated');

-- priority_perks
drop policy if exists "Public read priority perks"      on priority_perks;
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
-- GRANTS — required alongside RLS policies so the anon role
-- can actually hit the RLS check (without GRANT, Postgres
-- returns 401 permission denied before RLS is evaluated)
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

-- leads: public can insert (contact / quote form), admins manage all
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
-- SECTION 5 — MIGRATION: ADD BILINGUAL COLUMNS (existing DB)
-- Safe to re-run: uses ADD COLUMN IF NOT EXISTS
-- Skipped automatically on a fresh DB (columns already exist)
-- ============================================================

alter table claims_steps
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';

alter table customer_stories
  add column if not exists location_en text not null default '',
  add column if not exists location_vi text not null default '',
  add column if not exists story_en    text not null default '',
  add column if not exists story_vi    text not null default '',
  add column if not exists tag_en      text not null default '',
  add column if not exists tag_vi      text not null default '';

alter table manual_guides
  add column if not exists title_en       text not null default '',
  add column if not exists title_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '',
  add column if not exists tag_en         text not null default '',
  add column if not exists tag_vi         text not null default '';

alter table priority_perks
  add column if not exists label_en       text not null default '',
  add column if not exists label_vi       text not null default '',
  add column if not exists description_en text not null default '',
  add column if not exists description_vi text not null default '';

-- ============================================================
-- SECTION 6 — SAMPLE DATA: CUSTOMER CARE
-- Safe to re-run: uses ON CONFLICT DO NOTHING
-- ============================================================

-- claims_steps (5 bước, song ngữ EN/VI)
insert into claims_steps (num, title_en, title_vi, description_en, description_vi, sort_order, active) values
  ('01',
   'Contact Us & Report Your Claim',
   'Liên Hệ & Báo Cáo Khiếu Nại',
   'Call or email our team as soon as possible after the incident. We will open your case and guide you on next steps.',
   'Gọi điện hoặc gửi email cho đội ngũ của chúng tôi ngay sau khi sự cố xảy ra. Chúng tôi sẽ mở hồ sơ và hướng dẫn bạn các bước tiếp theo.',
   1, true),
  ('02',
   'Gather Required Documents',
   'Thu Thập Giấy Tờ Cần Thiết',
   'Prepare your policy number, government-issued ID, incident report, medical records (if applicable), and any supporting evidence.',
   'Chuẩn bị số hợp đồng bảo hiểm, CMND/CCCD, biên bản sự cố, hồ sơ y tế (nếu có) và các tài liệu liên quan.',
   2, true),
  ('03',
   'Submit the Claim Form',
   'Nộp Đơn Yêu Cầu Bồi Thường',
   'Complete and sign the official claim form provided by the insurance company. Our agents can help you fill it out accurately.',
   'Điền và ký vào mẫu yêu cầu bồi thường chính thức của công ty bảo hiểm. Chuyên viên của chúng tôi có thể hỗ trợ bạn điền chính xác.',
   3, true),
  ('04',
   'Our Team Reviews Your Case',
   'Đội Ngũ Xem Xét Hồ Sơ',
   'A dedicated VietPoint specialist follows up with the insurer on your behalf, ensuring your claim is processed promptly and fairly.',
   'Chuyên viên VietPoint theo dõi với công ty bảo hiểm thay mặt bạn, đảm bảo hồ sơ được xử lý nhanh chóng và công bằng.',
   4, true),
  ('05',
   'Receive Your Settlement',
   'Nhận Tiền Bồi Thường',
   'Once approved, the insurance company disburses the settlement directly to you or your designated beneficiary. We stay with you until the end.',
   'Sau khi được phê duyệt, công ty bảo hiểm sẽ giải ngân trực tiếp cho bạn hoặc người thụ hưởng được chỉ định. Chúng tôi đồng hành cùng bạn đến cùng.',
   5, true)
on conflict do nothing;

-- customer_stories (3 câu chuyện, song ngữ EN/VI)
insert into customer_stories (name, location_en, location_vi, amount, story_en, story_vi, tag_en, tag_vi, tag_color, active) values
  ('Minh Nguyen',
   'Houston, TX',
   'Houston, Texas',
   '$180,000',
   'After my father passed away unexpectedly, I was worried about how our family would manage. Thanks to the IUL policy VietPoint set up for him, we received $180,000 within 30 days. The team held our hand through every step of the claim process.',
   'Sau khi ba tôi qua đời đột ngột, tôi lo không biết gia đình sẽ xoay xở thế nào. Nhờ hợp đồng IUL mà VietPoint đã tư vấn cho ba, chúng tôi nhận được $180,000 trong vòng 30 ngày. Đội ngũ hỗ trợ chúng tôi từng bước trong quá trình khiếu nại.',
   'IUL Death Benefit', 'Quyền Lợi IUL', '#2F5E9E', true),
  ('Lan Tran',
   'Atlanta, GA',
   'Atlanta, Georgia',
   '$250,000',
   'When my husband was diagnosed with a critical illness, I did not know where to turn. VietPoint helped us file a living benefit claim quickly. We received $250,000 that covered treatment and kept our family afloat during the hardest year of our lives.',
   'Khi chồng tôi được chẩn đoán bệnh hiểm nghèo, tôi không biết phải làm gì. VietPoint đã giúp chúng tôi nộp hồ sơ quyền lợi sống nhanh chóng. Chúng tôi nhận $250,000 để trang trải điều trị và duy trì cuộc sống qua năm khó khăn nhất.',
   'Living Benefits', 'Quyền Lợi Sống', '#0d7377', true),
  ('The Pham Family',
   'Orlando, FL',
   'Orlando, Florida',
   '$45,000',
   'We started a Kid IUL for our daughter when she was 3. By the time she turned 18, the policy had accumulated $45,000 in cash value — fully funding her first year of college tuition. Best decision we ever made.',
   'Chúng tôi mở hợp đồng Kid IUL cho con gái khi bé mới 3 tuổi. Đến năm 18 tuổi, hợp đồng đã tích lũy $45,000 giá trị tiền mặt — đủ chi trả toàn bộ năm học đại học đầu tiên. Quyết định đúng đắn nhất chúng tôi từng đưa ra.',
   'Kid IUL Savings', 'Tiết Kiệm Kid IUL', '#e67e22', true)
on conflict do nothing;

-- manual_guides (4 bài hướng dẫn, song ngữ EN/VI)
insert into manual_guides (title_en, title_vi, date_label, description_en, description_vi, tag_en, tag_vi, active) values
  ('How to Make a Policy Change',
   'Cách Thay Đổi Hợp Đồng Bảo Hiểm',
   'May 2025',
   'Learn how to update your coverage amount, add riders, change your payment method, or update beneficiary information on your existing policy.',
   'Tìm hiểu cách cập nhật số tiền bảo hiểm, thêm điều khoản phụ, thay đổi phương thức thanh toán hoặc cập nhật thông tin người thụ hưởng trên hợp đồng hiện tại.',
   'Policy Management', 'Quản Lý Hợp Đồng', true),
  ('Understanding Your Annual IUL Statement',
   'Hiểu Bản Sao Kê IUL Hàng Năm',
   'Jan 2025',
   'A complete guide to reading your IUL annual statement, including cash value growth, cost of insurance, index credits, and projected future values.',
   'Hướng dẫn đầy đủ để đọc bản sao kê IUL hàng năm, bao gồm tăng trưởng giá trị tiền mặt, chi phí bảo hiểm, tín dụng chỉ số và giá trị dự kiến trong tương lai.',
   'IUL', 'IUL', true),
  ('How to Add or Update a Beneficiary',
   'Cách Thêm Hoặc Cập Nhật Người Thụ Hưởng',
   'Mar 2025',
   'Step-by-step instructions for naming or changing your primary and contingent beneficiaries to ensure your policy proceeds go to the right people.',
   'Hướng dẫn từng bước để đặt tên hoặc thay đổi người thụ hưởng chính và dự phòng, đảm bảo quyền lợi hợp đồng đến đúng người.',
   'Beneficiary', 'Người Thụ Hưởng', true),
  ('Step-by-Step Guide to Filing a Claim',
   'Hướng Dẫn Từng Bước Nộp Hồ Sơ Bồi Thường',
   'Apr 2025',
   'Everything you need to know about filing a death benefit, living benefit, or disability claim — documents required, timeline, and what to expect at each stage.',
   'Tất cả những gì bạn cần biết về nộp hồ sơ quyền lợi tử vong, quyền lợi sống hoặc bồi thường khuyết tật — giấy tờ cần thiết, thời gian xử lý và những gì cần kỳ vọng ở từng giai đoạn.',
   'Claims', 'Bồi Thường', true)
on conflict do nothing;

-- priority_perks (6 quyền lợi, song ngữ EN/VI)
insert into priority_perks (icon, label_en, label_vi, description_en, description_vi, sort_order, active) values
  ('👤',
   'Dedicated VIP Advisor',
   'Chuyên Viên VIP Riêng',
   'A named personal advisor is assigned exclusively to you — always available for calls, emails, and in-person meetings.',
   'Một chuyên viên cá nhân được chỉ định riêng cho bạn — luôn sẵn sàng qua điện thoại, email và gặp trực tiếp.',
   1, true),
  ('⚡',
   'Priority Claims Processing',
   'Xử Lý Bồi Thường Ưu Tiên',
   'Priority members skip the queue. Your claims are reviewed first, reducing processing time by up to 50% compared to standard cases.',
   'Thành viên ưu tiên được xử lý trước. Hồ sơ của bạn được xem xét đầu tiên, giảm thời gian xử lý lên đến 50% so với hồ sơ thông thường.',
   2, true),
  ('📅',
   'Annual Policy Review',
   'Đánh Giá Hợp Đồng Hàng Năm',
   'Every year, your advisor proactively reviews your policy to ensure your coverage keeps pace with life changes — marriage, new child, home purchase.',
   'Mỗi năm, chuyên viên sẽ chủ động xem xét hợp đồng để đảm bảo bảo hiểm theo kịp những thay đổi cuộc sống — kết hôn, con mới, mua nhà.',
   3, true),
  ('🎁',
   'Exclusive Member Discounts',
   'Giảm Giá Thành Viên Độc Quyền',
   'Access exclusive rate reductions and waived fees on additional policies, riders, and partner services not available to standard policyholders.',
   'Tiếp cận mức giảm giá độc quyền và miễn phí cho các hợp đồng bổ sung, điều khoản phụ và dịch vụ đối tác không dành cho khách hàng thông thường.',
   4, true),
  ('📞',
   '24/7 Emergency Support Line',
   'Đường Dây Hỗ Trợ Khẩn Cấp 24/7',
   'Emergencies don''t keep office hours. Priority members have direct access to our on-call team around the clock, 365 days a year.',
   'Khẩn cấp không theo giờ hành chính. Thành viên ưu tiên có thể liên hệ trực tiếp với đội ngũ trực ban suốt ngày đêm, 365 ngày một năm.',
   5, true),
  ('👨‍👩‍👧‍👦',
   'Multi-Policy Family Bundle',
   'Gói Gia Đình Nhiều Hợp Đồng',
   'Insure your entire family under a coordinated bundle and receive consolidated billing, shared annual reviews, and family-rate pricing.',
   'Bảo hiểm toàn bộ gia đình trong một gói phối hợp và nhận hóa đơn tổng hợp, đánh giá hàng năm chung và mức giá ưu đãi gia đình.',
   6, true)
on conflict do nothing;

-- ============================================================
-- STORAGE — images bucket + RLS policies
-- Run in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Create the bucket (public, no size limit enforced here)
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

-- 2. Storage object policies
drop policy if exists "Public read images"   on storage.objects;
drop policy if exists "Admin upload images"  on storage.objects;
drop policy if exists "Admin update images"  on storage.objects;
drop policy if exists "Admin delete images"  on storage.objects;

-- Anyone can view (public CDN URLs)
create policy "Public read images"
  on storage.objects for select
  using (bucket_id = 'images');

-- Only authenticated users (admins) can upload
create policy "Admin upload images"
  on storage.objects for insert
  with check (bucket_id = 'images' and auth.role() = 'authenticated');

-- Only authenticated users can replace/update
create policy "Admin update images"
  on storage.objects for update
  using (bucket_id = 'images' and auth.role() = 'authenticated');

-- Only authenticated users can delete
create policy "Admin delete images"
  on storage.objects for delete
  using (bucket_id = 'images' and auth.role() = 'authenticated');

