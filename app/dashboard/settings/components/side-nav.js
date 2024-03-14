'use client'

import Link from 'next/link'
import { User, Camera, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function SideNav() {
  const pathname = usePathname()
  console.log(pathname)
  return <nav>
    <ul className="space-y-2">
      <li>
        <Link href="/dashboard/settings" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === '/dashboard/settings' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/settings/avatar" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === '/dashboard/settings/avatar' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
          <Camera className="w-4 h-4" />
          <span>Avatar</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/settings/profile" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === '/dashboard/settings/profile' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
          <User className="w-4 h-4" />
          <span>Profile</span>
        </Link>
      </li>
    </ul>
  </nav>
}