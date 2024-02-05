'use server'

import { revalidateTag } from 'next/cache'

export async function clearTransactionListCache(user) {
  revalidateTag(`transaction-list-${user}`)
}