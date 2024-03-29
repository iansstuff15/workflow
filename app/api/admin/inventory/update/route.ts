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
    const { items } = await request.json()
    items.forEach(async (element: any) => {
      const { error } = await supabase
        .from(database)
        .update(element.data)
        .eq(element.column, element.value)

      if (error) {
        return NextResponse.json(
          {
            message: error?.message ?? UNDEFINED_ERROR,
          },
          { status: 400 },
        )
      }
    })

    return NextResponse.json({
      message: 'Successfully deleted data',
    })
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
