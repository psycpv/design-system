import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzLayoutPanel , DzLayoutPanelProps} from '../../src/unstyled/DzLayoutPanel';

const meta: Meta = {
  title: 'Unstyled/Layouts/Panels/DzLayoutPanel',
  component: DzLayoutPanel,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzLayoutPanelProps> = args => <DzLayoutPanel {...args}/>

export const PrimaryDzLayoutPanel = Template.bind({});
PrimaryDzLayoutPanel.args = { };