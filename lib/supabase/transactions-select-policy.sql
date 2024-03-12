CREATE POLICY "Only the owners of transactions can read them" ON "public"."transactions"
AS PERMISSIVE FOR SELECT
TO authenticated
USING (user_id = auth.uid())
