CREATE POLICY "Only owners can modify transactions" ON "public"."transactions"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid())