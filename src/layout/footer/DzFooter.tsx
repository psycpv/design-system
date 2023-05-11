import React, { FC, useMemo } from 'react';
import { DzText } from '../../atoms';
import { DzLink } from '../../atoms';
import { cn } from '../../utils/classnames';
import BoldWeChatIcon from '../../svgIcons/boldWeChat';
import BoldTwitterIcon from '../../svgIcons/boldTwitter';
import BoldFacebookIcon from '../../svgIcons/boldFacebook';
import BoldInstagramIcon from '../../svgIcons/boldInstagram';
import BoldNewsletterIcon from '../../svgIcons/boldNewsletter';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';

interface FooterData {
  copies: Copies;
  links: Link[];
  socialMedia: SocialMedia;
}

interface SocialMedia {
  _type: string;
  weChat: string;
  instagram: string;
  twitter: string;
  facebook: string;
}

interface Link {
  _type: string;
  newTab: boolean;
  mobileEnabled: boolean;
  desktopEnabled: boolean;
  link?: string;
  title: string;
  anchor?: string;
  page?: Page;
}

interface Page {
  url: string;
}

interface Copies {
  rights: string;
}

export interface DzFooterProps {
  data: any;
  newsletterAction: Function;
}

const styles: any = {
  footer: `
    bg-white-100
  `,
  linksContainer: `
    w-full
    flex
    gap-5
    justify-center
    md:justify-start
  `,
  socialContainer: `
    flex
    md:gap-[3.75rem]
    w-full
    md:justify-end
    pt-2
    md:pt-0
    justify-between
  `,
  bottomContainer: `
    px-5
    py-[2.125rem]
    flex
    flex-col
    gap-5
    md:flex-row
    justify-between
  `,
  copyright: `
    w-full
    min-w-fit
    text-center
    md:w-fit
    md:text-left
  `,
  leftContainer: `
    w-full
    flex
    flex-col
    md:flex-row
    gap-5
  `,
};
export const DzFooter: FC<DzFooterProps> = ({
  data = {},
  newsletterAction = () => null,
}) => {
  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width < BREAKPOINTS.MD;
  }, [width]);

  const { links = [], socialMedia = {}, copies = {} } = data;
  const { weChat, instagram, twitter, facebook } = socialMedia;
  return (
    <footer className={cn(styles.footer)}>
      <div className={cn(styles.bottomContainer)}>
        <div className={cn(styles.leftContainer)}>
          <DzText className={cn(styles.copyright)} text={copies?.rights} />
          <div className={cn(styles.linksContainer)}>
            {links.map(linkData => {
              const {
                _type,
                title = '',
                anchor = '',
                page = {},
                link = '',
                mobileEnabled,
                desktopEnabled,
                newTab,
              } = linkData;
              if (isSmall && !mobileEnabled) return null;
              if (!isSmall && !desktopEnabled) return null;
              const url = _type === 'menuItemPage' ? page?.url : link;
              const urlWithAnchor = `${url}#${anchor}`;
              return (
                <DzLink href={urlWithAnchor} openNewTab={newTab}>
                  {title}
                </DzLink>
              );
            })}
          </div>
        </div>
        <div className={cn(styles.socialContainer)}>
          {twitter ? (
            <DzLink href={twitter} openNewTab>
              <BoldTwitterIcon />
            </DzLink>
          ) : null}

          {facebook ? (
            <DzLink href={facebook} openNewTab>
              <BoldFacebookIcon />
            </DzLink>
          ) : null}
          {instagram ? (
            <DzLink href={instagram} openNewTab>
              <BoldInstagramIcon />
            </DzLink>
          ) : null}

          {weChat ? (
            <DzLink href={weChat} openNewTab>
              <BoldWeChatIcon />
            </DzLink>
          ) : null}

          <BoldNewsletterIcon onClick={() => newsletterAction()} />
        </div>
      </div>
    </footer>
  );
};

export default DzFooter;
