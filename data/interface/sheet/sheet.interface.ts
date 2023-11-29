import { ReactNode } from 'react';

export interface sheetProps {
  children: ReactNode;
  title: string;
  desription?: string;
  footer?: ReactNode;
  content?: ReactNode;
}
