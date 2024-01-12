import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AUTH_LOGIN, NO_AUTH_LOGIN } from './lib/config/constants/routes/routes'

export async function middleware(request: NextRequest) {
  /* The code is creating a cookie store and using it to create a Supabase client. The `cookies()`
function is used to retrieve the cookies from the request headers. The `createRouteHandlerClient()`
function is then called with the `cookies` option set to a function that returns the cookie store.
This allows the Supabase client to use the cookies from the request. Finally, the `getUser()` method
is called on the `auth` object of the Supabase client to retrieve the authenticated user's data and
error, if any. */
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  const { data, error } = await supabase.auth.getUser()

  if (data.user && request.nextUrl.pathname.includes(NO_AUTH_LOGIN)) {
    return NextResponse.redirect(new URL(AUTH_LOGIN, request.url))
  } else if (data.user) {
  } else {
    return NextResponse.redirect(new URL(NO_AUTH_LOGIN, request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/app/:path*',
}
