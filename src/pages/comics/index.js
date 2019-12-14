import { h } from 'hyperapp';
import { StaticFetch } from 'hyperstatic';
import { ComicReader } from '@/components/ComicReader';

import './style.css';

export default props => (
  <div class={{ pages: true, comics: true }}>
    <ComicReader {...props} />
  </div>
);

export const Init = state => [
  state,
  StaticFetch({
    url: 'https://wfc2-image-api-259809.appspot.com/api/books/D2rzfW7j/',
    action: HandleComic,
    // TODO: error handle
    // error: HandleError,
  }),
];

const HandleComic = (state, response) => {
  const { path } = state.location;
  return {
    ...state,
    pageData: {
      ...state.pageData,
      [path]: {
        ...state.pageData[path],
        ...response,
        // display image index
        currentPage: 0,
      },
    },
  };
};
