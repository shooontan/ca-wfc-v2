import { h } from 'hyperapp';
import { ComicList } from '@/components/ComicList';

import './style.scss';

export default props => {
  const { path } = props.location;
  const pageData = props.pageData?.[path];

  const books = (pageData?.books || []).map(book => ({
    ...book,
    seriesImage: book.image,
    to: `/viewer/?bookId=${book.id}`,
  }));

  return (
    <div class="pages-series">
      <div>
        <p class="pages-series-description">{pageData?.description}</p>
      </div>
      <ComicList comics={books} />
    </div>
  );
};
