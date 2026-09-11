import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
export async function updateSession(request: NextRequest) {
  let response=NextResponse.next({request})
  const supabase=createServerClient('https://mfyjobnwgkwehxaewbwx.supabase.co','sb_publishable_BEC6VnYv51a9fodjwl25Ew_95LhipRj',{cookies:{getAll(){return request.cookies.getAll()},setAll(cookiesToSet){cookiesToSet.forEach(({name,value})=>request.cookies.set(name,value));response=NextResponse.next({request});cookiesToSet.forEach(({name,value,options})=>response.cookies.set(name,value,options))}}})
  await supabase.auth.getClaims(); return response
}
