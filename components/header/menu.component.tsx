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

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'My Portfolio',
    href: portfolioLink,
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'My Linkedin',
    href: linkedInProfileLink,
    description:
      'Software Engineer, DOST-SEI scholar, AWS certified cloud practitioner, full stack react and flutter developer.',
  },
  {
    title: 'My CV',
    href: cvLink,
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Other Projects',
    href: portfolioProjectsLink,
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
]

export function MenuHeader() {
  const path = usePathname()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={path.includes('/auth') ? 'text-white' : 'text-black'}
          >
            The Project
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink
                  asChild
                  className='bg-gradient-to-r from-blue-600 to-indigo-600'
                >
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    <div className='mt-4 text-xs font-medium'>
                      current project
                    </div>
                    <div className='mb-2 text-xl font-medium'>Workflow</div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      Is a personal project owned by Diriangen Lempira
                      (nickname: Ian) Powell to showcase skills in web
                      development. This site uses supabase for its backend and a
                      combination of shadcn, nextui, tailwind css, and tremor
                      for the front end
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href='/docs' title='Git Repository'>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href='/docs/installation' title='Git History'>
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem
                href='/docs/primitives/typography'
                title='Send Feedback'
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={path.includes('/auth') ? 'text-white' : 'text-black'}
          >
            About Me
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  target='_blank'
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href='/docs'
            legacyBehavior
            passHref
            className={`${navigationMenuTriggerStyle()} bg-transparent  mix-blend-difference${
              path.includes('/auth') ? 'text-white' : 'text-black'
            }`}
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

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
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
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
