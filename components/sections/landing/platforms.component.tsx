import PlatformCard from '@/components/cards/platform/platform-card.component'
import { PlatformData } from '@/components/cards/platform/platform-data'

const PlatformSection = () => {
  return (
    <div className=' pt-48 px-16 overflow-hidden text-center'>
      <h1 className='font-medium text-4xl text-primary'>
        Available when you need it
      </h1>
      <h2 className='font-bold text-6xl'>
        System is also available in various platforms
      </h2>
      <div className='grid grid-cols-3 gap-4 mt-8'>
        {PlatformData.map((data, index) => {
          return (
            <PlatformCard
              key={index}
              title={data.title}
              description={data.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PlatformSection
