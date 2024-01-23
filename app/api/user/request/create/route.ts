import { UNDEFINED_ERROR, UNEXPECTED_ERROR } from '@/lib/config/error/auth'
import { EmployeeMutation } from '@/lib/mutations/supabase.mutation'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { TimeLogRequest } from '@/lib/data/request/time-log/time_log.request'

export async function POST(request: NextRequest, response: GenericResponse) {
  const cookieStore = cookies()

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  try {
    const body = await request.json()
    const database = body.requestType + '_request'
    delete body.requestType
    if (body.start_hours) {
      body.start_time = `${body.start_hours}:${body.start_minutes}`
      delete body.start_hours
      delete body.start_minutes
    }
    if (body.end_hours) {
      body.end_time = `${body.end_hours}:${body.end_minutes}`
      delete body.end_hours
      delete body.end_minutes
    }
    if (body.current_start_hours) {
      body.current_start_time = `${body.current_start_hours}:${body.current_start_minutes}`
      delete body['current_start_hours']
      delete body['current_start_minutes']
    }
    if (body.current_end_hours) {
      body.current_end_time = `${body.current_end_hours}:${body.current_end_minutes}`
      delete body['current_end_hours']
      delete body['current_end_minutes']
    }
    if (body.adjusted_start_hours) {
      body.adjusted_start_time = `${body.adjusted_start_hours}:${body.adjusted_start_minutes}`
      delete body['adjusted_start_hours']
      delete body['adjusted_start_minutes']
    }
    if (body.adjusted_end_hours) {
      body.adjusted_end_time = `${body.adjusted_end_hours}:${body.adjusted_end_minutes}`
      delete body['adjusted_end_hours']
      delete body['adjusted_end_minutes']
    }
    console.log(body)
    const { error } = await supabase
      .from(database.toLowerCase().replace(' ', '_'))
      .insert(body)

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
        message: `Successfully added request, please wait for your supervisor to approve your request`,
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
