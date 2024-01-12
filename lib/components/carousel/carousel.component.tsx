import { carouselProps } from '@/lib/data/interface/carousel/carousel.interface'

const AppCarousel = ({ childrenArray }: carouselProps) => {
  return (
    <div className='px-4 space-y-6 w-full overflow-x-scroll'>
      <h1 className='font-bold text-lg'>Happening Now</h1>
      <div className='grid grid-cols-4 gap-2'>{childrenArray}</div>
    </div>
  )
}

export default AppCarousel
