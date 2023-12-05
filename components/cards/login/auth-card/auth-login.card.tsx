'use client'
import AppButton from '@/components/button/appButtons'
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
} from '@/components/ui/card'
import { loginProps } from '@/data/interface/card/login'
import Image from 'next/image'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { useRouter } from 'next/navigation'
import { NO_AUTH_LOGIN, SIGNUP } from '@/config/constants/routes/routes'
import { client } from '@/utilities/providers/backend/supabase'
import { useUser } from '@supabase/auth-helpers-react'
const AuthLoginCard = ({ children }: loginProps) => {
  const router = useRouter()
  const user = useUser()
  return (
    <Card className={'w-10/12 mx-auto my-auto'}>
      <CardHeader>
        <CardTitle>
          <Image
            src={AppIconWithText}
            width={240}
            height={240}
            alt='workflow-logo'
          />
          <br />
          Login
        </CardTitle>
        <CardDescription>Enter password to continue</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <Avatar>
          <AvatarImage
            className='rounded-full w-32 h-32 m-auto'
            src='https://github.com/shadcn.png'
            alt='@shadcn'
          />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <h1>{}</h1>
        {children}
        <AppButton
          variant={'secondary'}
          label='Switch Account'
          onClick={() => {
            router.push(NO_AUTH_LOGIN)
          }}
        />
        <AppButton
          variant={'secondary'}
          label='Sign up'
          onClick={() => {
            router.push(SIGNUP)
          }}
        />
        <p className='mx-auto'>or login with</p>

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

export default AuthLoginCard
