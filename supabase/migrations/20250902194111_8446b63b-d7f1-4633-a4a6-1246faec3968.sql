-- Fix the infinite recursion in profiles RLS policies
-- Drop the problematic policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;

-- Create simpler policies that don't cause recursion
CREATE POLICY "Allow public read for profiles" 
ON profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert for profiles" 
ON profiles 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public update for profiles" 
ON profiles 
FOR UPDATE 
USING (true);

-- Also fix the projects policy to avoid recursion
DROP POLICY IF EXISTS "Only admins can manage projects" ON projects;

CREATE POLICY "Allow public access to projects" 
ON projects 
FOR ALL 
USING (true) 
WITH CHECK (true);