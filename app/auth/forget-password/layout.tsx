import ForgetPasswordCard from '@/components/cards/forget-password/forget-password';
import { wrapperProps } from '@/data/interface/layout/layout';

const Layout = ({ children }: wrapperProps) => {
  return <ForgetPasswordCard>{children}</ForgetPasswordCard>;
};

export default Layout;
