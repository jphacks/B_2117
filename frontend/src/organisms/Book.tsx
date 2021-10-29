import React, { useState, useEffect } from 'react';
import { searchISBN, searchLentState } from '../api/book';

type Props = {
  bookInfo: string | undefined;
};

export const Book: React.FC<Props> = ({ bookInfo }) => {
  const [res, setRes] = useState<any>('');
  useEffect(() => {
    (async () => {
      const isbn_obj = await searchISBN(
        bookInfo?.split('(')[0].replace(/\r?\n/g, ' '),
      );
      const isbn = isbn_obj.ISBN_10 || isbn_obj.ISBN_13;
      if (!isbn) console.log('not found');
      else {
        const ress = await searchLentState(isbn);
        setRes(JSON.stringify(ress));
      }
    })();
  });

  return (
    <div>
      {bookInfo}
      <p>{res}</p>
    </div>
  );
};
