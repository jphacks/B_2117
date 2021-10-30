const CALIL_APP_KEY = '0d7d50fc556fab9a1c523a4ae415a611';

export const isRightBook = (title: string, query: string) => {
  return query.includes(title);
};

export const searchISBN = async (keyword?: string) => {
  if (keyword === undefined) return { ISBN_10: null, ISBN_13: null };
  let res;
  let data;
  try {
    res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}`,
    );
    data = await res.json();
  } catch {
    return { ISBN_10: null, ISBN_13: null };
  }

  if (
    data === undefined ||
    data === null ||
    data.totalItems === 0 ||
    data.items === undefined ||
    data.items === null ||
    data.items.length === 0
  )
    return { ISBN_10: null, ISBN_13: null };

  const firstItem = data.items[0];
  if (
    !isRightBook(firstItem?.volumeInfo?.title, keyword) ||
    firstItem.volumeInfo.industryIdentifiers.length < 2
  ) {
    return { ISBN_10: null, ISBN_13: null };
  }

  return {
    ISBN_10:
      firstItem?.volumeInfo?.industryIdentifiers[0].type === 'ISBN_10'
        ? firstItem?.volumeInfo?.industryIdentifiers[0].identifier
        : null,
    ISBN_13:
      firstItem?.volumeInfo?.industryIdentifiers[1].type === 'ISBN_13'
        ? firstItem?.volumeInfo?.industryIdentifiers[1].identifier
        : null,
  };
};

export const searchLentState = async (isbn: string) => {
  const res = await fetch(
    `https://api.calil.jp/check?appKey=${CALIL_APP_KEY}&isbn=${isbn}&systemid=Univ_Doshisha,Kyoto_Pref,Osaka_Osaka,Osaka_Pref&callback=no`,
  );
  const data = await res.json();

  return data;
};
