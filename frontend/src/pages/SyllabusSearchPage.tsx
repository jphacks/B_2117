import React, { useState } from 'react';
import { Heading, Container } from '@chakra-ui/react';
import SyllabusSearchForm from '../organisms/SyllabusSearchForm';

export const SyllabusSearchPage: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const onSubmit = async ({
    year,
    period,
    dayOfWeek,
    periodOfTime,
    degreeProgram,
    typeOfLesson,
  }: any) => {
    console.log(
      `http://localhost:10000/search/syllabus?year=${year}&period=${period}&dayOfWeek=${dayOfWeek}&periofOfTime=${periodOfTime}&degreeProgram=${degreeProgram}&typeOfLesson=${typeOfLesson}`,
    );
    const res = await fetch(
      `http://localhost:10000/search/syllabus?year=${year}&period=${period}&dayOfWeek=${dayOfWeek}&periodOfTime=${periodOfTime}&degreeProgram=${degreeProgram}&typeOfLesson=${typeOfLesson}`,
      { mode: 'cors' },
    );
    const j = await res.json();
    setResults(j);
    console.log(j);
  };

  return (
    <>
      <Container maxW="container.lg" mt="30px" mb="30px">
        <Heading as="h2" size="md" mb="5px">
          科目検索
        </Heading>

        <SyllabusSearchForm onSubmit={onSubmit} />
      </Container>
      <Container maxW="container.lg">
        <Heading as="h2" size="md" mb="5px">
          検索結果
        </Heading>
        <div>
          {results.map(result => (
            <div>{JSON.stringify(result)}</div>
          ))}
        </div>
      </Container>
    </>
  );
};
