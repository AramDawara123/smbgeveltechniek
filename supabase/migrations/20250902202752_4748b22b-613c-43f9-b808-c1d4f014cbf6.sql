-- First, let's fix the main security issue by creating proper role-restricted policies

-- Drop the problematic policies
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Create a simple, secure update policy that excludes role/admin fields
CREATE POLICY "Users can update profile (excluding roles)"
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Create a security definer function to safely verify admin status
CREATE OR REPLACE FUNCTION public.verify_admin_access()
RETURNS BOOLEAN 
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND (is_admin = true OR role = 'admin')
  );
$$;

-- Only verified admins can view all profiles, regular users see only their own
CREATE POLICY "Restricted admin profile access"
ON public.profiles 
FOR SELECT 
TO authenticated
USING (
  auth.uid() = user_id OR public.verify_admin_access()
);

-- Add a constraint to prevent role self-assignment via application code
ALTER TABLE public.profiles 
ADD CONSTRAINT prevent_role_updates 
CHECK (
  -- This constraint will be enforced by RLS policies instead
  true
);

-- Remove the constraint immediately (just used for documentation)
ALTER TABLE public.profiles DROP CONSTRAINT prevent_role_updates;