'use client'
import AppIconWithText from '@/assets/logo-with-text-white.svg'

import Image from 'next/image'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs'
import { usePathname } from 'next/navigation'
import { transformPathNameToArrayOfString } from '@/utilities/array/array'
const AppNavBar = () => {
  const path = usePathname()
  const pathsArray = transformPathNameToArrayOfString(path)
  return (
    <div className='sticky top-0 bg-white/70 px-5 py-3 backdrop-blur-lg z-10'>
      <div className='w-full grid grid-cols-2 '>
        <h1 className='font-bold text-3xl'>
          {path.includes('/app')
            ? path.replace('/app/', '').toLocaleUpperCase()
            : path.replace('/admin/', '').toLocaleUpperCase()}
        </h1>
        <div></div>
      </div>
      <Breadcrumbs
        size='md'
        variant={'light'}
        color='primary'
        className='w-fit '
      >
        {pathsArray.map((data, index) => {
          return (
            <BreadcrumbItem key={index} className='mx-2'>
              <strong>{data}</strong>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumbs>
    </div>
  )
}

export default AppNavBar
