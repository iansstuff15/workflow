'use client';
import { wrapperProps } from '@/data/interface/layout/layout';
import { NextUIProvider } from '@nextui-org/system';

const CoreProvider = ({ children }: wrapperProps) => {
  return <NextUIProvider> {children}</NextUIProvider>;
};
export default CoreProvider;
