import { atom } from 'recoil';

export const searchResultState = atom({
  key: 'searchResult', // unique ID (with respect to other atoms/selectors)
  default: [] as any[], // default value (aka initial value)
});
