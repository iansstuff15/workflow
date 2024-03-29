import { UNDEFINED_ERROR, UNEXPECTED_ERROR } from '@/lib/config/error/auth'
import { EmployeeMutation } from '@/lib/mutations/supabase.mutation'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { TimeLogRequest } from '@/lib/data/request/time-log/time_log.request'
import { Request } from '@/lib/data/request/leaves/request'

export async function POST(request: Request, response: GenericResponse) {
  const cookieStore = cookies()

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  try {
    const body = await request.json()
    const { error } = await supabase.from('leave_request').insert(body)

    if (error) {
      if (
        error.message.includes('duplicate key value violates unique constraint')
      ) {
        return NextResponse.json(
          {
            message: 'Serial number already exists',
          },
          { status: 400 },
        )
      }
      return NextResponse.json(
        {
          message: error?.message ?? UNDEFINED_ERROR,
        },
        { status: 400 },
      )
    } else {
      return NextResponse.json({
        message: `Successfully added employee`,
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
