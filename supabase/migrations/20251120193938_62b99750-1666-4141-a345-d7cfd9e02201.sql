-- Make title nullable in projects table
ALTER TABLE public.projects 
ALTER COLUMN title DROP NOT NULL;