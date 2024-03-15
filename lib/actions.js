'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from './supabase/server'
import { transactionSchema } from './validation'
import { redirect } from 'next/navigation'

export async function createTransaction(formData) {
  const validated = transactionSchema.safeParse(formData)
  if (!validated.success) {
    throw new Error('Invalid data')
  }

  const { error } = await createClient().from('transactions')
    .insert(formData)

  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}

export async function updateTransaction(id, formData) {
  const validated = transactionSchema.safeParse(formData)
  if (!validated.success) {
    throw new Error('Invalid data')
  }

  const { error } = await createClient().from('transactions')
    .update(formData)
    .eq('id', id)

  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}

export async function fetchTransactions(range, offset = 0, limit = 10) {
  const supabase = createClient()
  let { data, error } = await supabase
    .rpc('fetch_transactions', {
      limit_arg: limit,
      offset_arg: offset,
      range_arg: range
    })
  if (error) throw new Error("We can't fetch transactions")
  return data
}

export async function deleteTransaction(id) {
  const supabase = createClient()
  const { error } = await supabase.from('transactions')
    .delete()
    .eq('id', id)
  if (error) throw new Error(`Could not delete the transaction ${id}`)
  revalidatePath('/dashboard')
}

export async function login(prevState, formData) {
  const supabase = createClient()
  const email = formData.get('email')
  const { error } = supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true
    }
  })
  if (error) {
    return {
      error: true,
      message: 'Error authenticating!'
    }
  }
  return {
    message: `Email sent to ${email}`
  }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  redirect('/login')
}

export async function uploadAvatar(formData) {
  const supabase = createClient()
  const file = formData.get('file')
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const {error} = await supabase.storage
    .from('avatars')
    .upload(fileName, file)
  if (error) {
    throw new Error('Error uploading avatar')
  }
}