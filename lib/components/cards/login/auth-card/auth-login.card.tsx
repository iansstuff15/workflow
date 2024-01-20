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
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { useRouter } from 'next/navigation'
import { NO_AUTH_LOGIN, SIGNUP } from '@/lib/config/constants/routes/routes'
import { client, useSupabase } from '@/lib/utilities/providers/backend/supabase'
import { useUser } from '@supabase/auth-helpers-react'
import { Skeleton } from '@/lib/components/ui/skeleton'
import AppDialog from '@/lib/utilities/providers/overlays/dialog/dialog'
const AuthLoginCard = ({ children }: loginProps) => {
  const router = useRouter()
  const user = useUser()
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  return (
    <Card className={'w-10/12 mx-auto my-auto'}>
      <CardHeader>
        <CardTitle className={'text-center'}>
          <Image
            src={AppIconWithText}
            width={240}
            height={240}
            alt='workflow-logo mx-auto'
          />
          <br />
          Welcome back
        </CardTitle>
        <CardDescription className={' text-center'}>
          {userInfo ? (
            `${userInfo.first_name}`
          ) : (
            <Skeleton className={'w-40 rounded-2xl h-8 mx-auto'} />
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        {userInfo?.first_name ? (
          <Avatar>
            <AvatarImage
              src={`${process.env.NEXT_PUBLIC_GENERATE_AVATAR}${userInfo.first_name} ${userInfo.last_name}`}
              className={'rounded-full w-32 h-32 m-auto'}
            />
            <AvatarFallback>{`${
              userInfo != undefined ? userInfo.first_name : 'U'
            } ${
              userInfo != undefined ? userInfo.last_name : 'U'
            }`}</AvatarFallback>
          </Avatar>
        ) : (
          <Skeleton className='rounded-full w-32 h-32 m-auto' />
        )}

        {children}
        <AppDialog
          trigger={<AppButton variant={'secondary'} label='Sign out' />}
          buttonVariant={'destructive'}
          isOKLabel={'Sign out'}
          isOKAction={() => {
            supabase.signOut()
          }}
        >
          <h1>Are you sure you wanna sign out?</h1>
        </AppDialog>
      </CardContent>
    </Card>
  )
}

export default AuthLoginCard
