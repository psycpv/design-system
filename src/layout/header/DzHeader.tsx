import React, { FC, useMemo, MouseEventHandler } from 'react';
import { cn } from '../../utils/classnames';
import { DzLogo, DzLinkProps, RouterProps } from '../../atoms';
import { MenuItems } from './MenuItems';
import { MenuItemsMobile } from './MenuItemsMobile';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';
import { FooterData } from '../footer/DzFooter';

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
  handleSearch: MouseEventHandler<any>;
  newsletterAction: Function;
  headerClass?: string;
  linkProps?: DzLinkProps | RouterProps;
  footerData: FooterData;
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
  submenuContainer: `
    absolute
  `,
};

export const DzHeader: FC<DzHeaderProps> = ({
  menu,
  handleSearch = () => null,
  newsletterAction = () => null,
  headerClass = '',
  linkProps,
  footerData,
}) => {
  const { items = [] } = menu ?? {};
  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width <= BREAKPOINTS.MD;
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
            footerData={footerData}
            newsletterAction={newsletterAction}
          />
        </nav>
      ) : (
        <nav className={cn(styles.rightSideDesktop)}>
          <MenuItems items={items} linkProps={linkProps} />
        </nav>
      )}
    </header>
  );
};

export default DzHeader;
