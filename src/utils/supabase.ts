import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://seckcevhfxxcnswvdaea.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlY2tjZXZoZnh4Y25zd3ZkYWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2OTQxODMsImV4cCI6MjAxODI3MDE4M30.hTjHQVrg49v14LYTdT3ryqi3Q0fPo84TG5sxkt6vlPI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})