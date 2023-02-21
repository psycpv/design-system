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

const ALERT_VARIANT = {
  DEFAULT: 'mDefault',
  DARK: 'mDark',
  SUCCESS: 'mSuccess',
  ERROR: 'mError',
};

const TYPES = {
  MESSAGE: 'messageType',
  ALERT: 'alertType',
};
export const ALERT_VARIANT_NAMES = [
  ALERT_VARIANT.DEFAULT,
  ALERT_VARIANT.DARK,
  ALERT_VARIANT.SUCCESS,
  ALERT_VARIANT.ERROR,
] as const;
export const BANNER_TYPES_NAMES = [TYPES.MESSAGE, TYPES.ALERT] as const;
export const BANNER_VARIANT_NAMES = [
  VARIANTS.DEFAULT,
  VARIANTS.SUCCESS,
  VARIANTS.ALERT,
  VARIANTS.WARNING,
  VARIANTS.ERROR,
] as const;
export type BannerType = typeof BANNER_TYPES_NAMES[number];
export type BannerVariant = typeof BANNER_VARIANT_NAMES[number];
export type BannerAlertVariant = typeof ALERT_VARIANT_NAMES[number];

export interface DzBannerProps {
  title: string;
  subtitle?: string;
  variant?: BannerVariant;
  type?: BannerType;
  alertType?: BannerAlertVariant;
}

const styles: any = {
  mDefault: `
    bg-black-10
  `,
  mDark: `
    bg-black-100
  `,
  mSuccess: `
    bg-green-100
  `,
  mError: `
    bg-red-100
  `,
  bannerContainer: `
    flex
    p-5
  `,
  textContainer: `
    flex
  `,
  messageType: `
    flex-col
  `,
  alertType: `
    flex-row
    justify-center
    py-2.5
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
    warning: `
      text-yellow-40
    `,
    error: `
      text-red-100
    `,
    mDefault: `
      text-black-100
    `,
    mDark: `
      text-white-100
    `,
    mSuccess: `
      text-white-100
    `,
    mError: `
      text-white-100
    `,
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
  warning: `
    bg-yellow-10
  `,
  error: `
    bg-red-60
  `,
};
export const DzBanner: FC<DzBannerProps> = ({
  title = '',
  subtitle = '',
  variant = VARIANTS.DEFAULT,
  type = TYPES.MESSAGE,
  alertType = ALERT_VARIANT.DEFAULT,
}) => {
  const alertTypeStyles = type === TYPES.ALERT ? styles?.[alertType] : '';
  const alertTitleStyles =
    type === TYPES.ALERT ? styles?.title?.[alertType] : '';

  const titleSection = title ? (
    <DzText
      className={cn(styles.title?.[variant], alertTitleStyles)}
      textSize={TEXT_SIZES.XS}
      textType={TEXT_TYPES.LABEL}
      text={title}
      htmlFor={title}
    />
  ) : null;

  const subTitle =
    subtitle && type === TYPES.MESSAGE ? (
      <DzText
        textSize={TEXT_SIZES.XS}
        textType={TEXT_TYPES.P}
        text={subtitle}
      />
    ) : null;

  return (
    <div
      className={cn(
        styles.bannerContainer,
        styles?.[variant],
        styles?.[type],
        alertTypeStyles
      )}
    >
      <div className={cn(styles.textContainer)}>
        {titleSection}
        {subTitle}
      </div>
    </div>
  );
};

export default DzBanner;
