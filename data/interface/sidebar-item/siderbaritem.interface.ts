import { ReactNode } from 'react';
import { Url } from 'url';
export interface sidebarItemProps {
  child?: Array<ReactNode>;
  label: string;
  to?: string;
  icon?: ReactNode;
}
