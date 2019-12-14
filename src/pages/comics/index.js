import { h } from 'hyperapp';
import { StaticFetch } from 'hyperstatic';
import { ComicReader } from '@/components/ComicReader';
import { handleComic, handleError } from './comics.action';

import './style.css';

export default props => (
  <div class={{ pages: true, comics: true }}>
    <ComicReader {...props} />
  </div>
);

export const Init = state => [
  state,
  StaticFetch({
    url: `https://wfc2-image-api-259809.appspot.com/api/books/${state.location.queryParams.bookId}/`,
    action: handleComic,
    error: handleError,
  }),
];
