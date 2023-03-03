import React, { FC } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { IconProps } from './types';

export const Icon = styled.svg<IconProps>`
 relative
`;

/** Compatibility component used to normalize paths between react dom and react native */
export const Path: FC<JSX.IntrinsicElements['path']> = ({ ...props }) => {
  return <path {...props} />;
};

/** Compatibility component used to normalize titles between react dom and react native */
export const Title: FC<JSX.IntrinsicElements['title']> = ({ ...props }) => {
  return <title {...props} />;
};

/** Compatibility component used to normalize svg groups between react dom and react native */
export const G: FC<JSX.IntrinsicElements['g']> = ({ ...props }) => {
  return <g {...props} />;
};

/** Compatibility component used to normalize svg circles between react dom and react native */
export const Circle: FC<JSX.IntrinsicElements['circle']> = ({ ...props }) => {
  return <circle {...props} />;
};

/** Compatibility component used to normalize svg rects between react dom and react native */
export const Rect: FC<JSX.IntrinsicElements['rect']> = ({ ...props }) => {
  return <rect {...props} />;
};

/** DzSvg component, used to handle icons as default svg html elements */
export const DzSvg: FC<IconProps> = props => {
  const {
    children,
    fill = 'none',
    fillRule = 'evenodd',
    d = '',
    clipRule = 'evenodd',
    className = '',
    ariaTitle = '',
  } = props;
  const elementId = uuidv4();
  const renderChildren = children ?? (
    <Path clipRule={clipRule} d={d} fill={fill} fillRule={fillRule} />
  );
  return (
    <Icon
      {...props}
      role="img"
      // https://www.w3.org/TR/html-aria/#docconformance
      aria-describedby={elementId}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={elementId}>{ariaTitle}</title>
      {renderChildren}
    </Icon>
  );
};

DzSvg.displayName = 'DzSvg';
DzSvg.defaultProps = {
  fill: 'none',
};
