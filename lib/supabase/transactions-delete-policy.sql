CREATE POLICY "Only owners can delete transactions" ON "public"."transactions"
AS PERMISSIVE FOR DELETE
TO authenticated
USING (user_id = auth.uid())
