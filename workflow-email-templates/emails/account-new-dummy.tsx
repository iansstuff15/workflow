import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface AccountNewDummyEmailProps {
  email?: string
  firstName?: string
  lastName?: string
  generatedEmail?: string
  generatedPassword?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

export const AccountNewDummy = ({
  email = 'dlpowell35@gmail.com',
  firstName = 'Ian',
  lastName = 'Powell',
  generatedEmail = 'carolanne_smitham72@gmail.com',
  generatedPassword = 'w9MWmWegwskfdOB',
}: AccountNewDummyEmailProps) => {
  const previewText = `Welcome ${email} to TaskFlow`

  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className=' my-auto mx-auto font-sans'>
            <Container>
              <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px] '>
                <Section className='p-4 rounded-md border border-solid border-[#eaeaea] pb-6'>
                  <Img
                    src='https://ctkpfwbkunxfoekcyyle.supabase.co/storage/v1/object/public/public-storage/icon.svg'
                    alt='TaskFlow icon'
                    width='50'
                    height='50'
                    className='mx-auto my-3'
                  />
                  <Heading
                    as='h1'
                    className='text-black text-md text-center my-0'
                  >
                    Welcome to{' '}
                    <strong className='text-blue-600'>TaskFlow</strong>
                  </Heading>
                  <Heading
                    as='h3'
                    className='text-slate-600 text-md text-center my-0'
                  >
                    Your HR Management Superapp
                  </Heading>
                </Section>

                <Heading as='h3' className='text-sm font-bold'>
                  Good day {lastName}, {firstName},
                </Heading>
                <Text>
                  <p className='text-xs'>
                    Do excepteur do irure eu mollit anim enim magna commodo
                    deserunt ipsum enim elit. Tempor reprehenderit excepteur
                    elit aute minim enim dolor ullamco dolore laboris magna.
                    Amet elit cillum amet fugiat duis elit deserunt exercitation
                    excepteur proident cupidatat labore do eu. Amet ut ullamco
                    laboris ipsum. Non quis ut velit cupidatat minim. Aute Lorem
                    Lorem laborum voluptate veniam ea. Sunt deserunt veniam
                    nostrud aliquip veniam nisi exercitation aliqua cupidatat
                    enim nulla dolore labore laboris.
                  </p>
                </Text>

                <Section className='p-4 rounded-md border border-solid border-[#eaeaea] '>
                  <Heading as='h1' className=' text-sm my-0 mb-2'>
                    Account Information
                  </Heading>
                  <Row className='text-sm'>
                    <Column>
                      <strong>Email</strong> {generatedEmail}
                    </Column>
                  </Row>

                  <Row className='text-sm'>
                    <Column>
                      <strong>Password</strong> {generatedPassword}
                    </Column>
                  </Row>
                </Section>

                <Section className='text-center mt-[32px] mb-[32px]'>
                  <Button
                    className='bg-blue-600 w-full rounded-md py-4 text-white text-md font-semibold no-underline text-center'
                    href={'https://TaskFlow.by-ian.dev/auth/no-auth-signin'}
                  >
                    Login
                  </Button>
                </Section>
                <Section className='text-center'>
                  <Text className='text-black text-[14px] leading-[24px]'>
                    or copy and paste this URL into your browser:{' '}
                    <Link
                      href={'https://TaskFlow.by-ian.dev/auth/no-auth-signin'}
                      className='text-blue-600 no-underline'
                    >
                      https://TaskFlow.by-ian.dev/auth/no-auth-signin
                    </Link>
                  </Text>
                </Section>
              </Container>
              <Container>
                <Section className='text-center'>
                  <Text className='text-[#666666] text-[12px] leading-[24px]'>
                    This invitation was intended for {lastName}, {firstName}{' '}
                    using the email {email} to experience the demo application
                    of TaskFlow. If you believe this is a mistake, please ignore
                    this email. You can also check out more of my portfolio at{' '}
                    <Link
                      href={'https://TaskFlow.by-ian.dev'}
                      className='text-blue-600 no-underline'
                    >
                      https://by-ian.dev
                    </Link>
                  </Text>
                </Section>
              </Container>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </Tailwind>
  )
}

export default AccountNewDummy
