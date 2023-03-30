import React, {
  FC,
  useMemo,
  useEffect,
  ImgHTMLAttributes,
  VideoHTMLAttributes,
} from 'react';
import { cn } from '../utils/classnames';
import { DzLink, DzLinkProps } from './DzLink';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

export const MEDIA_TYPES = {
  IMAGE: 'image',
  VIDEO: 'video',
};

export const MEDIA_TYPES_NAMES = [
  MEDIA_TYPES.IMAGE,
  MEDIA_TYPES.VIDEO,
] as const;

export type MediaType = typeof MEDIA_TYPES_NAMES[number];

export interface DzMediaProps extends ImgHTMLAttributes<HTMLImageElement> {
  type: MediaType;
  url?: string;
  ImgElement?: any;
  imgProps?: any;
  imgClass?: any;
  linkProps?: DzLinkProps;
  className?: any;
  videoProps?: any;
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
  className = '',
  videoProps = {},
}) => {
  useEffect(() => {}, []);
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
      <ImgElement className={cn(styles.imageMedia, imgClass)} {...imgProps} />
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

  const { source, options } = videoProps;

  const plyrProps = {
    source, // https://github.com/sampotts/plyr#the-source-setter
    options,
    // Direct props for inner video tag (mdn.io/video)
  };

  return (
    <div key="asd">
      <Plyr {...plyrProps} />
    </div>

    // <div className="plyr__video-embed" id="player">
    //   <iframe
    //     src="https://player.vimeo.com/video/812862186?h=d3919b94c1&loop=true&autoplay=true&muted=false&gesture=media&playsinline=true&byline=false&portrait=false&title=false&speed=true&transparent=false&controls=false&background=true"
    //     allowFullScreen
    //     allowTransparency
    //     allow="autoplay"
    //   ></iframe>
    // </div>
    // <video {...videoProps}>
    //   <source src="/media/cc0-videos/flower.webm" type="video/webm" />
    //   <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
    // </video>
  );
};

export default DzMedia;
