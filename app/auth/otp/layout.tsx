import OTPCard from '@/components/cards/otp/otp';
import { wrapperProps } from '@/data/interface/layout/layout';

const Layout = ({ children }: wrapperProps) => {
  return <OTPCard>{children}</OTPCard>;
};

export default Layout;
