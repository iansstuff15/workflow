import AuthLoginCard from '@/components/cards/login/auth-card/auth-login.card';
import { wrapperProps } from '@/data/interface/layout/layout';

const Layout = ({ children }: wrapperProps) => {
  return <AuthLoginCard>{children}</AuthLoginCard>;
};

export default Layout;
