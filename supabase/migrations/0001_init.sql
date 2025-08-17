-- Enable extensions if needed
create extension if not exists pgcrypto;

-- Core tables
create table if not exists students (
	id uuid primary key default gen_random_uuid(),
	user_id uuid references auth.users(id),
	name text not null,
	disability_type text check (disability_type in ('intellectual','learning','asd','motor','sensory')),
	birthdate date,
	created_at timestamptz default now()
);

create table if not exists guardians (
	id uuid primary key default gen_random_uuid(),
	user_id uuid references auth.users(id) not null,
	student_id uuid references students(id) on delete cascade not null,
	relation text default 'parent',
	created_at timestamptz default now()
);

create table if not exists iep_plans (
	id uuid primary key default gen_random_uuid(),
	student_id uuid references students(id) on delete cascade,
	title text not null,
	start_date date,
	end_date date,
	created_by uuid references auth.users(id),
	created_at timestamptz default now()
);

create table if not exists activities (
	id uuid primary key default gen_random_uuid(),
	kind text check (kind in ('unit','video','game','quiz')) not null,
	title text not null,
	payload jsonb,
	a11y jsonb,
	created_by uuid references auth.users(id),
	created_at timestamptz default now()
);

create table if not exists assignments (
	id uuid primary key default gen_random_uuid(),
	student_id uuid references students(id) on delete cascade,
	activity_id uuid references activities(id) on delete set null,
	due_at timestamptz,
	status text default 'assigned'
);

create table if not exists progress_logs (
	id uuid primary key default gen_random_uuid(),
	student_id uuid references students(id) on delete cascade,
	activity_id uuid references activities(id),
	score numeric,
	accuracy numeric,
	time_on_task integer,
	notes text,
	created_at timestamptz default now()
);

-- RLS
alter table students enable row level security;
alter table guardians enable row level security;
alter table iep_plans enable row level security;
alter table assignments enable row level security;
alter table progress_logs enable row level security;

-- Guardians can see their child's data
create policy if not exists "parents see own child" on progress_logs for select using (
	exists (
		select 1 from students s
		join guardians g on g.student_id = s.id
		where s.id = progress_logs.student_id and g.user_id = auth.uid()
	)
);

-- Guardians can select their student record
create policy if not exists "parents see student" on students for select using (
	exists (
		select 1 from guardians g where g.student_id = students.id and g.user_id = auth.uid()
	)
);