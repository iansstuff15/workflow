import AuthLoginCard from '@/lib/components/cards/login/auth-card/auth-login.card'
import { WrapperProps } from '@/lib/data/interface/layout/layout'

const Layout = ({ children }: WrapperProps) => {
  return <AuthLoginCard>{children}</AuthLoginCard>
}

export default Layout
