-- Drop the current update policy that allows unrestricted profile updates
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

-- Create a secure update policy that prevents role escalation
-- Users can update their profile but NOT role or is_admin fields
CREATE POLICY "Users can update own profile (non-admin fields only)"
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (
  auth.uid() = user_id 
  AND (
    -- Prevent role/admin changes by ensuring they remain the same
    (NEW.role = OLD.role OR (NEW.role IS NULL AND OLD.role IS NULL))
    AND (NEW.is_admin = OLD.is_admin OR (NEW.is_admin IS NULL AND OLD.is_admin IS NULL))
  )
);

-- Create a more restrictive admin policy that only allows reading, not role escalation
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Create a security definer function to safely check if current user is admin
-- This prevents users from manipulating their role to gain admin access
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if current user has admin role in the database
  -- This query runs with elevated privileges, preventing manipulation
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND (is_admin = true OR role = 'admin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;

-- Admins can view all profiles using the secure function
CREATE POLICY "Verified admins can view all profiles"
ON public.profiles 
FOR SELECT 
TO authenticated
USING (public.is_current_user_admin() OR auth.uid() = user_id);

-- Add a trigger to prevent direct role manipulation via SQL
CREATE OR REPLACE FUNCTION public.prevent_role_escalation()
RETURNS TRIGGER AS $$
BEGIN
  -- Only allow role changes if the user is already an admin
  IF (NEW.role != OLD.role OR NEW.is_admin != OLD.is_admin) THEN
    -- Check if the current user is an admin (bypass for system operations)
    IF NOT EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() 
      AND (is_admin = true OR role = 'admin')
    ) AND auth.uid() IS NOT NULL THEN
      RAISE EXCEPTION 'Only administrators can modify roles and admin status';
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger to enforce role escalation prevention
DROP TRIGGER IF EXISTS prevent_role_escalation_trigger ON public.profiles;
CREATE TRIGGER prevent_role_escalation_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_role_escalation();

-- Consider removing email from profiles table for better security
-- Add a comment noting this security consideration
COMMENT ON COLUMN public.profiles.email IS 'SECURITY NOTE: Consider moving email to a separate secure table with stricter access controls';