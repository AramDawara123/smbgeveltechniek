-- Create a final security layer to prevent role/admin field updates by non-admins

-- Drop the current update policy and replace with one that explicitly prevents role changes
DROP POLICY IF EXISTS "Users can update profile (excluding roles)" ON public.profiles;

-- Create an update policy that blocks role/admin changes for non-admins
CREATE POLICY "Users update profile with role protection"
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (
  auth.uid() = user_id 
  AND (
    -- Allow updates only if user is admin OR role/admin fields haven't changed
    public.verify_admin_access() 
    OR (
      -- Get the current values from the database to compare
      (SELECT role FROM public.profiles WHERE user_id = auth.uid()) IS NOT DISTINCT FROM role
      AND (SELECT is_admin FROM public.profiles WHERE user_id = auth.uid()) IS NOT DISTINCT FROM is_admin
    )
  )
);

-- Create a security comment on sensitive columns
COMMENT ON COLUMN public.profiles.role IS 'SECURITY: Only admins can modify this field';
COMMENT ON COLUMN public.profiles.is_admin IS 'SECURITY: Only admins can modify this field';
COMMENT ON COLUMN public.profiles.email IS 'SECURITY: Contains PII - consider moving to separate secure table';