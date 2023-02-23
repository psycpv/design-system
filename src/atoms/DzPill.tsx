import React, { FC, MouseEventHandler } from 'react';
import { cn } from '@/utils/classnames';
import CloseIcon from '@/svgIcons/close';

export const VARIANTS = {
  ARTIST: 'artist',
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
  FILTER: 'filter',
};
export const PILL_VARIANT_NAMES = [
  VARIANTS.ARTIST,
  VARIANTS.DESKTOP,
  VARIANTS.MOBILE,
  VARIANTS.FILTER,
] as const;
export type PillVariant = typeof PILL_VARIANT_NAMES[number];

export interface DzPillProps {
  variant?: PillVariant;
  title: string;
  showIcon?: boolean;
  active?: boolean;
  onClickPill?: MouseEventHandler<any>;
  onClickClose?: MouseEventHandler<any>;
  className?: string;
}
const styles: any = {
  active: `
    bg-white-100
    ring-black-100
  `,
  artist: `
    p-2.5
    pr-5
  `,
  desktop: `
    px-5
    py-2.5
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
    active:bg-black-10
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
    hover:underline
  `,
  titleStyle: {
    artist: `
      text-md
    `,
    desktop: `
      text-sm
    `,
    mobile: `
      text-xs
    `,
  },
};
export const DzPill: FC<DzPillProps> = ({
  variant = VARIANTS.DESKTOP,
  title = '',
  showIcon = false,
  active = false,
  onClickPill,
  onClickClose,
  className = '',
}) => {
  const closeIcon =
    (variant === VARIANTS.ARTIST || variant === VARIANTS.FILTER) && showIcon ? (
      <CloseIcon
        width={10}
        height={10}
        fill="#4D4D4D"
        className={cn(styles.closeIcon)}
        onClick={onClickClose}
      />
    ) : null;
  const statusRender =
    variant === VARIANTS.ARTIST ? (
      <div className={cn(styles.statusCircle)}></div>
    ) : null;
  const activeClass = active ? styles.active : '';
  const activeClassText = active ? 'text-black-100' : '';
  return (
    <div
      className={cn(styles.pill, styles?.[variant], activeClass, className)}
      onClick={onClickPill}
    >
      {statusRender}
      <p
        className={cn(
          styles.title,
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
