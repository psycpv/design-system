import React from 'react';
import { cn } from '../utils/classnames';
import {
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
  ForwardRefExoticComponent,
} from 'react';

export const LINK_VARIANTS = {
  NAV: 'nav',
  TEXT: 'text',
};

export const TEXT_LINK_SIZES = {
  XS: 'extraSmall',
  SM: 'small',
  MD: 'medium',
  LG: 'large',
  XL: 'extraLarge',
};

export const TEXT_LINK_SIZES_NAMES = [
  TEXT_LINK_SIZES.XS,
  TEXT_LINK_SIZES.SM,
  TEXT_LINK_SIZES.MD,
  TEXT_LINK_SIZES.LG,
  TEXT_LINK_SIZES.XL,
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
  withoutStyle?: boolean;
} & ComponentPropsWithRef<'a'>;

export interface RouterProps {
  useRoute?: boolean;
  router?: any;
}

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
    focus:underline
    focus:decoration-current
    decoration-black-60 
  `,
  text: `
    underline
    decoration-black-40 
    hover:decoration-black-60
    focus:decoration-black-60
  `,
  inactive: `
    text-black-60
    hover:text-black-60
    focus:text-black-60
  `,
  extraSmall: `
    text-xs
  `,
  small: `
    text-sm
  `,
  medium: `
    text-md
  `,
  large: `
    text-lg
    underline-offset-8
  `,
  extraLarge: `
    text-xl
    underline-offset-[35%]
  `,
};

export const DzLink: ForwardRefExoticComponent<DzLinkProps> = forwardRef(
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
      textLinkSize = TEXT_LINK_SIZES.SM,
      withoutStyle = false,
      ...rest
    },
    ref
  ) => {
    const isActive = router?.asPath === href;
    const inactiveStyle = !isActive ? styles.inactive : '';
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    const linkStyle = !withoutStyle
      ? cn(
          styles.element,
          styles[variant],
          styles[textLinkSize],
          useRoute ? inactiveStyle : '',
          className
        )
      : '';

    const LinkElementType = LinkElement ?? 'a';

    if (!isNewTab) {
      return (
        <LinkElementType
          key={textLinkSize}
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
        className={linkStyle}
      >
        {children}
      </a>
    );
  }
);

DzLink.displayName = 'DzLink';

export default DzLink;
