import React, { FC, useMemo, MouseEventHandler } from 'react';
import { cn } from '../../utils/classnames';
import { DzLogo } from '../../atoms';
import { MenuItems } from './MenuItems';
import { MenuItemsMobile } from './MenuItemsMobile';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';

interface SocialMedia {
  _type: string;
  weChat: string;
  instagram: string;
  twitter: string;
  facebook: string;
}

interface Page {
  url: string;
}

interface HeaderItem {
  title: string;
  newTab?: boolean;
  desktopEnabled: boolean;
  mobileEnabled: boolean;
  _type: string;
  link?: string;
  submenu?: any;
  anchor?: string;
  page?: Page;
}

interface MenuShape {
  items: HeaderItem[];
}

export interface DzHeaderProps {
  menu: MenuShape;
  socialMedia: SocialMedia;
  handleSearch: MouseEventHandler<any>;
  headerClass?: string;
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
  logoMenu: `
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

export const DzHeader: FC<DzHeaderProps> = ({
  menu,
  socialMedia,
  handleSearch = () => null,
  headerClass = '',
}) => {
  const { items = [] } = menu ?? {};
  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width < BREAKPOINTS.MD;
  }, [width]);

  return (
    <header className={cn(styles.headerContainer, headerClass)}>
      <div className={cn(styles.leftSide)}>
        <DzLogo
          className={cn(styles.logo)}
          svgProps={{ height: '20', width: '163', id: 'david-zwirner-logo' }}
        />
      </div>
      {isSmall ? (
        <nav className={cn(styles.rightSideMobile)}>
          <MenuItemsMobile
            items={items}
            handleSearch={handleSearch}
            socialMedia={socialMedia}
          />
        </nav>
      ) : (
        <nav className={cn(styles.rightSideDesktop)}>
          <MenuItems items={items} />
        </nav>
      )}
    </header>
  );
};

export default DzHeader;
