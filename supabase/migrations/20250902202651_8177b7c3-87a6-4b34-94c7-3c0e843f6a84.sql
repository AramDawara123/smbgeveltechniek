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
    (NEW.role IS NOT DISTINCT FROM OLD.role)
    AND (NEW.is_admin IS NOT DISTINCT FROM OLD.is_admin)
  )
);

-- Create a more restrictive admin policy that only allows reading, not role escalation
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Create a security definer function to safely check if current user is admin
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
  -- Only allow role changes if the user is already an admin or it's a system operation
  IF (NEW.role IS DISTINCT FROM OLD.role OR NEW.is_admin IS DISTINCT FROM OLD.is_admin) THEN
    -- Allow system operations (when auth.uid() is NULL) or admin users
    IF auth.uid() IS NOT NULL AND NOT EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() 
      AND (is_admin = true OR role = 'admin')
    ) THEN
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