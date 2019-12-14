import { h } from 'hyperapp';
import { StaticFetch } from 'hyperstatic';
import { ComicList } from '@/components/ComicList';

export default props => {
  const { path } = props.location;

  const comics = (props.pageData[path]?.data || []).map(comic => ({
    ...comic,
    to: `/series/?seriesId=${comic.seriesId}`,
  }));

  return (
    <div class={{ pages: true, top: true }}>
      <ComicList comics={comics} />
    </div>
  );
};
