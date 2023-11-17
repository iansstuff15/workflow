'use client';
import { actions } from '@/config/actions/actions';
import { wrapperProps } from '@/data/interface/layout/layout';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from 'kbar';
import Results from '../result/results.searchbar';

const Menu = ({ children }: wrapperProps) => {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <KBarSearch className="color-background w-96 border-none p12" />
            <Results />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default Menu;
