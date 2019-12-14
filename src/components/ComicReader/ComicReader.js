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
  const pageData = props.pageData?.[path];

  const currentPage = pageData?.currentPage || 0;
  const allPage = pageData?.pageNum || 0;
  const comic = pageData?.imageData?.[currentPage];

  // TODO: skeleton placeholder card

  return (
    <div class="components-comic-reader">
      <ComicButton
        next
        clickAction={NextPage}
        disabled={currentPage >= allPage}
      >
        {'<'}
      </ComicButton>
      <div class="components-comic-reader-image">
        {comic && (
          <ComicImage
            src={comic.imageUrl}
            width={pageData.width || 0}
            height={pageData.height || 0}
          />
        )}
      </div>
      <ComicButton clickAction={PrePage} disabled={currentPage <= 0}>
        {'>'}
      </ComicButton>
    </div>
  );
};

export default ComicReader;
