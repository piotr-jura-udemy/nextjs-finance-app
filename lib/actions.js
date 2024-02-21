'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from './supabase/server'

export async function createTransaction(formData) {
  // Validate data
  const { error } = await createClient().from('transactions')
    .insert(formData)

  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}