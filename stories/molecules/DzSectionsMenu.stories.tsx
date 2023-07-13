import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzSectionMenu,
  DzSectionMenuProps,
} from '../../src/molecules/DzSectionsMenu';
import { data } from '../../constants/mocks/DzSectionMenu';

const meta: Meta = {
  title: 'Molecules/Content/DzSectionMenu',
  component: DzSectionMenu,
  argTypes: {
    onSelection: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const PREFIX = 'artist-landing-';
const Template: Story<DzSectionMenuProps> = args => {
  const { usePrefix } = args;
  if (usePrefix) {
    return (
      <div>
        <DzSectionMenu {...args} />
        <section id={`${PREFIX}survey`} className="w-full h-80 bg-red-10 my-5">
          survey
        </section>
        <section
          id={`${PREFIX}available-works`}
          className="w-full h-80 bg-red-10 my-5"
        >
          available-works
        </section>
        <section
          id={`${PREFIX}exhibitions`}
          className="w-full h-80 bg-red-10 my-5"
        >
          exhibitions
        </section>
        <section id={`${PREFIX}guide`} className="w-full h-80 bg-red-10 my-5">
          guide
        </section>
        <section
          id={`${PREFIX}biography`}
          className="w-full h-80 bg-red-10 my-5"
        >
          biography
        </section>
        <section
          id={`${PREFIX}selected-press`}
          className="w-full h-80 bg-red-10"
        >
          selected-press
        </section>
        <section id={`${PREFIX}books`} className="w-full h-80 bg-red-10 my-5">
          books
        </section>
      </div>
    );
  } else {
    return <DzSectionMenu {...args} />;
  }
};

export const sectionMenu = Template.bind({});
sectionMenu.args = data;

export const sectionMenuExample = Template.bind({});
sectionMenuExample.args = { ...data, prefix: PREFIX, usePrefix: true };
