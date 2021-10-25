import React from 'react';
import { Story, Meta } from '@storybook/react';
import SelectWithLabel, { Props } from './SelectWithLabel';

const options = [
  { value: 'option1', text: 'option1' },
  { value: 'option2', text: 'option2' },
  { value: 'option3', text: 'option3' },
];

export default {
  component: SelectWithLabel,
  title: 'Components/Molecules/SelectWithLabel',
} as Meta;

const Template: Story<Props> = (args) => <SelectWithLabel {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'Options',
  placeholder: 'select one!',
  options,
  width: '400px',
};

export const NoPlaceholder = Template.bind({});
NoPlaceholder.args = {
  label: 'Options',
  options,
  width: '400px',
};
