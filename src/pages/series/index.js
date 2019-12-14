import { h } from 'hyperapp';
import { StaticFetch } from 'hyperstatic';
import { ComicList } from '@/components/ComicList';
import { handleSeries } from './series.action';

export default props => {
  const { path } = props.location;
  const pageData = props.pageData[path];

  const books = (pageData.books || []).map(book => ({
    ...book,
    seriesImage: book.image,
    to: `/viewer/?bookId=${book.id}`,
  }));

  return (
    <div class={{ pages: true, comics: true }}>
      <ComicList comics={books} />
    </div>
  );
};

export const Init = state => [
  state,
  StaticFetch({
    url: `https://wfc2-image-api-259809.appspot.com/api/series/${state.location.queryParams.seriesId}/`,
    action: handleSeries,
    // error: handleError,
  }),
];
