-- Make alt_text nullable in projects table
ALTER TABLE public.projects 
ALTER COLUMN alt_text DROP NOT NULL;