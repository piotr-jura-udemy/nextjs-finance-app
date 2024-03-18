import { createClient } from "@/lib/supabase/server"
import SettingsForm from "./components/settings-form"

export default async function Page() {
  const supabase = createClient()
  const { data: { user: { user_metadata: defaults } } } = await supabase.auth.getUser()
  return (<>
    <h1 className="text-4xl font-semibold mb-8">
      Settings
    </h1>
    <SettingsForm defaults={defaults} />
  </>)
}