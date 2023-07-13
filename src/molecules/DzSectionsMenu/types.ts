import { DzButtonProps } from '../../atoms/DzButton';

export interface DzSectionMenuProps {
  sections?: SectionNavItem[];
  cta: SectionMenuCTA;
  onSelection?: Function;
  prefix?: string;
  usePrefix?: boolean;
  sticky?: boolean;
}

interface SectionMenuCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

export interface SectionNavItem {
  text: string;
  id: string;
}
