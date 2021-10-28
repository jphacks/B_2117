import React from 'react';
import { FormControl, Box, Button, Center, Stack } from '@chakra-ui/react';
import SelectWithLabel from '../molecules/SelectWithLabel';
import {
  years,
  periods,
  dayOfWeeks,
  periodOfTimes,
  degreePrograms,
  majors,
  TypeOfLessons,
} from '../data/lesson-form-option';

const SyllabusSearchForm: React.FC = () => {
  return (
    <Box w="70%" borderWidth="1px" borderRadius="lg" p="30px">
      <form>
        <Stack spacing={3}>
          <FormControl>
            <SelectWithLabel label="年度" options={years} />
          </FormControl>
          <FormControl>
            <SelectWithLabel label="期間" options={periods} />
          </FormControl>
          <FormControl>
            <SelectWithLabel label="曜日" options={dayOfWeeks} />
          </FormControl>
          <FormControl>
            <SelectWithLabel label="時限" options={periodOfTimes} />
          </FormControl>
          <FormControl>
            <SelectWithLabel label="課程" options={degreePrograms} />
          </FormControl>
          <FormControl>
            <SelectWithLabel label="開講形式" options={TypeOfLessons} />
          </FormControl>
          <Center>
            <Button type="submit" colorScheme="blue">
              検索
            </Button>
          </Center>
        </Stack>
      </form>
    </Box>
  );
};

export default SyllabusSearchForm;
