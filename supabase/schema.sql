-- Tabela do progresso do Estudo Penal.
-- Cada pessoa logada só consegue ler e alterar o próprio progresso (RLS).

create table if not exists public.progresso (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progresso enable row level security;

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
