import SignUpCard from '@/lib/components/cards/signup/signup.card'
import { WrapperProps } from '@/lib/data/interface/layout/layout'

const Layout = ({ children }: WrapperProps) => {
  return <SignUpCard>{children}</SignUpCard>
}

export default Layout
