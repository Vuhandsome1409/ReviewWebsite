/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string
  readonly BASE_URL: string
  readonly PROD: boolean
  readonly DEV: boolean
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_SUPABASE_LAB_BUCKET?: string
  readonly VITE_SUPABASE_LAB_TABLE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}