import React, {
  FC,
  Fragment,
  useState,
  MouseEventHandler,
  useCallback,
} from 'react';
import { cn } from '../../utils/classnames';
import MenuLogo from '../../svgIcons/menu';
import Search from '../../svgIcons/search';

import CloseLogo from '../../svgIcons/close';
import { Popover, Transition } from '@headlessui/react';
import { DzInputText } from '../../atoms/DzInputText';
import { MenuItems } from './MenuItems';
import { DzFooter, FooterData } from '../footer/DzFooter';

export interface MenuItemsMobileProps {
  items: any[];
  handleSearch: MouseEventHandler<any>;
  footerData: FooterData;
  newsletterAction: Function;
}

const styles: any = {
  logoMenu: `
    cursor-pointer
  `,
  submenuContainer: `
    absolute
    left-0
    top-[3.75rem]
    w-full
    overflow-hidden
    bg-white-100
    h-[calc(100vh_-_3.75rem)] 
  `,
  subMenu: `
    w-full
    bg-white-100
    flex
    flex-col
    relative
    max-h-[calc(100vh_-_3.75rem)]
  `,
  search: `
    mt-5
    mb-2.5
    px-5
  `,
  menuContainer: `
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
  other: `
    p-5
    border
    border-y
    border-black-20
    text-start
  `,
  copyright: `
    px-5
    py-2.5
    text-left
    text-sm
    border
    border-y
    border-black-20
  `,
  toggleIcon: `
    outline-transparent
    flex
    w-[18px]
    h-[18px]
    justify-center
    items-center
  `,
};

export const MenuItemsMobile: FC<MenuItemsMobileProps> = ({
  items = [],
  handleSearch = () => null,
  footerData,
  newsletterAction = () => null,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleKeyDown = useCallback((e: any) => {
    if (e.code === 'Enter') {
      handleSearch(e);
    }
  }, []);

  return (
    <>
      <Popover as={Fragment}>
        <Popover.Button as={Fragment}>
          {!openMenu ? (
            <button
              className={cn(styles.toggleIcon)}
              onClick={() => setOpenMenu(open => !open)}
            >
              <MenuLogo className={cn(styles.logoMenu)} id="open-menu-logo" />
            </button>
          ) : (
            <button
              className={cn(styles.toggleIcon)}
              onClick={() => setOpenMenu(open => !open)}
            >
              <CloseLogo className={cn(styles.logoMenu)} id="close-menu-logo" />
            </button>
          )}
        </Popover.Button>
        <Transition
          as={Fragment}
          show={openMenu}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel static className={cn(styles.submenuContainer)}>
            <div className={cn(styles.subMenu)}>
              <DzInputText
                onKeyDown={handleKeyDown}
                customClassContent={cn(styles.search)}
                placeholder="Search"
                extraChildren={<Search />}
              />
              <MenuItems items={items} isMobile />
              <button
                className={cn(styles.other)}
                onClick={() => newsletterAction()}
              >
                Newsletter
              </button>
              <DzFooter
                data={footerData}
                newsletterAction={newsletterAction}
                isOnHeader
              />
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default MenuItemsMobile;
