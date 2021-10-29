import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/layout';
import { useParams } from 'react-router';

export const CourseDetailPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState<any>({});
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `http://localhost:10000/search/syllabus/${params.year}/detail/${params.code}`,
      );

      const resJson = await res.json();
      setDetail(resJson);
      console.log(resJson);
    })();
  }, [params]);

  return (
    <>
      <Heading size="lg">
        {detail.name}
        <span>（{detail.year}年度）</span>
      </Heading>
      <Heading size="md">担当教員</Heading>
      {detail.instructors}
      <Heading size="md">日時・形式</Heading>
      {detail.class_period}
      <br />
      {detail.day} <br />
      {detail.place}
      <Heading size="md">概要</Heading>
      {detail.syllabus_contents?.summary}
      <Heading size="md">到達目標</Heading>
      {detail.syllabus_contents?.goals}
      <Heading size="md">授業計画</Heading>
      {detail.syllabus_contents?.schedule.map(
        ({ week, contents, assignments }: any) => {
          return (
            <>
              {week} <br />
              {contents}
              <br />
              {assignments}
            </>
          );
        },
      )}
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
      <Heading size="md">備考</Heading>
      {detail.syllabus_contents?.remarks}
      <Heading size="md">テキスト</Heading>
      {detail.syllabus_contents?.textbook?.map((name: any) => {
        return (
          <>
            {name} <br />
          </>
        );
      })}
      <Heading size="md">参考文献</Heading>
      {detail.syllabus_contents?.reference_book?.map(({ name }: any) => {
        return (
          <>
            {name} <br />
          </>
        );
      })}
      <Heading size="md">関連する科目</Heading>
    </>
  );
};
