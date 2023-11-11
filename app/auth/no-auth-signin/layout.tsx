import NoAuthLoginCard from '@/components/cards/login/no-auth-card/no-auth-login.card';
import { wrapperProps } from '@/data/interface/layout/layout';

const Layout = ({ children }: wrapperProps) => {
  return <NoAuthLoginCard>{children}</NoAuthLoginCard>;
};

export default Layout;
