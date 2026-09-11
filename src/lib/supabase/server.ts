import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient('https://mfyjobnwgkwehxaewbwx.supabase.co','sb_publishable_BEC6VnYv51a9fodjwl25Ew_95LhipRj',{cookies:{getAll(){return cookieStore.getAll()},setAll(cookiesToSet){try{cookiesToSet.forEach(({name,value,options})=>cookieStore.set(name,value,options))}catch{}}}})
}
