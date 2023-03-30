import React, { FC, useMemo } from 'react';
import { cn } from '../utils/classnames';
import { DzLink, DzLinkProps } from './DzLink';

export const MEDIA_TYPES = {
  IMAGE: 'image',
  VIDEO: 'video',
};

export const MEDIA_TYPES_NAMES = [
  MEDIA_TYPES.IMAGE,
  MEDIA_TYPES.VIDEO,
] as const;

export type MediaType = typeof MEDIA_TYPES_NAMES[number];

export interface DzMediaProps {
  type: MediaType;
  url?: string;
  ImgElement?: any;
  imgProps?: any;
  imgClass?: any;
  linkProps?: DzLinkProps;
  className?: any;
}
const styles: any = {
  mediaContainer: `
    w-full
    bg-white-100
  `,
  imageMedia: `
    !aspect-video
    object-contain
  `,
};
export const DzMedia: FC<DzMediaProps> = ({
  type,
  ImgElement,
  imgClass,
  imgProps = {},
  url = '',
  linkProps = {},
  className = ''
}) => {
  const renderImage = useMemo(() => {
    if (!ImgElement) {
      return (
        <img
          className={cn(imgClass, styles.imageMedia)}
          // Change this to eager on demand specially for header components
          loading={'lazy'}
          {...imgProps}
        />
      );
    }
    return (
      <ImgElement
        className={cn(styles.imageMedia, imgClass)}
        {...imgProps}
      />
    );
  }, [ImgElement, imgProps, imgClass]);

  const LinkElem = useMemo(() => {
    if (url) {
      return (
        <DzLink {...linkProps} href="/" className={cn(styles.mediaContainer, className)}>
          {renderImage}
        </DzLink>
      );
    }
    return <div className={cn(styles.mediaContainer, className)}>{renderImage}</div>;
  }, [url, renderImage]);

  if (type === MEDIA_TYPES.IMAGE) {
    return LinkElem;
  }

  return (
    <video controls width="250" height="200" muted>
      <source src="/media/cc0-videos/flower.webm" type="video/webm" />
      <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
      Download the
      <a href="/media/cc0-videos/flower.webm">WEBM</a>
      or
      <a href="/media/cc0-videos/flower.mp4">MP4</a>
      video.
    </video>
  );
};

export default DzMedia;
