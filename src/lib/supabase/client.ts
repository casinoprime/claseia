import { createBrowserClient } from '@supabase/ssr'
export function createClient() {
  return createBrowserClient(
    'https://mfyjobnwgkwehxaewbwx.supabase.co',
    'sb_publishable_BEC6VnYv51a9fodjwl25Ew_95LhipRj'
  )
}
