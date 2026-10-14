-- ============================================================
-- Craque de Bola — histórico de resultados das missões.
-- Rode uma vez no Supabase: SQL Editor > New query > Run.
-- ============================================================

create table if not exists public.mission_results (
  id          bigint generated always as identity primary key,
  user_id     uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  mission_id  text not null,
  value       int not null check (value >= 0),
  medal       smallint not null default -1,
  xp          int not null default 0,
  is_record   boolean not null default false,
  created_at  timestamptz not null default now()
);

create index if not exists mission_results_user_date
  on public.mission_results (user_id, created_at desc);

alter table public.mission_results enable row level security;

drop policy if exists "results: select own" on public.mission_results;
create policy "results: select own" on public.mission_results
  for select using (auth.uid() = user_id);

drop policy if exists "results: insert own" on public.mission_results;
create policy "results: insert own" on public.mission_results
  for insert with check (auth.uid() = user_id);

drop policy if exists "results: delete own" on public.mission_results;
create policy "results: delete own" on public.mission_results
  for delete using (auth.uid() = user_id);
