import React from 'react';
import { cn } from '../utils/classnames';
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

export const LINK_VARIANTS = {
  NAV: 'nav',
  TEXT: 'text',
};

export const TEXT_LINK_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
};

export const TEXT_LINK_SIZES_NAMES = [
  TEXT_LINK_SIZES.SMALL,
  TEXT_LINK_SIZES.LARGE,
] as const;
export const LINK_VARIANTS_NAMES = [
  LINK_VARIANTS.NAV,
  LINK_VARIANTS.TEXT,
] as const;
export type TextLinkSize = typeof TEXT_LINK_SIZES_NAMES[number];
export type LinkVariants = typeof LINK_VARIANTS_NAMES[number];

export type DzLinkProps = {
  href: string;
  children: ReactNode | string;
  variant?: LinkVariants;
  openNewTab?: boolean;
  useRoute?: boolean;
  router?: any;
  className?: string;
  LinkElement?: any;
  linkProps?: any;
  textLinkSize?: TextLinkSize;
} & ComponentPropsWithRef<'a'>;

const styles: any = {
  element: `
    transition-text-decoration
    duration-300
    ease-in
    underline-offset-[0.375rem]
    decoration-1
  `,
  nav: `
    decoration-transparent
    hover:underline
    hover:decoration-current
    decoration-black-60 
  `,
  text: `
    underline
    decoration-black-40 
    hover:decoration-black-60
  `,
  inactive: `
    text-black-40
  `,
  small: `
    text-sm
  `,
  large: `
    text-md
  `,
};
export const DzLink = forwardRef<HTMLAnchorElement, DzLinkProps>(
  (
    {
      children,
      href,
      openNewTab = false,
      className = '',
      linkProps,
      variant = LINK_VARIANTS.NAV,
      router,
      useRoute,
      LinkElement = 'a',
      textLinkSize = TEXT_LINK_SIZES.SMALL,
      ...rest
    },
    ref
  ) => {
    const isActive = router?.asPath === (href === '/home' ? '/' : href);
    const inactiveStyle = !isActive ? styles.inactive : '';
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    const linkStyle = cn(
      styles.element,
      styles?.[variant],
      styles?.[textLinkSize],
      useRoute ? inactiveStyle : '',
      className
    );
    const LinkElementType = LinkElement ?? 'a';
    if (!isNewTab) {
      return (
        <LinkElementType
          href={href}
          ref={ref}
          className={linkStyle}
          {...rest}
          {...linkProps}
        >
          {children}
        </LinkElementType>
      );
    }

    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
        className={cn(linkStyle)}
      >
        {children}
      </a>
    );
  }
);

DzLink.displayName = 'DzLink';

export default DzLink;
