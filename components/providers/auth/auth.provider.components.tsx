'use client';
import { wrapperProps } from '@/data/interface/layout/layout';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();
const AuthProvider = ({ children }: wrapperProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default AuthProvider;
