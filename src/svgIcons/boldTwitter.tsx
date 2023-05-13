import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const BoldTwitter: FC<IconProps> = ({
  width = 21,
  height = 17,
  fill = 'black',
  viewBox = '0 0 21 17',
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
      d="M20.2517 0.508966C19.3978 1.11128 18.4524 1.57195 17.4518 1.87324C16.9148 1.25576 16.2011 0.818104 15.4072 0.619469C14.6134 0.420833 13.7777 0.470799 13.0131 0.762607C12.2486 1.05442 11.5921 1.57399 11.1325 2.25105C10.6729 2.92812 10.4323 3.73001 10.4432 4.54827V5.43995C8.87623 5.48058 7.32349 5.13305 5.92332 4.42829C4.52315 3.72354 3.319 2.68345 2.41812 1.40065C2.41812 1.40065 -1.14859 9.42575 6.87652 12.9925C5.04013 14.239 2.85251 14.864 0.634766 14.7758C8.65987 19.2342 18.4683 14.7758 18.4683 4.52152C18.4675 4.27315 18.4436 4.02539 18.397 3.78143C19.3071 2.88395 19.9493 1.75082 20.2517 0.508966Z"
      {...rest}
      ariaTitle="Twitter Icon"
    />
  );
};

export default BoldTwitter;
