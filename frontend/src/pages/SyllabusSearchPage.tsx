import React, { useState } from 'react';
import {
  Heading,
  Container,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import SyllabusSearchForm from '../organisms/SyllabusSearchForm';
import { searchResultState } from '../state/searchResult';

export const SyllabusSearchPage: React.FC = () => {
  // const [results, setResults] = useState<any[]>([]);
  const [results, setResults] = useRecoilState(searchResultState);

  const onSubmit = async ({
    year,
    period,
    dayOfWeek,
    periodOfTime,
    degreeProgram,
    typeOfLesson,
    keyword,
  }: any) => {
    const res = await fetch(
      `http://localhost:10000/search/syllabus?year=${year}&period=${period}&dayOfWeek=${dayOfWeek}&periodOfTime=${periodOfTime}&degreeProgram=${degreeProgram}&typeOfLesson=${typeOfLesson}&keyword=${keyword}`,
      { mode: 'cors' },
    );
    const data = await res.json();
    setResults(data);
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
        <Table>
          <Thead>
            <Tr>
              <Th>科目コード・科目名</Th>
              <Th>担当教員</Th>
              <Th>曜日・時限</Th>
              <Th>校地</Th>
              <Th>単位</Th>
            </Tr>
            {results.map(
              ({
                code,
                name,
                year,
                instructors,
                day,
                classPeriod,
                num_credits: numCredits,
                place,
              }) => (
                <Tr>
                  <Td>
                    {code}
                    <br />
                    <Link to={`course/detail/${year}/${code}`}>{name}</Link>
                  </Td>
                  <Td>
                    {instructors.length === 0 && '-'}
                    {instructors.map((instructor: any) => (
                      <>
                        {instructor}
                        <br />
                      </>
                    ))}
                  </Td>
                  <Td>
                    {day}
                    <br />
                    {classPeriod}
                  </Td>
                  <Td>{place}</Td>
                  <Td>{numCredits}</Td>
                </Tr>
              ),
            )}
          </Thead>
        </Table>
      </Container>
    </>
  );
};
