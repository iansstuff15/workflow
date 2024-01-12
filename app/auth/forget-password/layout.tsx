import ForgetPasswordCard from '@/lib/components/cards/forget-password/forget-password'
import { WrapperProps } from '@/lib/data/interface/layout/layout'

const Layout = ({ children }: WrapperProps) => {
  return <ForgetPasswordCard>{children}</ForgetPasswordCard>
}

export default Layout
