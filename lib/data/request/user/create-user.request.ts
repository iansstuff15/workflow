import { NextRequest } from 'next/server'

export type CreateUserRequest = NextRequest & {
  data: [
    {
      email: string
      firstName: string
      lastName: string
      phone: string
      position: string
      sick_leave?: string
      vacation_leave?: string
      maternal_leave?: boolean
      paternal_leave?: boolean
    },
  ]
}
