import React, { FC } from 'react';
import { cn } from '@/utils/classnames';
import { DzText, TEXT_SIZES, TEXT_TYPES } from './DzText';

const VARIANTS = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning',
  ERROR: 'error',
};

export const BANNER_VARIANT_NAMES = [
  VARIANTS.DEFAULT,
  VARIANTS.SUCCESS,
  VARIANTS.ALERT,
  VARIANTS.WARNING,
  VARIANTS.ERROR,
] as const;
export type BannerVariant = typeof BANNER_VARIANT_NAMES[number];
export interface DzBannerProps {
  title: string;
  subtitle?: string;
  variant?: BannerVariant;
}

const styles: any = {
  bannerContainer: `
    flex
    p-5
  `,
  textContainer: `
    flex
    flex-col
  `,
  title: {
    default: `
      text-black-10
    `,
    success: `
      text-green-100
    `,
    alert: `
      text-red-40
    `,
    warning:`
      text-yellow-40
    `,
    error:`
      text-red-100
    `
  },
  default: `
    bg-black-10
  `,
  success: `
    bg-green-10
  `,
  alert: `
    bg-red-10
  `,
  warning:`
    bg-yellow-10
  `,
  error:`
    bg-red-60
  `
};
export const DzBanner: FC<DzBannerProps> = ({
  title = '',
  subtitle = '',
  variant = VARIANTS.DEFAULT,
}) => {
  const titleSection = title ? (
    <DzText
      className={cn(styles.title?.[variant])}
      textSize={TEXT_SIZES.XS}
      textType={TEXT_TYPES.LABEL}
      text={title}
      htmlFor={title}
    />
  ) : null;

  const subTitle = subtitle ? (
    <DzText
      textSize={TEXT_SIZES.XS}
      textType={TEXT_TYPES.P}
      text={subtitle}
    />
  ) : null;

  return (
    <div className={cn(styles.bannerContainer, styles?.[variant])}>
      <div className={cn(styles.textContainer)}>
        {titleSection}
        {subTitle}
      </div>
    </div>
  );
};

export default DzBanner;
