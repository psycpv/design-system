import React, { FC } from 'react';
import { cn } from '../../utils/classnames';
import { DzLogo } from '../../atoms';
import { MenuItems } from './MenuItems';
import {MenuItemsMobile} from './MenuItemsMobile'

export interface DzHeaderProps {
  menu: any;
}

const styles: any = {
  headerContainer: `
    relative
    flex
    w-full
    bg-white-100
    p-5
    items-center
    z-50
  `,
  logo: `
    pl-2.5
    h-5
  `,
  leftSide: `
    w-fit
  `,
  rightSideDesktop: `
    hidden
    md:flex
    w-full
    items-center
    justify-end
  `,
  rightSideMobile: `
    md:hidden
    flex
    w-full
    items-center
    justify-end
  `,
  logoMenu:`
    cursor-pointer
  `,
  subMenu: `
    bg-white-100
    flex
    flex-col
    gap-5
    py-5
    px-[1.875rem]
    z-50
  `,
  submenuContainer: `
    absolute
  `,
};

export const DzHeader: FC<DzHeaderProps> = ({ menu = {} }) => {
  const { items = [] } = menu ?? {};

  return (
    <header className={cn(styles.headerContainer)}>
      <div className={cn(styles.leftSide)}>
        <DzLogo
          className={cn(styles.logo)}
          svgProps={{ height: '20', width: '163' }}
        />
      </div>
      <nav className={cn(styles.rightSideDesktop)}>
        <MenuItems items={items} />
      </nav>
      <nav className={cn(styles.rightSideMobile)}>
        <MenuItemsMobile items={items}/>
      </nav>
    </header>
  );
};

export default DzHeader;
