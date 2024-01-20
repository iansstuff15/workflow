import { UNDEFINED_ERROR, UNEXPECTED_ERROR } from '@/lib/config/error/auth'
import { CreateUserRequest } from '@/lib/data/request/user/create-user.request'
import { EmployeeMutation } from '@/lib/mutations/supabase.mutation'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { TimeLogRequest } from '@/lib/data/request/time-log/time_log.request'

export async function POST(
  request: CreateUserRequest,
  response: GenericResponse,
) {
  const cookieStore = cookies()

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  try {
    const { data } = await request.json()
    console.log(data)
    const { error } = await supabase.from('employee').insert(data)

    if (error) {
      return NextResponse.json(
        {
          message: error?.message ?? UNDEFINED_ERROR,
        },
        { status: 400 },
      )
    } else {
      return NextResponse.json({
        message: 'good',
      })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: UNEXPECTED_ERROR,
      },
      { status: 500 },
    )
  }
}
