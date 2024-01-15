import { NextResponse } from 'next/server'

export type TimeLogResponse = NextResponse & {
  body: {
    id: string
    employee: string
    log_type: string
    location: string
    date_time: string
  }
}
