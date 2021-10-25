import React from 'react';
import { Select as Selector } from '@chakra-ui/react';

export type Props = {
  id?: string;
  placeholder?: string;
  options: { value: string; text: string }[];
  width?: string;
};

const Select: React.FC<Props> = ({ id, placeholder, options, width }) => (
  <Selector id={id} placeholder={placeholder} w={width}>
    {options.map((option) => (
      <option value={option.value}>{option.text}</option>
    ))}
  </Selector>
);

export default Select;
