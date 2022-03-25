import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GetEmptyAvatar, Props } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: GetEmptyAvatar,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <GetEmptyAvatar {...args} />;

export const Default = Template.bind({});

Default.args = {};
