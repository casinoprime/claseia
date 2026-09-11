import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
export async function GET(request:NextRequest){const {searchParams}=new URL(request.url);const token_hash=searchParams.get('token_hash');const type=searchParams.get('type') as EmailOtpType|null;const to=request.nextUrl.clone();if(token_hash&&type){const s=await createClient();const {error}=await s.auth.verifyOtp({type,token_hash});if(!error){to.pathname='/dashboard';to.search='';return NextResponse.redirect(to)}}to.pathname='/login';to.searchParams.set('error','No se pudo confirmar la cuenta');return NextResponse.redirect(to)}
