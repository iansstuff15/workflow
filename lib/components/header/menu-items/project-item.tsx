import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuContent,
} from '@/lib/components/ui/navigation-menu'
import { ListItem } from '../menu.component'

const ProjectItems = () => {
  return (
    <ul className='grid gap-3 py-3 md:px-3 md:w-[320px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]'>
      <li className='row-span-3'>
        <a
          className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white no-underline outline-none focus:shadow-md py-3 px-4'
          href='/'
        >
          <div className='mt-4 text-xs font-medium'>current project</div>
          <div className='mb-2 text-xl font-medium'>Workflow</div>
          <p className='text-xs '>
            Is a personal project owned by Diriangen Lempira (nickname: Ian)
            Powell to showcase skills in web development. This site uses
            supabase for its backend and a combination of shadcn, nextui,
            tailwind css, and tremor for the front end
          </p>
        </a>
      </li>

      <ListItem href='/docs' title='Git Repository'>
        Re-usable components built using Radix UI and Tailwind CSS.
      </ListItem>
      <ListItem href='/docs/installation' title='Git History'>
        How to install dependencies and structure your app.
      </ListItem>
      <ListItem href='/docs/primitives/typography' title='Send Feedback'>
        Styles for headings, paragraphs, lists...etc
      </ListItem>
    </ul>
  )
}

export default ProjectItems
