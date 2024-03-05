
import { NextResponse } from 'next/server'
import { createClient } from './server'

export async function updateSession(request) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
  const supabase = createClient()
  console.log(await supabase.auth.getUser())
  return response
}