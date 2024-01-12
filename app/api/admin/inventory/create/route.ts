import { UNDEFINED_ERROR, UNEXPECTED_ERROR } from '@/lib/config/error/auth'
import { EmployeeMutation } from '@/lib/mutations/supabase.mutation'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, response: GenericResponse) {
  const cookieStore = cookies()
  const database = request.nextUrl.pathname
    .replace('/api/admin/', '')
    .split('/')[0]
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  try {
    const body = await request.json()

    const { error } = await supabase.from(database).insert(body['data'])

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
