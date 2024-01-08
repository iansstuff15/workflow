import ForgetPasswordCard from '@/components/cards/forget-password/forget-password'
import { WrapperProps } from '@/data/interface/layout/layout'

const Layout = ({ children }: WrapperProps) => {
  return <ForgetPasswordCard>{children}</ForgetPasswordCard>
}

export default Layout
