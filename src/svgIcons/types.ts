import { ReactNode, RefObject, SVGProps } from 'react';

export interface IconProps extends SVGProps<any> {
  ariaTitle?: string;
  children?: ReactNode;
  fill?: string;
  ref?: RefObject<SVGSVGElement>;
}
