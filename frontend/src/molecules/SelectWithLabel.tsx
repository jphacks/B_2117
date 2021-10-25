import React from 'react';
import { FormLabel } from '@chakra-ui/react';
import Select from '../atoms/Select';

export type Props = {
  label: string;
  placeholder?: string;
  options: { value: string; text: string }[];
  width?: string;
};

const SelectWithLabel: React.FC<Props> = ({ label, ...args }) => (
  <>
    <FormLabel>{label}</FormLabel>
    <Select {...args} />
  </>
);

export default SelectWithLabel;
