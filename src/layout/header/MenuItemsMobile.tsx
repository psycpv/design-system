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

import { DzLink } from '../../atoms/DzLink';
import CloseLogo from '../../svgIcons/close';
import { Popover, Transition } from '@headlessui/react';
import { DzInputText } from '../../atoms/DzInputText';
import { MenuItems } from './MenuItems';
import OutlineFacebook from '../../svgIcons/outlineFacebook';
import OutlineTwitter from '../../svgIcons/outlineTwitter';
import OutlineInstagram from '../../svgIcons/outlineInstagram';
import OutlineWeChat from '../../svgIcons/outlineWeChat';

export interface MenuItemsMobileProps {
  items: any[];
  socialMedia: any;
  handleSearch: MouseEventHandler<any>;
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
};

export const MenuItemsMobile: FC<MenuItemsMobileProps> = ({
  items = [],
  socialMedia = {},
  handleSearch = () => null,
}) => {
  const { weChat, instagram, twitter, facebook } = socialMedia;
  const [value, toggle] = useState(false);
  const handleKeyDown = useCallback((e: any) => {
    if (e.code === 'Enter') {
      handleSearch(e);
    }
  }, []);

  return (
    <>
      <Popover as={Fragment}>
        <Popover.Button as={Fragment}>
          {!value ? (
            <MenuLogo
              className={cn(styles.logoMenu)}
              onClick={() => toggle(v => !v)}
              id="open-menu-logo"
            />
          ) : (
            <CloseLogo
              className={cn(styles.logoMenu)}
              onClick={() => toggle(v => !v)}
              id="close-menu-logo"
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
                onKeyDown={handleKeyDown}
                customClassContent={cn(styles.search)}
                placeholder="Search"
                extraChildren={<Search />}
              />
              <MenuItems items={items} isMobile />
              <div className={cn(styles.other)}>Newsletter</div>
              <ul className={cn(styles.misc)}>
                {twitter ? (
                  <li>
                    <DzLink href={twitter} openNewTab>
                      <OutlineTwitter id="twitter-icon" />
                    </DzLink>
                  </li>
                ) : null}

                {facebook ? (
                  <li>
                    <DzLink href={facebook} openNewTab>
                      <OutlineFacebook id="facebook-icon" />
                    </DzLink>
                  </li>
                ) : null}

                {instagram ? (
                  <li>
                    <DzLink href={instagram} openNewTab>
                      <OutlineInstagram id="instagram-icon" />
                    </DzLink>
                  </li>
                ) : null}

                {weChat ? (
                  <li>
                    <DzLink href={weChat} openNewTab>
                      <OutlineWeChat id="we-chat-icon" />
                    </DzLink>
                  </li>
                ) : null}
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
