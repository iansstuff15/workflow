import NoAuthLoginCard from '@/components/cards/login/no-auth-card/no-auth-login.card'
import { WrapperProps } from '@/data/interface/layout/layout'

const Layout = ({ children }: WrapperProps) => {
  return <NoAuthLoginCard>{children}</NoAuthLoginCard>
}

export default Layout
