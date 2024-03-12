CREATE POLICY "Only authenticated users can add transactions" ON "public"."transactions"
AS PERMISSIVE FOR INSERT
TO authenticated

WITH CHECK (true)