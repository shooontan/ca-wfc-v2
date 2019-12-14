import { h } from 'hyperapp';
import { ComicList } from '@/components/ComicList';

export default props => {
  const { path } = props.location;
  const pageData = props.pageData[path];

  const books = (pageData?.books || []).map(book => ({
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
