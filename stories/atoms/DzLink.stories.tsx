import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzLink,
  DzLinkProps,
  LINK_VARIANTS_NAMES,
  LINK_VARIANTS,
  TEXT_LINK_SIZES,
  TEXT_LINK_SIZES_NAMES,
} from '../../src/atoms/DzLink';

const meta: Meta = {
  title: 'Atoms/Controls/DzLink',
  component: DzLink,
  argTypes: {
    href: { type: 'string', defaultValue: '/' },
    variant: { control: 'select', options: LINK_VARIANTS_NAMES },
    textLinkSize: { control: 'select', options: TEXT_LINK_SIZES_NAMES },
    linkProps: { control: { type: null } },
    className: { control: { type: null } },
    router: { control: { type: null } },
    LinkElement: { control: { type: null } },
    useRoute: { control: { type: null } },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzLinkProps> = args => <DzLink {...args}>Link</DzLink>;

export const NavLink = Template.bind({});
NavLink.args = {};

export const TextLinkExtraSmall = Template.bind({});
TextLinkExtraSmall.args = {
  variant: LINK_VARIANTS.TEXT,
  textLinkSize: TEXT_LINK_SIZES.XS,
};

export const TextLinkSmall = Template.bind({});
TextLinkSmall.args = { variant: LINK_VARIANTS.TEXT };

export const TextLinkMedium = Template.bind({});
TextLinkMedium.args = {
  variant: LINK_VARIANTS.TEXT,
  textLinkSize: TEXT_LINK_SIZES.MD,
};

export const TextLinkLarge = Template.bind({});
TextLinkLarge.args = {
  variant: LINK_VARIANTS.TEXT,
  textLinkSize: TEXT_LINK_SIZES.LG,
};

export const TextLinkExtraLarge = Template.bind({});
TextLinkExtraLarge.args = {
  variant: LINK_VARIANTS.TEXT,
  textLinkSize: TEXT_LINK_SIZES.XL,
};

export const LinkWithRouter = Template.bind({});
LinkWithRouter.args = {
  variant: LINK_VARIANTS.TEXT,
  textLinkSize: TEXT_LINK_SIZES.MD,
  router: {
    asPath: '/',
  },
  href: '/',
  useRoute: true,
};
