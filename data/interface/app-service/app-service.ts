import { SupabaseClient } from '@supabase/supabase-js'

export interface readAllProps {}
export interface insertProps {
  database: SupabaseClient<any, 'public', any>
  data: Array<Object>
}
export interface updateProps {
  data: Object
  searchKey: string
  searchValue: string
}
export interface deleteProps {
  searchKey: string
  searchValue: string
}
