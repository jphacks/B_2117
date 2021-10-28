import React from 'react';
import {
  FormControl,
  Box,
  Button,
  Center,
  Stack,
  Select,
} from '@chakra-ui/react';
import { FormLabel  } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {
  years,
  periods,
  dayOfWeeks,
  periodOfTimes,
  degreePrograms,
  typeOfLessons,
} from '../data/lesson-form-option';

const SyllabusSearchForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (values: any) => {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve('');
      }, 3000);
    });
  };

  return (
    <Box w="70%" borderWidth="1px" borderRadius="lg" p="30px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel htmlFor="year">年度</FormLabel>
            <Select id="year" {...register('year')}>
              {years.map(year => (
                <option value={year.value}>{year.text}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="period">学期</FormLabel>
            <Select id="period" {...register('period')}>
              {periods.map(period => (
                <option value={period.value}>{period.text}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="day-of-week">曜日</FormLabel>
            <Select id="day-of-week" {...register('day-of-week')}>
              {dayOfWeeks.map(dayOfWeek => (
                <option value={dayOfWeek.value}>{dayOfWeek.text}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="periof-of-time">時限</FormLabel>
            <Select id="period-of-time" {...register('period-of-time')}>
              {periodOfTimes.map(periodOfTime => (
                <option value={periodOfTime.value}>{periodOfTime.text}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="degree-program">課程</FormLabel>
            <Select id="degree-program" {...register('degree-program')}>
              {degreePrograms.map(degreeProgram => (
                <option value={degreeProgram.value}>
                  {degreeProgram.text}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="type-of-lesson">開講形式</FormLabel>
            <Select id="type-of-lesson" {...register('type-of-lesson')}>
              {typeOfLessons.map(typeOfLesson => (
                <option value={typeOfLesson.value}>{typeOfLesson.text}</option>
              ))}
            </Select>
          </FormControl>
          <Center>
            <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
              検索
            </Button>
          </Center>
        </Stack>
      </form>
    </Box>
  );
};

export default SyllabusSearchForm;
