import React from 'react';
import { FormLabel } from '@chakra-ui/react';
import Select from '../atoms/Select';

export type Props = {
  htmlFor?: string;
  label: string;
  placeholder?: string;
  options: { value: string; text: string }[];
  width?: string;
};

const SelectWithLabel: React.FC<Props> = ({ htmlFor, label, ...args }) => (
  <>
    <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
    <Select {...{ ...{ id: htmlFor }, ...args }} />
  </>
);

export default SelectWithLabel;
