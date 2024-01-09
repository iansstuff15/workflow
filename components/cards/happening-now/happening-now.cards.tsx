'use client'
import BadgeWrapper from '@/components/badge-wrapper/badge-wrapper.components'
import AppButton from '@/components/button/appButtons'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { happeningNowProps } from '@/data/interface/card/happening-now'
import AppDialog from '@/utilities/providers/overlays/dialog/dialog'
import AppDrawer from '@/utilities/providers/overlays/drawer/drawer.overlay'

const HappeningNowCard = ({
  title,
  description,
  subtitle,
}: happeningNowProps) => {
  return (
    <BadgeWrapper>
      <Card className='w-72 h-56 overflow-hidden'>
        <CardHeader>
          <CardTitle>
            <h1 className='text-sm'>{title}</h1>
          </CardTitle>
          {subtitle ? (
            <CardDescription className='text-xs'>{subtitle}</CardDescription>
          ) : null}
        </CardHeader>
        <CardContent>
          <Card className='p-4 space-y-2'>
            <p className='text-xs line-clamp-3'>{description}</p>
            <AppDialog
              key={0}
              trigger={
                <AppButton className='rounded-full' label='Continue Reading' />
              }
              title='Happening Now'
              description='Reprehenderit proident adipisicing exercitation in quis irure occaecat enim ullamco.'
            >
              <h1>Happening Now Content Here</h1>
            </AppDialog>
          </Card>
        </CardContent>
      </Card>
    </BadgeWrapper>
  )
}

export default HappeningNowCard
