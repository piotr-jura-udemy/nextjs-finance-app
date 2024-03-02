import { createClient } from "@/lib/supabase/server"

export default async function Page({ params: { id } }) {
  const supabase = createClient()
  const { data: transaction, error } = await supabase.
    from('transactions')
    .select('*')
    .eq('id', id)
    .single()

  console.log(transaction)
  return (<>Hello!</>)
}