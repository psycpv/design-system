import React, { FC, MouseEventHandler } from 'react';
import { cn } from '../utils/classnames';
import CloseIcon from '../svgIcons/close';

export const PILL_VARIANTS = {
  ARTIST: 'artist',
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
  FILTER: 'filter',
};
export const PILL_VARIANT_NAMES = [
  PILL_VARIANTS.ARTIST,
  PILL_VARIANTS.DESKTOP,
  PILL_VARIANTS.MOBILE,
  PILL_VARIANTS.FILTER,
] as const;
export type PillVariant = typeof PILL_VARIANT_NAMES[number];

export interface DzPillProps {
  variant?: PillVariant;
  title: string;
  showIcon?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClickPill?: MouseEventHandler<any>;
  onClickClose?: MouseEventHandler<any>;
  className?: string;
}
const styles: any = {
  active: `
    bg-white-100
    !ring-black-100
  `,
  disabled: `
    !ring-black-10
    !cursor-default
    !text-black-20    
    hover:text-black-20
    focus:text-black-20
    active:text-black-20
    hover:bg-white-100
    focus:bg-white-100
    active:bg-white-100    
  `,
  artist: `
    p-2.5
    pr-5
  `,
  desktop: `
    px-5
    h-[1.875rem]
    border-gray-300
    text-black-80
    ring-black-40
    hover:ring-black-60
    hover:bg-white-100
    hover:underline
    hover:decoration-black-60
    focus:ring-black-60
    focus:bg-white-100
    focus:underline
    focus:decoration-black-60
    active:ring-black-60
    active:bg-white-100
    active:decoration-black-100
    active:text-black-100
    active:ring-black-60
    active:text-black-100
  `,
  mobile: `
    px-5
    py-1.5
  `,
  filter: `
    rounded-none
    px-2.5
    py-1.5
    ring-black-60
    text-xs
  `,
  pill: `
    flex
    w-fit
    gap-2.5
    cursor-pointer
    content-center
    justify-center
    bg-white-100
    rounded-full
    ring-1
    ring-black-20
    text-black-60
    hover:text-black-100
    focus:text-black-100
    active:text-black-100
    hover:bg-black-10
    focus:bg-black-10
    active:bg-black-20
  `,
  closeIcon: `
    my-auto
  `,
  statusCircle: `
    rounded-full
    w-[1.875rem]
    h-[1.875rem]
    bg-black-40
  `,
  title: `
    my-auto
  `,
  titleHover: `
    hover:underline
  `,
  titleStyle: {
    artist: `
      text-md
    `,
    desktop: `
      text-xs
      decoration-black-60
    `,
    mobile: `
      text-xs
    `,
  },
};
export const DzPill: FC<DzPillProps> = ({
  variant = PILL_VARIANTS.DESKTOP,
  title = '',
  showIcon = false,
  active = false,
  onClickPill,
  onClickClose,
  className = '',
  disabled,
}) => {
  const closeIcon =
    (variant === PILL_VARIANTS.ARTIST || variant === PILL_VARIANTS.FILTER) &&
    showIcon ? (
      <CloseIcon
        width={10}
        height={10}
        fill="#4D4D4D"
        className={cn(styles.closeIcon)}
        onClick={onClickClose}
      />
    ) : null;
  const statusRender =
    variant === PILL_VARIANTS.ARTIST ? (
      <div className={cn(styles.statusCircle)}></div>
    ) : null;
  const activeClass = active ? styles.active : '';
  const disabledClass = disabled ? styles.disabled : '';
  const activeClassText = active ? 'text-black-100' : '';
  const hoverClass = disabled ? '' : styles.titleHover;
  return (
    <div
      className={cn(
        styles.pill,
        styles?.[variant],
        activeClass,
        disabledClass,
        className
      )}
      onClick={onClickPill}
    >
      {statusRender}
      <p
        className={cn(
          styles.title,
          hoverClass,
          styles.titleStyle?.[variant],
          activeClassText
        )}
      >
        {title}
      </p>
      {closeIcon}
    </div>
  );
};

export default DzPill;
