import { UNDEFINED_ERROR, UNEXPECTED_ERROR } from '@/lib/config/error/auth'
import { EmployeeMutation } from '@/lib/mutations/supabase.mutation'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, response: GenericResponse) {
  const cookieStore = cookies()
  const database = request.nextUrl.pathname
    .replace('/api/admin/', '')
    .split('/')[0]
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  try {
    const { data, error } = await supabase
      .from(database)
      .select('*')
      .range(0, 2)

    if (error) {
      return NextResponse.json(
        {
          message: error?.message ?? UNDEFINED_ERROR,
        },
        { status: 400 },
      )
    } else {
      return NextResponse.json(
        {
          data: data,
          message: 'good',
        },
        { status: 200 },
      )
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
