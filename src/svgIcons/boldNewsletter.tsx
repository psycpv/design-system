import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const BoldNewsletter: FC<IconProps> = ({
  width = 21,
  height = 13,
  fill = 'black',
  viewBox = '0 0 21 13',
  className = '',
  ...rest
}) => {
  return (
    <DzSvg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill={fill}
      d="M1.07991 0.5C0.946986 0.5 0.839844 0.606975 0.839844 0.740068V0.980136L10.9198 8.54012L20.9998 0.980136V0.740068C20.9998 0.607142 20.8928 0.5 20.7597 0.5H1.07991ZM0.839844 2.17995V12.2599C0.839844 12.3929 0.946819 12.5 1.07991 12.5H20.7599C20.8928 12.5 20.9999 12.393 20.9999 12.2599V2.17995L11.205 9.52222V9.52239C11.0355 9.64728 10.8045 9.64728 10.6351 9.52239L0.84011 2.17969L0.839844 2.17995Z"
      {...rest}
      ariaTitle="Newsletter Icon"
    />
  );
};

export default BoldNewsletter;
