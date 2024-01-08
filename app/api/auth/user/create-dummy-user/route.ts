import { UNDEFINED_ERROR, UNEXPECTED_ERROR } from '@/config/error/auth'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { faker } from '@faker-js/faker'
import AccountNewDummy from '@/workflow-email-templates/emails/account-new-dummy'
import { Resend } from 'resend'
import { env } from 'process'
import { appMetadata } from '../../../../../config/constants/metadata/metadata'
import { metadata } from '../../../../layout'

export async function POST(
  request: DummyCreateAccountRequest,
  response: DummyCreateAccountResponse,
) {
  try {
    const cookieStore = cookies()
    const { receipient } = await request.json()
    const email = faker.internet.email().toLowerCase()
    const password = faker.internet.password()
    const phone = faker.phone.number()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const position = 'administrator'
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    const resend = new Resend(env.NEXT_PUBLIC_RESEND_KEY)
    const { data } = await supabase.auth.signUp({
      email: `${firstName}.${lastName}@by_ian.dev`,
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          position: position,
          email: email,
        },
      },
    })

    const { error } = await supabase.from('employee').insert([
      {
        id: data.user?.id,
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        position: position,
        email: `${firstName}.${lastName}@by_ian.dev`,
      },
    ])
    console.log('error ' + error?.message)
    await resend.emails.send({
      from: 'do-not-reply@by-ian.dev',
      to: [receipient],
      subject: 'Welcome to Workflow by Ian',
      react: AccountNewDummy({
        email: email,
        firstName: firstName,
        lastName: lastName,
        generatedEmail: email,
        generatedPassword: password,
      }),
    })
    response.email = email
    response.password = password
    response.receipient = receipient
    response.message = 'good'
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json(
      {
        message: UNEXPECTED_ERROR,
      },
      { status: 500 },
    )
  }
}
