import React, { useState, useEffect } from 'react';
import { Badge, Heading } from '@chakra-ui/react';
import { produce } from 'immer';
import { searchISBN, searchLentState } from '../api/book';

type Props = {
  bookInfo: string | undefined;
};

export const Book: React.FC<Props> = ({ bookInfo }) => {
  const [res, setRes] = useState<{
    doshisha: any;
    osaka_pref: any;
    osaka_city: any;
  }>({ doshisha: null, osaka_pref: null, osaka_city: null });
  const [isFetching, setIsFetching] = useState(false);
  const [conn, setConn] = useState(1);
  const [isbn, setIsbn] = useState<any>('');
  useEffect(() => {
    (async () => {
      setIsFetching(true);
      if (isbn === '') {
        const isbn_obj = await searchISBN(
          bookInfo?.split('(')[0].replace(/\r?\n/g, ' '),
        );
        setIsbn(isbn_obj.ISBN_10 || isbn_obj.ISBN_13);
      }

      if (!isbn) return;

      if (conn === 1) {
        let res_t = res;

        /* eslint-disable prefer-destructuring */

        let states;
        try {
          /* eslint-disable no-await-in-loop */
          states = await searchLentState(isbn);
        } catch {
          return;
        }

        const doshisha = states.books[isbn].Univ_Doshisha;
        const Osaka_Osaka = states.books[isbn].Osaka_Osaka;
        const Osaka_Pref = states.books[isbn].Osaka_Pref;
        /* eslint-disable no-param-reassign */
        res_t = produce(res, d => {
          d.doshisha = doshisha;
          d.osaka_city = Osaka_Osaka;
          d.osaka_pref = Osaka_Pref;
        });

        setConn(states.continue);

        setRes(res_t);
        setIsFetching(false);
      }

      /**
       * TODO:
       * Warning: Can't perform a React state update on an unmounted component.
       * This is a no-op, but it indicates a memory leak in your application.
       * To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
       */
    })();
  }, [bookInfo, res, isbn, conn]);

  return (
    <div style={{ marginBottom: '10px' }}>
      <p style={{ marginBottom: '5px', marginTop: '2px' }}>{bookInfo}</p>
      <Heading as="h3" size="sm">
        ??????????????????????????????
      </Heading>
      {isbn !== null && isbn !== '' ? (
        <>
          <Heading as="h4" size="sm">
            ??????????????????
          </Heading>
          {res?.doshisha?.status === 'Error' && (
            <div>???????????????????????????????????????</div>
          )}
          {Object.entries(res?.doshisha?.libkey || {})?.map((arr: any) => {
            return (
              <Badge
                colorScheme={
                  arr[1] === '?????????' || arr[1] === '????????????' ? 'green' : 'red'
                }
                variant="outline"
              >
                <a
                  href={res?.doshisha?.reserveurl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '12px' }}
                >
                  {arr[0]}: {arr[1]}
                </a>
              </Badge>
            );
          })}
          <Heading as="h4" size="sm">
            ?????????
          </Heading>
          {res?.osaka_pref?.status === 'Error' && (
            <div>???????????????????????????????????????</div>
          )}
          {Object.entries(res?.osaka_pref?.libkey || {}).map((arr: any) => {
            return (
              <Badge
                variant="outline"
                colorScheme={
                  arr[1] === '?????????' || arr[1] === '????????????' ? 'green' : 'red'
                }
              >
                <a
                  href={res?.osaka_pref?.reserveurl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '12px' }}
                >
                  {arr[0]}: {arr[1]}
                </a>
              </Badge>
            );
          })}
          <Heading as="h4" size="sm">
            ?????????
          </Heading>
          {res?.osaka_city?.status === 'Error' && (
            <div>???????????????????????????????????????</div>
          )}
          {Object.entries(res?.osaka_city?.libkey || {}).map((arr: any) => {
            return (
              <Badge
                colorScheme={
                  arr[1] === '?????????' || arr[1] === '????????????' ? 'green' : 'red'
                }
                variant="outline"
              >
                <a
                  href={res?.osaka_city?.reserveurl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '12px' }}
                >
                  {arr[0]}: {arr[1]}
                </a>
              </Badge>
            );
          })}
        </>
      ) : (
        <div>???????????????????????????????????????</div>
      )}
    </div>
  );
};
