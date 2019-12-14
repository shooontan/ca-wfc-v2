import { h } from 'hyperapp';
// import { theme } from '@/styles/color';
import ComicImage from './ComicImage';
import ComicButton from './ComicButton';
import { NextPage, PrePage } from '@/actions/pagingActions';

import './ComicReader.css';

/**
 * Comic Viewer.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.seriesId
 * @param {number} props.pageNum
 * @param {{imageId: string, imageUrl: string}[]} props.imageData
 */
const ComicReader = props => {
  const { path } = props.location;
  const pageData = props.pageData[path];

  // TODO: skeleton placeholder card

  const images = (pageData.imageData || []).map(comic => (
    <ComicImage
      src={comic.imageUrl}
      width={pageData.width || 0}
      height={pageData.height || 0}
    />
  ));

  return (
    <div class="components-comic-reader">
      <ComicButton next clickAction={NextPage}>
        {'<'}
      </ComicButton>
      <div class="components-comic-reader-image">
        {images[pageData.currentPage]}
      </div>
      <ComicButton clickAction={PrePage}>{'>'}</ComicButton>
    </div>
  );
};

export default ComicReader;
