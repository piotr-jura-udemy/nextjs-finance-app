import Link from 'next/link'
import DarkModeToggle from './dark-mode-toggle'
import useServerDarkMode from '@/hooks/use-server-dark-mode'
import { CircleUser, KeyRound } from 'lucide-react'
import Button from './button'
import { createClient } from '@/lib/supabase/server'
import { sizes, variants } from '@/lib/variants'

export default async function PageHeader({ className }) {
  const theme = useServerDarkMode()
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser()


  console.log(error)

  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link href="/dashboard" className="text-xl hover:underline underline-offset-8 decoration-2">Finance App</Link>
      <div className="flex items-center">
        <DarkModeToggle defaultMode={theme} />
        {user && <Button variant="ghost" size="sm" className="flex items-center space-x-1">
          <CircleUser className="w-6 h-6" />
          <span>{user?.email}</span>
        </Button>}
        {!user && <Link href="/login" className={`${variants['ghost']} ${sizes['sm']}`}><KeyRound /></Link>}
      </div>
    </header>
  )
}