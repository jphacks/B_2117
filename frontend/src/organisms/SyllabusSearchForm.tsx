import React, { useState } from 'react';
import {
  FormControl,
  Box,
  Button,
  Center,
  Stack,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {
  years,
  periods,
  dayOfWeeks,
  periodOfTimes,
  degreePrograms,
  typeOfLessons,
} from '../data/lesson-form-option';

export type Props = {
  onSubmit: any;
};
const SyllabusSearchForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" p="30px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid columns={2} spacing={8} mb="30px">
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
              <Select id="day-of-week" {...register('dayOfWeek')}>
                {dayOfWeeks.map(dayOfWeek => (
                  <option value={dayOfWeek.value}>{dayOfWeek.text}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="periof-of-time">時限</FormLabel>
              <Select id="period-of-time" {...register('periodOfTime')}>
                {periodOfTimes.map(periodOfTime => (
                  <option value={periodOfTime.value}>
                    {periodOfTime.text}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="degree-program">課程</FormLabel>
              <Select id="degree-program" {...register('degreeProgram')}>
                {degreePrograms.map(degreeProgram => (
                  <option value={degreeProgram.value}>
                    {degreeProgram.text}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type-of-lesson">開講形式</FormLabel>
              <Select id="type-of-lesson" {...register('typeOfLesson')}>
                {typeOfLessons.map(typeOfLesson => (
                  <option value={typeOfLesson.value}>
                    {typeOfLesson.text}
                  </option>
                ))}
              </Select>
            </FormControl>
          </SimpleGrid>
          <Center>
            <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
              検索
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
};

export default SyllabusSearchForm;
