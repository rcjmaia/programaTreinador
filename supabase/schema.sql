-- Craque de Bola — cole tudo no Supabase em SQL Editor > New query > Run.

-- Perfis: um por conta. "card" guarda a carta e "progress" os recordes, XP e sequência.
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text not null,
  card jsonb,
  progress jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create unique index profiles_username_key on public.profiles (lower(username));

alter table public.profiles enable row level security;

create policy "users read own profile" on public.profiles
  for select to authenticated using (auth.uid() = id);

create policy "users update own profile" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Cria o perfil automaticamente quando alguém se cadastra.
create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, username)
  values (new.id, coalesce(trim(new.raw_user_meta_data ->> 'username'), split_part(new.email, '@', 1)));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Permite checar se um nome de usuário está livre antes do cadastro.
create function public.username_available(name text) returns boolean
language sql stable security definer set search_path = public as $$
  select not exists (select 1 from public.profiles where lower(username) = lower(trim(name)));
$$;

grant execute on function public.username_available(text) to anon, authenticated;
