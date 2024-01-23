import { NextRequest } from 'next/server'

export type Request = NextRequest & {
  data: [
    {
      applied_by: string
      reviewed_by: string
      reason: string
      status?: string
      attachment?: string
      start_date: string
      end_date: string
      type: string
      is_half_day: boolean
    },
  ]
}
