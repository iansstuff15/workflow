import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface overlayProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOKAction?: VoidFunction;
  isOKLabel?: string;
  title?: string;
  description?: string;
  padding?: string;
}
