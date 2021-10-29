import React from 'react';
import { Heading, Container } from '@chakra-ui/react';
import SyllabusSearchForm from '../organisms/SyllabusSearchForm';

export const SyllabusSearchPage: React.FC = () => (
  <>
    <Container maxW="container.lg" mt="30px" mb="30px">
      <Heading as="h2" size="md" mb="5px">
        科目検索
      </Heading>

      <SyllabusSearchForm />
    </Container>
    <Container maxW="container.lg">
      <Heading as="h2" size="md" mb="5px">
        検索結果
      </Heading>
    </Container>
  </>
);
