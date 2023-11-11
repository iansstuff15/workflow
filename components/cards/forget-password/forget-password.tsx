'use client';
import AppButton from '@/components/button/appButtons';
import AppIconWithText from '@/assets/icon-with-text.svg';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { loginProps } from '@/data/interface/card/login';
import Image from 'next/image';

const ForgetPasswordCard = ({ children }: loginProps) => {
  return (
    <Card className={'w-10/12 mx-auto my-auto'}>
      <CardHeader>
        <CardTitle>
          {' '}
          <Image
            src={AppIconWithText}
            width={240}
            height={240}
            alt="workflow-logo"
          />
          <br />
          Forget Password
        </CardTitle>
        <CardDescription>
          <p className="w-96">
            <br />
            Sunt sit esse sit, <br />
            <br /> commodo duis officia ea laborum veniam officia aliquip.
            Laborum commodo nostrud sit velit sit laboris. Lorem eiusmod eiusmod
            Lorem labore. Cillum sunt elit aute eu elit. Irure eiusmod sint
            eiusmod sunt occaecat cillum non ipsum occaecat elit.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
        <AppButton variant={'secondary'} label="Cancel" onClick={() => {}} />
      </CardContent>
    </Card>
  );
};

export default ForgetPasswordCard;
