create table if not exists public.lab_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  position text not null default 'AI Engineer',
  portfolio text,
  experience text not null,
  reason text not null,
  resume_file_name text not null,
  resume_file_path text not null,
  resume_bucket text not null,
  created_at timestamptz not null default now()
);

alter table public.lab_applications
add column if not exists position text not null default 'AI Engineer';

alter table public.lab_applications enable row level security;

create policy "Allow anon insert lab applications"
on public.lab_applications
for insert
to anon
with check (true);

create policy "Allow anon read lab applications"
on public.lab_applications
for select
to anon
using (true);
