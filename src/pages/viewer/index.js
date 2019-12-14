import { h } from 'hyperapp';
import { StaticFetch } from 'hyperstatic';
import { ComicReader } from '@/components/ComicReader';
import { handleComic, handleError } from './viewer.action';

import './style.scss';

export default props => (
  <div class={{ pages: true, viewer: true }}>
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
