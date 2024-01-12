'use client'
import AppButton from '@/lib/components/button/appButtons'
import GoogleIcon from '@/assets/google-icon.svg'
import MicrosoftIcon from '@/assets/microsoft-icon.svg'
import AppleIcon from '@/assets/apple-icon.svg'
import AppIconWithText from '@/assets/icon-with-text.svg'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/lib/components/ui/card'
import { loginProps } from '@/lib/data/interface/card/login'
import Image from 'next/image'

import { NO_AUTH_LOGIN } from '@/lib/config/constants/routes/routes'
import { useRouter } from 'next/navigation'

const SignUpCard = ({ children }: loginProps) => {
  const router = useRouter()
  return (
    <Card className='w-10/12 mx-auto my-auto'>
      <CardHeader>
        <CardTitle>
          <Image
            src={AppIconWithText}
            width={240}
            height={240}
            alt='workflow-logo'
          />
          <br />
          Register
        </CardTitle>
        <CardDescription>Start creating your account</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        {children}
        <AppButton
          variant={'secondary'}
          label='Sign in'
          onClick={() => {
            router.push(NO_AUTH_LOGIN)
          }}
        />
        <p className='mx-auto'>or register with</p>

        <div className='grid grid-cols-3 gap-2'>
          <AppButton
            variant={'outline'}
            onClick={() => {}}
            label='Google'
            icon={
              <Image
                src={GoogleIcon}
                alt='google-icon-svg'
                width={12}
                height={12}
                className='mr-1'
              />
            }
          />
          <AppButton
            variant={'outline'}
            onClick={() => {}}
            label='Apple'
            icon={
              <Image
                src={AppleIcon}
                alt='google-icon-svg'
                width={12}
                height={12}
                className='mr-1'
              />
            }
          />
          <AppButton
            variant={'outline'}
            onClick={() => {}}
            label='Microsoft'
            icon={
              <Image
                src={MicrosoftIcon}
                alt='google-icon-svg'
                width={12}
                height={12}
                className='mr-1'
              />
            }
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default SignUpCard
