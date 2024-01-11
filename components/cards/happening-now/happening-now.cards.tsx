'use client'
import BadgeWrapper from '@/components/badge-wrapper/badge-wrapper.components'
import AppButton from '@/components/button/appButtons'
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@nextui-org/badge'
import { happeningNowProps } from '@/data/interface/card/happening-now'
import AppDialog from '@/utilities/providers/overlays/dialog/dialog'
import AppDrawer from '@/utilities/providers/overlays/drawer/drawer.overlay'
import Image from 'next/image'
import dayjs from 'dayjs'

const HappeningNowCard = ({
  title,
  description,
  createdAt,
  link,
  subtitle,
  location,
  image,
}: happeningNowProps) => {
  const now = new Date()
  return (
    <Badge
      content={'new'}
      color='primary'
      placement='top-right'
      className='py-2 text-xs'
    >
      <Card className='w-72 h-38 overflow-hidden'>
        <CardHeader>
          <CardTitle>
            <h1 className='text-sm'>{title}</h1>
          </CardTitle>
          {subtitle ? (
            <CardDescription className='text-xs'>
              {subtitle ? dayjs(subtitle).format('dddd, MMM DD, YYYY') : null},{' '}
              {location}
            </CardDescription>
          ) : null}
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-xs line-clamp-1'>{description}</p>
          <AppDialog
            key={0}
            trigger={
              <AppButton className='rounded-full' label='Continue Reading' />
            }
            isOKLabel={link ? 'Visit Link' : undefined}
            isOKAction={link ? () => {} : undefined}
            title='Happening Now'
            description={`${title}, ${subtitle} ${
              location ? `at ${location}` : ''
            }`}
          >
            <p>{description}</p>
            <br />
            {image ? (
              <Image
                src={image}
                alt={`image of ${title} event`}
                width={300}
                height={300}
                objectFit='cover'
              />
            ) : null}
          </AppDialog>
        </CardContent>
      </Card>
    </Badge>
  )
}

export default HappeningNowCard
