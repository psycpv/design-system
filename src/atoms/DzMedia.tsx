import React, { FC, useMemo, useEffect, ImgHTMLAttributes } from 'react';
import { cn } from '../utils/classnames';
import { DzLink, DzLinkProps } from './DzLink';
import Plyr from 'plyr-react';

export const MEDIA_TYPES = {
  IMAGE: 'image',
  VIDEO: 'video',
};

export const MEDIA_OBJECT_FIT = {
  CONTAIN: 'fitContain',
  COVER: 'fitCover',
  FILL: 'fitFill',
  NONE: 'fitNone',
  SCALE_DOWN: 'fitScaleDown',
};

export const MEDIA_ASPECT_RATIOS = {
  '16:9': '16:9',
  '4:3': '4:3',
};

export const MEDIA_MEDIA_OBJECT_FIT_NAMES = [
  MEDIA_OBJECT_FIT.CONTAIN,
  MEDIA_OBJECT_FIT.COVER,
  MEDIA_OBJECT_FIT.FILL,
  MEDIA_OBJECT_FIT.NONE,
  MEDIA_OBJECT_FIT.SCALE_DOWN,
] as const;

export const MEDIA_ASPECT_RATIOS_NAMES = [
  MEDIA_ASPECT_RATIOS['16:9'],
  MEDIA_ASPECT_RATIOS['4:3'],
] as const;

export const MEDIA_TYPES_NAMES = [
  MEDIA_TYPES.IMAGE,
  MEDIA_TYPES.VIDEO,
] as const;

export type MediaType = typeof MEDIA_TYPES_NAMES[number];
export type ObjectFitType = typeof MEDIA_MEDIA_OBJECT_FIT_NAMES[number];
export type AspectRatioType = typeof MEDIA_ASPECT_RATIOS_NAMES[number];

export interface DzMediaProps extends ImgHTMLAttributes<HTMLImageElement> {
  type: MediaType;
  url?: string;
  ImgElement?: any;
  imgProps?: any;
  imgClass?: any;
  linkProps?: DzLinkProps;
  className?: any;
  videoProps?: any;
  aspectRatio?: AspectRatioType;
  objectFit?: ObjectFitType;
}

const styles: any = {
  mediaContainer: `
    w-full
    bg-white-100
  `,
  fitCover: `
    object-cover
  `,
  fitContain: `
    object-contain
  `,
  fitFill:`
    object-fill
  `,
  fitNone:`
    object-none
  `,
  fitScaleDown:`
    object-scale-down
  `,
  '16:9': `
    !aspect-video
  `,
  '4:3': `
    !aspect-4/3
  `,
};
export const DzMedia: FC<DzMediaProps> = ({
  type,
  ImgElement,
  imgClass,
  imgProps = {},
  url = '',
  linkProps = {},
  className = '',
  videoProps = {},
  aspectRatio = MEDIA_ASPECT_RATIOS['16:9'],
  objectFit = MEDIA_OBJECT_FIT.COVER
}) => {
  useEffect(() => {}, []);
  const renderImage = useMemo(() => {
    if (!ImgElement) {
      return (
        <img
          className={cn(imgClass, styles[aspectRatio], styles[objectFit])}
          // Change this to eager on demand specially for header components
          loading={'lazy'}
          {...imgProps}
        />
      );
    }
    return (
      <ImgElement
        className={cn(styles[aspectRatio], imgClass)}
        {...imgProps}
      />
    );
  }, [ImgElement, imgProps, imgClass]);

  const LinkElem = useMemo(() => {
    if (url) {
      return (
        <DzLink
          {...linkProps}
          href="/"
          className={cn(styles.mediaContainer, className)}
        >
          {renderImage}
        </DzLink>
      );
    }
    return (
      <div className={cn(styles.mediaContainer, className)}>{renderImage}</div>
    );
  }, [url, renderImage]);

  if (type === MEDIA_TYPES.IMAGE) {
    return LinkElem;
  }

  if (type === MEDIA_TYPES.VIDEO) {
    return (
      <div>
        <Plyr {...videoProps} />
      </div>
    );
  }

  return null;
};

export default DzMedia;
