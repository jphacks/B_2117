import React from 'react';
import { Story, Meta } from '@storybook/react';
import Select, { Props } from './Select';

const options = [
  { value: 'option1', text: 'option1' },
  { value: 'option2', text: 'option2' },
  { value: 'option3', text: 'option3' },
];

export default {
  component: Select,
  title: 'Components/Atoms/Select',
} as Meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'select one!',
  options,
  width: '400px',
};

export const NoPlaceholder = Template.bind({});
NoPlaceholder.args = {
  options,
  width: '400px',
};
