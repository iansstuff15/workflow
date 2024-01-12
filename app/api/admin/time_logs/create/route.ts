import { UNDEFINED_ERROR, UNEXPECTED_ERROR } from '@/lib/config/error/auth'
import { EmployeeMutation } from '@/lib/mutations/supabase.mutation'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, response: GenericResponse) {
  /* The line `const cookieStore = cookies()` is creating a variable `cookieStore` and assigning it the
value returned by the `cookies()` function. */
  const cookieStore = cookies()
  /* The code `const database = request.nextUrl.pathname.replace('/api/admin/', '').split('/')[0]` is
extracting the name of the database from the URL path of the request. */
  const database = request.nextUrl.pathname
    .replace('/api/admin/', '')
    .split('/')[0]
  /* The line `const supabase = createRouteHandlerClient({ cookies: () => cookieStore })` is creating a
Supabase client instance using the `createRouteHandlerClient` function. This function takes an
options object as an argument, and in this case, it is passing a `cookies` function that returns the
`cookieStore` value. This allows the Supabase client to access and use the cookies from the request. */
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  try {
    const body = await request.json()

    /* The line `const { error } = await supabase.from(database).insert(body['data'])` is performing an
    insert operation on a Supabase table. */
    const { error } = await supabase.from(database).insert(body['data'])
    /* The code block is checking if there is an error returned from the insert operation on the Supabase
table. If there is an error, it returns a JSON response with the error message. If there is no
error, it returns a JSON response with the message "good". The status code of the response is set to
400 for an error response and 200 for a success response. */

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
