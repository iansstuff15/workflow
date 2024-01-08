import SignUpCard from '@/components/cards/signup/signup.card'
import { WrapperProps } from '@/data/interface/layout/layout'

const Layout = ({ children }: WrapperProps) => {
  return <SignUpCard>{children}</SignUpCard>
}

export default Layout
