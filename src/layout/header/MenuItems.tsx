import React, { FC } from 'react';
import { DesktopSubmenu } from './DesktopSubmenus';
import { DzLink } from '../../atoms';
import { cn } from '../../utils/classnames';
import { MobileSubmenus } from './MobileSubmenus';

export interface MenuItemsProps {
  items: any[];
  isMobile?: boolean;
}

const styles: any = {
  menuContainer: `
    md:flex
    w-full
    gap-10
    items-center
    justify-end
    wrap
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
    const { title, newTab, desktopEnabled, mobileEnabled, link } = data ?? {};
    return (
      <DzLink href={link} openNewTab={newTab}>
        {title}
      </DzLink>
    );
  },
  menuItemSubmenu: (data, isMobile) => {
    const { title, mobileEnabled, desktopEnabled, submenu } = data ?? {};
    const { items } = submenu ?? {};
    return isMobile ? (
      <MobileSubmenus title={title} rootUrl="" items={items} />
    ) : (
      <DesktopSubmenu title={title} items={items} />
    );
  },
  menuItemPage: data => {
    const { title, newTab, desktopEnabled, mobileEnabled, anchor, page } =
      data ?? {};
    const { url } = page ?? {};

    return (
      <DzLink href={url} openNewTab={newTab}>
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
  return (
    <ul
      className={cn(
        isMobile ? styles.menuContainerMobile : styles.menuContainer
      )}
    >
      {renderItems(items, isMobile)}
    </ul>
  );
};

export default MenuItems;
