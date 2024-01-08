import OTPCard from '@/components/cards/otp/otp'
import { WrapperProps } from '@/data/interface/layout/layout'

const Layout = ({ children }: WrapperProps) => {
  return <OTPCard>{children}</OTPCard>
}

export default Layout
