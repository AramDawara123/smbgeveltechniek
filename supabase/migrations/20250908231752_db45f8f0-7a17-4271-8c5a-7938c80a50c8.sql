-- Harden profiles exposure and function permissions
-- 1) Restrict function execution to authenticated users only
REVOKE ALL ON FUNCTION public.verify_admin_access() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_current_user_role() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.verify_admin_access() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_current_user_role() TO authenticated;

-- 2) Replace SELECT policies on profiles with explicit, permissive policies
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'profiles' AND policyname = 'Restricted admin profile access'
  ) THEN
    EXECUTE 'DROP POLICY "Restricted admin profile access" ON public.profiles';
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'profiles' AND policyname = 'Users can view own profile'
  ) THEN
    EXECUTE 'DROP POLICY "Users can view own profile" ON public.profiles';
  END IF;
END $$;

-- Recreate as explicit PERMISSIVE policies, to avoid accidental restrictive AND behavior
CREATE POLICY "Users can select own profile"
ON public.profiles
AS PERMISSIVE
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can select all profiles"
ON public.profiles
AS PERMISSIVE
FOR SELECT
TO authenticated
USING (verify_admin_access());
