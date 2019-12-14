import { h } from 'hyperapp';
import { StaticFetch } from 'hyperstatic';
import { ComicList } from '@/components/ComicList';
import { handleSeries } from './index.action';

export default props => {
  const { path } = props.location;

  const comics = (props.pageData[path].data || []).map(comic => ({
    ...comic,
    to: `/series/?seriesId=${comic.seriesId}`,
  }));

  return (
    <div class={{ pages: true, top: true }}>
      <ComicList comics={comics} />
    </div>
  );
};

export const Init = state => [
  state,
  StaticFetch({
    url: `https://wfc2-image-api-259809.appspot.com/api/series/`,
    action: handleSeries,
    // error: handleError,
  }),
];
