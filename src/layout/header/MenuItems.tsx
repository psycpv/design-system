import React, { FC, useMemo } from 'react';
import { DesktopSubmenu } from './DesktopSubmenus';
import { DzLink } from '../../atoms';
import { cn } from '../../utils/classnames';
import { MobileSubmenus } from './MobileSubmenus';
import useWindowSize from '../../hooks/useWindowSize';
import { BREAKPOINTS } from '../../layout/breakpoints';

export interface MenuItemsProps {
  items: any[];
  isMobile?: boolean;
}

const styles: any = {
  menuContainer: `
    md:flex
    w-full
    items-center
    justify-end
  `,
  menuContainerMobile: `
    max-h-[36.1875rem]
    overflow-y-auto
    mr-1
    scrollbar
    scrollbar-h-[0.1875rem]
    scrollbar-w-[0.1875rem]
    scrollbar-thumb-black-60
    scrollbar-track-black-20
    scrollbar-rounded-[0.1875rem]
  `,
  submenuItemMobile: `
    p-5
  `,
};

export const renderPerType = {
  menuItemLink: data => {
    const { title, newTab, link } = data ?? {};

    return (
      <DzLink href={link} openNewTab={newTab}>
        {title}
      </DzLink>
    );
  },
  menuItemSubmenu: (data, isMobile) => {
    const { title, submenu } = data ?? {};
    const { items } = submenu ?? {};

    return isMobile ? (
      <MobileSubmenus title={title} rootUrl="" items={items} />
    ) : (
      <DesktopSubmenu title={title} items={items} />
    );
  },
  menuItemPage: data => {
    const { title, newTab, anchor, page } = data ?? {};
    const { url = '' } = page ?? {};
    const urlWithAnchor = anchor ? `${url}#${anchor}` : url;

    return (
      <DzLink href={urlWithAnchor} openNewTab={newTab}>
        {title}
      </DzLink>
    );
  },
};

export const renderItems = (items, isMobile = false) => {
  return items.map(item => {
    const { _type, title } = item ?? {};
    const renderFunction = renderPerType?.[_type];
    const itemListClass = isMobile ? styles.submenuItemMobile : '';
    const listItemStyles = _type === 'menuItemSubmenu' ? '' : itemListClass;

    const { mobileEnabled, desktopEnabled } = item;
    if (isMobile && !mobileEnabled) return null;
    if (!isMobile && !desktopEnabled) return null;

    return renderFunction ? (
      <li
        className={cn(listItemStyles)}
        key={`${isMobile ? 'mbl' : 'dsk'}-${title}-link-item`}
      >
        {renderFunction(item, isMobile)}
      </li>
    ) : null;
  });
};

export const MenuItems: FC<MenuItemsProps> = ({
  items = [],
  isMobile = false,
}) => {
  if (!items) return null;
  const { width } = useWindowSize();
  const isMediumLarge = useMemo(() => {
    return BREAKPOINTS.MD < width && width < 930;
  }, [width]);
  const gapContainer = isMediumLarge ? 'gap-6' : 'gap-10';
  return (
    <ul
      className={cn(
        isMobile ? styles.menuContainerMobile : styles.menuContainer,
        gapContainer
      )}
    >
      {renderItems(items, isMobile)}
    </ul>
  );
};

export default MenuItems;
