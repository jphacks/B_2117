import React from 'react';
import { Story, Meta } from '@storybook/react';
import SyllabusSearchForm from './SyllabusSearchForm';

export default {
  component: SyllabusSearchForm,
  title: 'Components/Organisms/SyllabusSearchForm',
} as Meta;

const Template: Story<{}> = (args) => <SyllabusSearchForm {...args} />;

export const Form = Template.bind({});
