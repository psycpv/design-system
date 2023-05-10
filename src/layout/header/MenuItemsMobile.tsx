import React, { FC, Fragment, useState } from 'react';
import { cn } from '../../utils/classnames';
import MenuLogo from '../../svgIcons/menu';
import Search from '../../svgIcons/search';

import CloseLogo from '../../svgIcons/close';
import { Popover, Transition } from '@headlessui/react';
import { DzInputText } from '../../atoms/DzInputText';
import {MenuItems} from './MenuItems'

export interface MenuItemsMobileProps {
  items: any[];
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
  `,
  misc: `
    p-5
    flex
    justify-around
    items-center
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
  submenuItem: `
    p-5
  `,
  mobileOption: `
    p-5
    flex
    justify-between
  `,
  caretIcon: `
    p-2 
  `,
  rootLink: `
    w-full
  `,
  panelItems: `
    pl-[0.9375rem]
  `,
  upArrow: `
    rotate-180
  `,
};

export const MenuItemsMobile: FC<MenuItemsMobileProps> = ({ items = [] }) => {
  const [value, toggle] = useState(false);
  return (
    <>
      <Popover as={Fragment}>
        <Popover.Button as={Fragment}>
          {!value ? (
            <MenuLogo
              className={cn(styles.logoMenu)}
              onClick={() => toggle(v => !v)}
            />
          ) : (
            <CloseLogo
              className={cn(styles.logoMenu)}
              onClick={() => toggle(v => !v)}
            />
          )}
        </Popover.Button>
        <Transition
          as={Fragment}
          show={value}
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
                customClassContent={cn(styles.search)}
                placeholder="Search"
                extraChildren={<Search />}
              />
              <MenuItems items={items} isMobile/>
              <div className={cn(styles.other)}>Newsletter</div>
              <ul className={cn(styles.misc)}>
                <li>Twitter</li> <li>Facebook</li> <li>Instagram</li>{' '}
                <li>WeChat</li>
              </ul>
              <div className={cn(styles.copyright)}>
                ® Copyright David Zwirner 2023
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default MenuItemsMobile;
