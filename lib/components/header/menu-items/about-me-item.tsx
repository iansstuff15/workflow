import { NavigationMenuContent } from '@/lib/components/ui/navigation-menu'
import {
  portfolioLink,
  linkedInProfileLink,
  cvLink,
  portfolioProjectsLink,
} from '@/lib/config/constants/links/links'
import { ListItem } from '../menu.component'

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

const AboutMeItem = () => {
  return (
    <ul className='grid gap-3 md:p-3 md:w-[500px] xl:grid-cols-2 lg:w-[600px] '>
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
  )
}

export default AboutMeItem
