import { h } from 'hyperapp';
import Link from '@/components/Link';
import { ComicList } from '@/components/ComicList';

import './style.scss';

export default props => {
  const { path } = props.location;

  const comics = (props.pageData[path]?.data || []).map(comic => ({
    ...comic,
    to: `/series/?seriesId=${comic.seriesId}`,
  }));

  return (
    <div class={{ pages: true, top: true }}>
      <Link to="/setting">setting</Link>
      <ComicList comics={comics} />
    </div>
  );
};
