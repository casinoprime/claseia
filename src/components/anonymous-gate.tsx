'use client'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
export default function AnonymousGate(){const router=useRouter();const [error,setError]=useState('');useEffect(()=>{let cancelled=false;async function start(){const s=createClient();const {data}=await s.auth.getSession();if(data.session){router.refresh();return}const {error}=await s.auth.signInAnonymously();if(cancelled)return;if(error){setError(error.message);return}router.refresh()}start();return()=>{cancelled=true}},[router]);return <main className="login"><section className="card"><div className="brand">Clase<span>IA</span></div><h2>Entrando…</h2><p className="muted">Preparando tu espacio de estudio.</p>{error&&<p className="error">{error}</p>}</section></main>}
