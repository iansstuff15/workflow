import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Logo from '@/assets/icon.svg'
import Image from 'next/image'

const FooterSection = () => {
  return (
    <div className='h-screen pt-48 px-16 overflow-hidden text-center '>
      <Card className='p-8'>
        <CardContent className='grid grid-cols-1 justify-items-center space-y-4'>
          <Image src={Logo} alt='Workflow logo' width={50} height={50} />
          <div>
            <h1 className='text-6xl font-bold'>Workflow</h1>
            <h2 className='text-5xl font-bold'>
              Your HR Management{' '}
              <strong className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                Superapp
              </strong>
            </h2>
            <h3 className='text-4xl font-bold text-slate-600'>
              A once stop solution for HR needs
            </h3>
          </div>

          <p className='font-medium text-2xl'>
            Workflow is a personal project owned by Diriangen Lempira (nickname:
            Ian) Powell to showcase skills in web development. This site uses
            supabase for its backend and a combination of shadcn, nextui,
            tailwind css, and tremor for the front end. This project is not
            intended nor is adverstised for commercial use.
          </p>
          <h3 className='font-medium text-lg text-slate-500'>
            Created by Diriangen Lempira Powell, 2023
          </h3>
        </CardContent>
      </Card>
    </div>
  )
}

export default FooterSection
