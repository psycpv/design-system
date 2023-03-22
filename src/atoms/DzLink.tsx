import React from 'react';
import { cn } from '../utils/classnames';
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

const VARIANTS = {
  NAV: 'nav',
  TEXT: 'text',
};

export const LINK_VARIANTS = [VARIANTS.NAV, VARIANTS.TEXT] as const;
export type LinkVariants = typeof LINK_VARIANTS[number];

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
} & ComponentPropsWithRef<'a'>;

const styles: any = {
  link: `
    hover:underline 
    underline-offset-8 
    decoration-1 
    decoration-black-60
  `,
  nav: `
    text-sm
  `,
  text: `
    decoration-black-40 
    text-md 
    underline 
    hover:decoration-black-60
  `,
  inactive: `
    text-black-40
  `,
};
export const DzLink = forwardRef<HTMLAnchorElement, DzLinkProps>(
  (
    {
      children,
      href,
      openNewTab,
      className = '',
      linkProps,
      variant = VARIANTS.NAV,
      router,
      useRoute,
      LinkElement = 'a',
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
      styles.link,
      styles?.[variant],
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
