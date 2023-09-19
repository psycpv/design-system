import React, { FC } from 'react';
import {
  DzText,
  DzMedia,
  TEXT_TYPES,
  TEXT_SIZES,
  MEDIA_OBJECT_FIT,
  ObjectPositionType,
  MEDIA_ASPECT_RATIOS,
} from '../../../atoms';
import { CardMediaData, CardMediaProps } from './types';
import { styles } from './styles';
import { cn } from '../../../utils/classnames';
import { slugify } from '../../../utils';

export const CardMedia: FC<CardMediaProps> = ({ data, onClickImage }) => {
  const {
    id,
    media,
    description,
    portableTextDescription,
  } = data as CardMediaData;
  return (
    <div id={id} className={cn(styles.cardContainer)}>
      <DzMedia
        imgClass={cn(styles.mediaImg)}
        objectFit={MEDIA_OBJECT_FIT.COVER}
        objectPosition={ObjectPositionType.CENTER}
        aspectRatio={MEDIA_ASPECT_RATIOS['16:9']}
        {...media}
        imgProps={{
          id: `CardMedia-${slugify(media?.imgProps?.alt) || ''}`,
          ...(media?.imgProps || {}),
          onClick: () => onClickImage?.(data),
        }}
      />
      {description ? (
        <DzText
          className={cn(styles.media.descriptionText)}
          textType={TEXT_TYPES.P}
          textSize={TEXT_SIZES.XS}
          text={description}
        />
      ) : null}
      {portableTextDescription ? portableTextDescription : null}
    </div>
  );
};

export default CardMedia;
