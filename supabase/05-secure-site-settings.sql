-- Run in Supabase SQL editor.
-- Stop exposing secrets (e.g. gmail_app_password) through the public anon key.
-- Public can only read non-sensitive keys; authenticated admins keep full access.
drop policy if exists "Public read site_settings" on site_settings;
create policy "Public read site_settings"
  on site_settings for select
  using (key not in ('gmail_user', 'gmail_app_password', 'notify_email'));
-- NOTE: /api/contact now reads these keys server-side with SUPABASE_SERVICE_ROLE_KEY.
-- Also: rotate the Gmail App Password, since it was publicly readable before.
