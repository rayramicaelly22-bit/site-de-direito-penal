-- Tabela do progresso do Estudo Penal.
-- Cada pessoa logada só consegue ler e alterar o próprio progresso (RLS).

create table if not exists public.progresso (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progresso enable row level security;

-- Permissão para quem está logado (sem isso, o Data API responde "permission denied").
grant select, insert, update on public.progresso to authenticated;

create policy "ler o proprio progresso"
  on public.progresso for select
  using (auth.uid() = user_id);

create policy "criar o proprio progresso"
  on public.progresso for insert
  with check (auth.uid() = user_id);

create policy "atualizar o proprio progresso"
  on public.progresso for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Apaga a própria conta (e o progresso, por causa do cascade).
-- Só quem está logado consegue chamar, e só apaga a si mesmo.
create or replace function public.apagar_minha_conta()
returns void
language sql
security definer
set search_path = ''
as $$
  delete from auth.users where id = auth.uid();
$$;

revoke all on function public.apagar_minha_conta() from public;
grant execute on function public.apagar_minha_conta() to authenticated;
