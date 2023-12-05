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
import { useRouter } from 'next/navigation'
import { SIGNUP } from '@/config/constants/routes/routes'

const NoAuthLoginCard = ({ children }: loginProps) => {
  const router = useRouter()
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
        <CardDescription>Enter credentials to continue</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>{children}</CardContent>
    </Card>
  )
}

export default NoAuthLoginCard
