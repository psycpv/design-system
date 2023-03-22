import React, { FC, SourceHTMLAttributes, useMemo } from 'react';
import { cn } from '../utils/classnames';

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
  ImgElement?: any;
  imgProps?: any;
  imgClass?: any;
  pictureClass?: any;
  sourceProps?: SourceHTMLAttributes<HTMLSourceElement>;
}
const styles: any = {
  mediaContainer: `
    w-full
    bg-white-100
    aspect-video
  `,
  imageMedia:`
    aspect-video
    object-contain
  `
};
export const DzMedia: FC<DzMediaProps> = ({
  type,
  ImgElement,
  imgClass,
  pictureClass,
  imgProps = {},
  sourceProps = {},
}) => {
  const renderImage = useMemo(() => {
    if (!ImgElement) {
      return (
        <picture className={cn(pictureClass)}>
          <source {...sourceProps} />
          <img className={cn(styles.imageMedia, imgClass)} loading={'lazy'} {...imgProps} />
        </picture>
      );
    }
    return <ImgElement className={cn(styles.imageMedia, imgClass)} {...imgProps} />;
  }, [ImgElement]);
  if (type === MEDIA_TYPES.IMAGE) {
    return <div className={cn(styles.mediaContainer)}>{renderImage}</div>;
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
