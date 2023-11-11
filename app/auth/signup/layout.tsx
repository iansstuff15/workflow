import SignUpCard from '@/components/cards/signup/signup.card';
import { wrapperProps } from '@/data/interface/layout/layout';

const Layout = ({ children }: wrapperProps) => {
  return <SignUpCard>{children}</SignUpCard>;
};

export default Layout;
