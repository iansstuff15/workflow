'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import {
  portfolioLink,
  cvLink,
  linkedInProfileLink,
  portfolioProjectsLink,
} from '@/config/constants/links/links'
import AboutMeItem from './menu-items/about-me-item'
import ProjectItems from './menu-items/project-item'

export function MenuHeader() {
  const path = usePathname()
  return (
    <NavigationMenu>
      <NavigationMenuList className='flex justify-items-center'>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={'text-black'}>
            The Project
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ProjectItems />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={'text-black'}>
            About Me
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <AboutMeItem />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href='/docs'
            legacyBehavior
            passHref
            className={`${navigationMenuTriggerStyle()} bg-transparent  mix-blend-difference text-black`}
          >
            <NavigationMenuLink className=' text-sm font-medium'>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className='text-sm font-medium leading-none'>{title}</div>
        <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
          {children}
        </p>
      </a>
    </li>
  )
})
ListItem.displayName = 'ListItem'
