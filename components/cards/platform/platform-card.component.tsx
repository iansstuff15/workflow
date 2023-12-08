import AppButton from '@/components/button/appButtons'
import { Card, CardContent } from '@/components/ui/card'
import { platformCardProps } from '@/data/interface/platform/platform.interface'

const PlatformCard = ({ title, description }: platformCardProps) => {
  return (
    <Card>
      <CardContent className='space-y-2'>
        <h1 className='text-4xl font-bold mt-4 mb-2'>{title}</h1>
        <p className='text-xs'>{description}</p>
        <AppButton
          label='Request Access'
          className='bg-gradient-to-r from-blue-600 to-indigo-600'
        />
      </CardContent>
    </Card>
  )
}

export default PlatformCard
