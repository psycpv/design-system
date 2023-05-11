import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const BoldFacebook: FC<IconProps> = ({
  width = 10,
  height = 17,
  fill = 'black',
  viewBox = '0 0 10 17',
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
      d="M9.05195 0.5H6.65195C5.59109 0.5 4.57367 0.921427 3.82353 1.67157C3.07338 2.42172 2.65195 3.43913 2.65195 4.5V6.9H0.251953V10.1H2.65195V16.5H5.85195V10.1H8.25195L9.05195 6.9H5.85195V4.5C5.85195 4.28783 5.93624 4.08434 6.08627 3.93431C6.2363 3.78429 6.43978 3.7 6.65195 3.7H9.05195V0.5Z"
      {...rest}
      ariaTitle="Facebook Icon"
    />
  );
};

export default BoldFacebook;
