import React, { FC, useMemo, useRef } from 'react';
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
import useHover from '../../hooks/useHover';

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
  _key: string;
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
  data: FooterData;
  newsletterAction: Function;
  footerClass?: string;
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
    md:gap-[3.2rem]
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
  divider: `
    md:hidden
    bg-black-20
  `,
};
export const DzFooter: FC<DzFooterProps> = ({
  data,
  newsletterAction = () => null,
  footerClass = '',
}) => {
  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width < BREAKPOINTS.MD;
  }, [width]);
  const twitterHover = useRef<any>(null);
  const isTwitterHover = useHover(twitterHover);

  const facebookHover = useRef<any>(null);
  const isFacebookHover = useHover(facebookHover);

  const instagramHover = useRef<any>(null);
  const isInstagramHover = useHover(instagramHover);

  const weChatHover = useRef<any>(null);
  const isWeChatHover = useHover(weChatHover);

  const newsletterHover = useRef<any>(null);
  const isNewsletterHover = useHover(newsletterHover);

  const { links = [], socialMedia, copies } = data ?? {};
  const { weChat, instagram, twitter, facebook } = socialMedia ?? {
    weChat: '',
    instagram: '',
    twitter: '',
    facebook: '',
  };
  return (
    <footer className={cn(styles.footer, footerClass)}>
      <hr className={cn(styles.divider)} />
      <div className={cn(styles.bottomContainer)}>
        <div className={cn(styles.leftContainer)}>
          {copies?.rights ? (
            <DzText className={cn(styles.copyright)} text={copies?.rights} />
          ) : null}

          <div className={cn(styles.linksContainer)}>
            {links.map((linkData, position) => {
              const {
                _type,
                title = '',
                anchor = '',
                page = { url: '' },
                link = '',
                _key,
                mobileEnabled,
                desktopEnabled,
                newTab,
              } = linkData;
              if (isSmall && !mobileEnabled) return null;
              if (!isSmall && !desktopEnabled) return null;
              const url = _type === 'menuItemPage' ? page?.url : link;
              const urlWithAnchor = `${url}#${anchor}`;
              return (
                <DzLink
                  id={_key}
                  key={`${_key}-${position}`}
                  href={urlWithAnchor}
                  openNewTab={newTab}
                >
                  {title}
                </DzLink>
              );
            })}
          </div>
        </div>
        <div className={cn(styles.socialContainer)}>
          {twitter ? (
            <DzLink href={twitter} ref={twitterHover} openNewTab>
              <BoldTwitterIcon fill={isTwitterHover ? '#757575' : 'black'} />
            </DzLink>
          ) : null}

          {facebook ? (
            <DzLink href={facebook} ref={facebookHover} openNewTab>
              <BoldFacebookIcon fill={isFacebookHover ? '#757575' : 'black'} />
            </DzLink>
          ) : null}
          {instagram ? (
            <DzLink href={instagram} ref={instagramHover} openNewTab>
              <BoldInstagramIcon
                fill={isInstagramHover ? '#757575' : 'black'}
              />
            </DzLink>
          ) : null}

          {weChat ? (
            <DzLink href={weChat} ref={weChatHover} openNewTab>
              <BoldWeChatIcon fill={isWeChatHover ? '#757575' : 'black'} />
            </DzLink>
          ) : null}

          <div onClick={() => newsletterAction()} ref={newsletterHover}>
            <BoldNewsletterIcon
              fill={isNewsletterHover ? '#757575' : 'black'}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DzFooter;