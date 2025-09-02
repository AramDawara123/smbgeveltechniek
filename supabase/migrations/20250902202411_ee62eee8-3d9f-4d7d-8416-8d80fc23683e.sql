-- Drop the existing overly permissive policies
DROP POLICY IF EXISTS "Allow public insert for profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow public read for profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow public update for profiles" ON public.profiles;

-- Create secure RLS policies

-- Allow users to read their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Allow users to update their own profile  
CREATE POLICY "Users can update own profile"
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Allow profile creation during signup (for the handle_new_user trigger)
CREATE POLICY "Allow profile creation during signup"
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create a security definer function to check admin status safely
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Allow admins to view all profiles (optional - remove if not needed)
CREATE POLICY "Admins can view all profiles"
ON public.profiles 
FOR SELECT 
TO authenticated
USING (public.get_current_user_role() = 'admin' OR auth.uid() = user_id);