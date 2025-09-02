-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  alt_text VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  location VARCHAR(255),
  year INTEGER,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read projects (public display)
CREATE POLICY "Projects are viewable by everyone" 
ON public.projects 
FOR SELECT 
USING (true);

-- For now, allow all operations (later you can restrict to admin users)
CREATE POLICY "Allow all operations on projects" 
ON public.projects 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing projects data
INSERT INTO public.projects (title, image_url, alt_text, display_order) VALUES
('Project 1', '/lovable-uploads/fc711684-8a80-49b5-b184-19609995bd41.png', 'Project 1', 1),
('Project 2', '/lovable-uploads/0d9254c6-335e-4a52-9f81-65b316ddb5cd.png', 'Project 2', 2),
('Project 3', '/lovable-uploads/8f95b7ae-3490-4862-9558-c1a4be4eabde.png', 'Project 3', 3),
('Project 4', '/lovable-uploads/d19f88ed-78c0-40b1-8152-5db0ae9c9762.png', 'Project 4', 4),
('Project 5', '/lovable-uploads/07abfffe-f53a-4f3e-b336-2da01c426550.png', 'Project 5', 5),
('Project 6', '/lovable-uploads/2b60a42a-bd4b-4d02-87de-a5ef2c7899cf.png', 'Project 6', 6),
('Project 7', '/lovable-uploads/05bed40a-d094-42df-ad9e-225bb2992f7a.png', 'Project 7', 7),
('Project 8', '/lovable-uploads/6dd99701-5e85-4184-a91f-179f75af4dfa.png', 'Project 8', 8),
('Project 9', '/lovable-uploads/bdf44d7c-06d7-4735-948e-e6eae1be0a5c.png', 'Project 9', 9),
('Metselwerk terras project', '/lovable-uploads/3155a046-52b4-45e5-9861-1c1ae1031e0e.png', 'Metselwerk terras project', 10),
('Modern wooncomplex', '/lovable-uploads/bd356fc2-1168-4160-ae62-6b853398e271.png', 'Modern wooncomplex', 11),
('Nieuwbouw appartementencomplex', '/lovable-uploads/49877ecb-b4bc-42cf-96da-95933b391f51.png', 'Nieuwbouw appartementencomplex', 12),
('Bouwplaats met hijskraan', '/lovable-uploads/824c6627-9866-433a-8fd1-8039948624d2.png', 'Bouwplaats met hijskraan', 13),
('Schoorsteenrenovatie', '/lovable-uploads/84b88dcf-de71-466f-8e60-869e0e982d13.png', 'Schoorsteenrenovatie', 14),
('Metselwerk fundering', '/lovable-uploads/2155a827-f98a-48ee-820e-cea78274d2a7.png', 'Metselwerk fundering', 15),
('Precisie metselwerk', '/lovable-uploads/75844152-afb8-4b35-a20d-16d62c17228f.png', 'Precisie metselwerk', 16),
('Historische trap restauratie', '/lovable-uploads/5df69e77-1f02-40ea-bdca-60c1809f692f.png', 'Historische trap restauratie', 17),
('Moderne aanbouw', '/lovable-uploads/5ad4fda3-14a2-497d-a46d-6b7e8f0d7df7.png', 'Moderne aanbouw', 18),
('Zwembad installatie', '/lovable-uploads/12c70662-1f12-4cba-bbbe-61cb244498f1.png', 'Zwembad installatie', 19),
('Nieuwbouw constructie', '/lovable-uploads/95193751-381c-411e-a58c-fd77f0bd426a.png', 'Nieuwbouw constructie', 20),
('Gevelrenovatie met steiger', '/lovable-uploads/0fbf0757-e622-45ef-b1e4-f3632b027f3c.png', 'Gevelrenovatie met steiger', 21),
('Moderne gevel met ramen', '/lovable-uploads/7891a0e6-f6ae-456e-87f0-bdb9bb398830.png', 'Moderne gevel met ramen', 22),
('Vakman aan het werk', '/lovable-uploads/4f54975d-3102-45a9-a43c-c3401288e5d1.png', 'Vakman aan het werk', 23),
('Schoorsteenonderhoud', '/lovable-uploads/4aee0701-ae5b-4e4c-8609-2304d895f478.png', 'Schoorsteenonderhoud', 24),
('Modern wooncomplex aan het water', '/lovable-uploads/2ed6b6ec-c9bd-4f5a-87c6-2035e2686846.png', 'Modern wooncomplex aan het water', 25);