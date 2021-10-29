import React, { useState, useEffect } from 'react';
import {
  Container,
  Heading,
  Box,
  Divider,
  Stack,
  Badge,
  Grid,
  GridItem,
  VStack,
  HStack,
  Flex,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { useParams } from 'react-router';
import { searchISBN, searchLentState } from '../api/book';
import { Book } from '../organisms/Book';

export const CourseDetailPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState<any>({});
  const params = useParams();

  useEffect(() => {
    (async () => {
      // get syllabus detail
      const res = await fetch(
        `http://localhost:10000/search/syllabus/${params.year}/detail/${params.code}`,
      );

      const syllabus = await res.json();
      setDetail(syllabus);
    })();
  }, [params]);

  return (
    <Container maxW="container.lg" mt="12" mb="12">
      <Stack spacing={4}>
        <div>
          <Heading size="lg">
            {detail.name}
            <span>（{detail.year}年度）</span>
          </Heading>
          <Flex mt="2">
            <Badge px="3" mr="2" colorScheme="blue">
              {detail.day}
            </Badge>
            <Badge px="3" mr="2" colorScheme="blue">
              {detail.class_period}
            </Badge>
            <Badge px="3" mr="2" colorScheme="blue">
              {detail.place}
            </Badge>
          </Flex>
        </div>
        <div>
          <Heading size="md">担当教員</Heading>
          <Flex w="60%" flexWrap="wrap">
            {detail?.instructors?.map((instructor: any) => (
              <span style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                {instructor}
              </span>
            ))}
          </Flex>
        </div>
        <div>
          <Heading size="md">概要</Heading>
          {detail.syllabus_contents?.summary}
        </div>
        <div>
          <Heading size="md">到達目標</Heading>
          {detail.syllabus_contents?.goals}
        </div>
        <div>
          <Heading size="md">授業計画</Heading>
          {detail.syllabus_contents?.schedule.map(
            ({ week, contents, assignments }: any) => {
              return (
                <Stack spacing={4} w="100%" mt="8px" mb="8px" boxShadow="sm">
                  <Box borderWidth="1px" p={3} borderRadius="lg">
                    <Badge borderRadius="full" px="3" colorScheme="teal" mb="1">
                      {week}回目
                    </Badge>
                    <br />
                    {contents}
                    <Divider />
                    <Box mt="5px" mb="5px" />
                    <Badge borderRadius="full" px="3" colorScheme="teal" mb="1">
                      授業時間外の学習
                    </Badge>
                    <br /> {assignments}
                  </Box>
                </Stack>
              );
            },
          )}
        </div>

        <div>
          <Heading size="md">成績評価基準</Heading>
          {detail.syllabus_contents?.evaluation?.map(
            ({ name, ratio, contents }: any) => {
              return (
                <>
                  {name}
                  <br />
                  {ratio} <br />
                  {contents} <br />
                </>
              );
            },
          )}
        </div>
        <div>
          <Heading size="md">備考</Heading>
          {detail.syllabus_contents?.remarks}
        </div>
        <div>
          {/* <Heading size="md">テキスト</Heading>
          {detail.syllabus_contents?.textbook?.map((name: any) => {
            return <Book bookInfo={name} />;
          })} */}
        </div>
        <div>
          {/*
      <Heading size="md">参考文献</Heading>
      {detail.syllabus_contents?.reference_book?.map(({ name }: any) => {
        return <Book bookInfo={name} />;
      })} */}
        </div>
        <div>
          <Heading size="md">関連する科目</Heading>
        </div>
      </Stack>
    </Container>
  );
};
