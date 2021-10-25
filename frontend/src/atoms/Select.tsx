import React from 'react';
import { Select as Selector } from '@chakra-ui/react';

export type Props = {
  placeholder?: string;
  options: { value: string; text: string }[];
  width?: string;
};

const Select: React.FC<Props> = ({ placeholder, options, width }) => (
  <Selector placeholder={placeholder} w={width}>
    {options.map((option) => (
      <option value={option.value}>{option.text}</option>
    ))}
  </Selector>
);

export default Select;
