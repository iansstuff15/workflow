import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_LOGIN, NO_AUTH_LOGIN } from './config/constants/routes/routes';

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { data, error } = await supabase.auth.getUser();
  console.log('user is unauthenticated');
  console.log(data);
  console.log(error?.message);

  if (data.user && request.nextUrl.pathname.includes(NO_AUTH_LOGIN)) {
    return NextResponse.redirect(new URL(AUTH_LOGIN, request.url));
  } else if (data.user) {
  } else {
    console.log('unauthenticated ');
    return NextResponse.redirect(new URL(NO_AUTH_LOGIN, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
