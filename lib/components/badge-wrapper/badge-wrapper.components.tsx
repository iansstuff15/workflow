import { WrapperProps } from '@/lib/data/interface/layout/layout'
import { Badge } from '@nextui-org/badge'
const BadgeWrapper = ({ children }: WrapperProps) => {
  return (
    <Badge
      content='new'
      color='primary'
      placement='top-right'
      className='py-2 text-xs'
    >
      {children}
    </Badge>
  )
}
export default BadgeWrapper
