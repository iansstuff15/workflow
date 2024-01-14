import { RealtimePostgresChangesPayload } from '@supabase/supabase-js'
import { Dispatch, SetStateAction } from 'react'

export type ListenQueryParam = {
  setData: Dispatch<SetStateAction<any[]>>
  setPayload: Dispatch<
    SetStateAction<
      | RealtimePostgresChangesPayload<{
          [key: string]: any
        }>
      | undefined
    >
  >
  database: string
  range: {
    start: number
    limit: number
  }
}

export type ListenQueryWithEqualFilterParam = ListenQueryParam & {
  filter: {
    column: string
    value: string
  }
}
