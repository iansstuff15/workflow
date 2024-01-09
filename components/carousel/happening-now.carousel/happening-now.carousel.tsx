import HappeningNowCard from '@/components/cards/happening-now/happening-now.cards'
import AppCarousel from '../carousel.component'
import AppDrawer from '@/utilities/providers/overlays/drawer/drawer.overlay'
import { useState } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const HappeningNowCarousel = () => {
  return (
    <>
      <ScrollArea className=''>
        <div className='flex w-max space-x-4 p-4'>
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
          <HappeningNowCard
            key={1}
            title='Sit ipsum incididunt eu '
            subtitle='ipsum incididunt'
            description='Aute ipsum aliqua do nulla dolore. In laborum consequat fugiat consequat consectetur labore elit mollit laborum minim do nulla. Ad id veniam eiusmod cillum nostrud et elit laborum culpa officia velit. Reprehenderit exercitation enim nostrud quis consequat fugiat exercitation cillum tempor. Id Lorem in sunt incididunt. Id minim exercitation labore cupidatat non do do dolore deserunt qui eu sint nulla.'
          />
        </div>

        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </>
  )
}

export default HappeningNowCarousel
