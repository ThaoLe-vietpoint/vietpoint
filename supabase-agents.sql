-- ============================================================
-- AGENTS TABLE — F0/F1 Network Management
-- Run in Supabase Dashboard > SQL Editor
-- ============================================================

create table if not exists agents (
  id          uuid        primary key default gen_random_uuid(),
  name        text        not null default '',
  email       text        not null default '',
  phone       text        not null default '',
  license_id  text        not null default '',
  address     text        not null default '',
  note        text        not null default '',
  active      boolean     not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table agents enable row level security;

drop policy if exists "Authenticated can manage agents" on agents;
create policy "Authenticated can manage agents" on agents
  for all to authenticated using (true) with check (true);
