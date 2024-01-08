import { UNDEFINED_ERROR, UNEXPECTED_ERROR } from '@/config/error/auth'
import { CreateEmailDummyAccountRequest } from '@/data/request/email-dummy-account/created'
import AccountNewDummy from '@/workflow-email-templates/emails/account-new-dummy'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { env } from 'process'
import { Resend } from 'resend'

export async function POST(
  request: CreateEmailDummyAccountRequest,
  response: GenericResponse,
) {
  const resend = new Resend(env.NEXT_PUBLIC_RESEND_KEY)
  try {
    const { email, firstName, lastName, generatedEmail, generatedPassword } =
      await request.json()

    const data = await resend.emails.send({
      from: 'do-not-reply@by-ian.dev',
      to: [email],
      subject: 'Welcome to Workflow by Ian',
      react: AccountNewDummy({
        email: email,
        firstName: firstName,
        lastName: lastName,
        generatedEmail: generatedEmail,
        generatedPassword: generatedPassword,
      }),
    })
    if (data) {
      return NextResponse.json({
        message: 'good',
      })
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: UNEXPECTED_ERROR,
      },
      { status: 500 },
    )
  }
}
