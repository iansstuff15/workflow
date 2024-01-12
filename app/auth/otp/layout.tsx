import OTPCard from '@/lib/components/cards/otp/otp'
import { WrapperProps } from '@/lib/data/interface/layout/layout'

const Layout = ({ children }: WrapperProps) => {
  return <OTPCard>{children}</OTPCard>
}

export default Layout
