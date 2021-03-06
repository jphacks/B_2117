import React from 'react';
import { Story, Meta } from '@storybook/react';
import SyllabusSearchForm, { Props } from './SyllabusSearchForm';

export default {
  component: SyllabusSearchForm,
  title: 'Components/Organisms/SyllabusSearchForm',
} as Meta;

const Template: Story<Props> = args => <SyllabusSearchForm {...args} />;

export const Form = Template.bind({});
Form.args = {
  onSubmit: (data: any) => console.log(data),
};
