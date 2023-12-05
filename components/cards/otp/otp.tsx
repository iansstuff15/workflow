'use client'
import AppButton from '@/components/button/appButtons'
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

const OTPCard = ({ children }: loginProps) => {
  const router = useRouter()
  return (
    <Card className={'w-10/12 mx-auto '}>
      <CardHeader>
        <CardTitle>
          {' '}
          <Image
            src={AppIconWithText}
            width={240}
            height={240}
            alt='workflow-logo'
          />
          <br />
          Verify OTP
        </CardTitle>
        <CardDescription>
          <p>
            <br />
            Sunt sit esse sit, <br />
            <br /> commodo duis officia ea laborum veniam officia aliquip.
            Laborum commodo nostrud sit velit sit laboris. Lorem eiusmod eiusmod
            Lorem labore. Cillum sunt elit aute eu elit. Irure eiusmod sint
            eiusmod sunt occaecat cillum non ipsum occaecat elit.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        {children}
        <AppButton
          variant={'secondary'}
          label='Resend OTP'
          onClick={() => {}}
        />
      </CardContent>
    </Card>
  )
}

export default OTPCard
