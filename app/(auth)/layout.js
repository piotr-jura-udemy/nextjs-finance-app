import { sizes, variants } from "@/lib/variants"
import {
  ChevronLeft
} from "lucide-react"
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <div className="absolute left-8 top-8">
          <Link href="/dashboard" className={`${variants['ghost']} ${sizes['base']} flex items-center space-x-1 text-sm`}>
            <ChevronLeft className="w-4 h-4" /><span>Back</span></Link>
        </div>
        <div className="mt-8">
          {children}
        </div>
      </main>
    </>
  )
}
