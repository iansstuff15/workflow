import { NextRequest } from 'next/server'

export type TimeLogRequest = NextRequest & {
  data: {
    employee: string
    log_type: string
    location: string
    date_time: string
  }
}
