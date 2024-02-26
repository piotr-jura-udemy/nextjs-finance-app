'use client'
import Button from "@/components/button"
import { fetchTransactions } from "@/lib/actions"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function LoadMoreTransactionsButton() {
  const searchParams = useSearchParams()
  const limit = searchParams.get('limit') ?? 20
  // const pathname = usePathname()
  // const router = useRouter()
  

  return 
}