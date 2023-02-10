import React, { FC } from 'react';

import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const Menu: FC<IconProps> = ({
  width = 18,
  height = 18,
  fill = 'black',
  viewBox = '0 0 18 18',
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
      d="M2 4.5C2 4.22386 2.22386 4 2.5 4H14.8333C15.1095 4 15.3333 4.22386 15.3333 4.5C15.3333 4.77614 15.1095 5 14.8333 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 9.5C2 9.22386 2.22386 9 2.5 9H14.8333C15.1095 9 15.3333 9.22386 15.3333 9.5C15.3333 9.77614 15.1095 10 14.8333 10H2.5C2.22386 10 2 9.77614 2 9.5ZM2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H14.8333C15.1095 15 15.3333 14.7761 15.3333 14.5C15.3333 14.2239 15.1095 14 14.8333 14H2.5Z"
      {...rest}
      ariaTitle="Menu Icon"
    />
  );
};

export default Menu;
