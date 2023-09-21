import { DzButtonProps, DzLinkProps } from '../../atoms';

export interface DzSectionMenuProps {
  sections?: SectionNavItem[];
  cta?: SectionMenuCTA;
  onSelection?: Function;
  prefix?: string;
  usePrefix?: boolean;
  sticky?: boolean;
  useLinks?: boolean;
  linksProps?: Partial<DzLinkProps>;
  className?: string;
}

interface SectionMenuCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

export interface SectionNavItem {
  text: string;
  id: string;
  url?: string;
}
