import React from 'react';
import { FormControl, Box, Button, Center, Stack } from '@chakra-ui/react';
import SelectWithLabel from '../molecules/SelectWithLabel';

const SyllabusSearchForm: React.FC = () => {
  return (
    <Box w="70%" borderWidth="1px" borderRadius="lg" p="30px">
      <form>
        <Stack spacing={3}>
          <FormControl>
            <SelectWithLabel
              label="年度"
              options={[
                { text: '2021', value: '2021' },
                { text: '2020', value: '2020' },
                { text: '2019', value: '2019' },
                { text: '2018', value: '2018' },
                { text: '2017', value: '2017' },
              ]}
            />
          </FormControl>
          <FormControl>
            <SelectWithLabel
              label="期間"
              options={[
                { text: '全て', value: 'all' },
                { text: '春', value: 'Spring' },
                { text: '秋', value: 'Autumn' },
              ]}
            ></SelectWithLabel>
          </FormControl>
          <FormControl>
            <SelectWithLabel
              label="曜日"
              options={[
                { text: '全て', value: 'all' },
                { text: '月', value: 'Monday' },
                { text: '火', value: 'Tuesday' },
                { text: '水', value: 'Wednesday' },
                { text: '木', value: 'Thursday' },
                { text: '金', value: 'Friday' },
                { text: '土', value: 'Saturday' },
              ]}
            ></SelectWithLabel>
          </FormControl>
          <FormControl>
            <SelectWithLabel
              label="時限"
              options={[
                { text: '全て', value: 'all' },
                { text: '1限', value: '1' },
                { text: '2限', value: '2' },
                { text: '3限', value: '3' },
                { text: '4限', value: '4' },
                { text: '5限', value: '5' },
                { text: '6限', value: '6' },
                { text: '7限', value: '7' },
                { text: '8限', value: '8' },
              ]}
            ></SelectWithLabel>
          </FormControl>
          <FormControl>
            <SelectWithLabel
              label="課程"
              options={[
                { text: '全て', value: 'all' },
                { text: '学部科目', value: 'undergraduate' },
                { text: '大学院科目', value: 'graduate' },
                { text: '一貫制大学院科目', value: 'combinedDoctral' },
                { text: '専門職大学院科目', value: 'professionalGraduate' },
                { text: 'その他科目', value: 'others' },
              ]}
            ></SelectWithLabel>
          </FormControl>
          <FormControl>
            <SelectWithLabel
              label="開講形式"
              options={[
                { text: '全て', value: 'all' },
                { text: '対面', value: 'offline' },
                { text: 'インターネット', value: 'online' },
              ]}
            ></SelectWithLabel>
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
