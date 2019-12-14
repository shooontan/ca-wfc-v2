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

  const currentPage = pageData.currentPage || 0;

  // TODO: skeleton placeholder card

  // const img = new Image();
  // img.onerror = () => {
  //   return reject(new Error());
  // };
  // img.onload = () => {
  //   return resolve(true);
  // };
  // img.src = url;

  // const images = (pageData?.imageData?.[currentPage] || []).map(comic => (
  //   <ComicImage
  //     src={comic.imageUrl}
  //     width={pageData.width || 0}
  //     height={pageData.height || 0}
  //   />
  // ));

  // const image = pageData?.imageData?.[currentPage] && (
  //   <ComicImage
  //     src={comic.imageUrl}
  //     width={pageData.width || 0}
  //     height={pageData.height || 0}
  //   />
  // ));

  // display target
  const comic = pageData?.imageData?.[currentPage];

  // preload
  for (let index = currentPage; index < currentPage + 5; index++) {
    const url = pageData?.imageData?.[index]?.imageUrl;
    const img = new Image();
    img.src = url;
  }

  return (
    <div class="components-comic-reader">
      <ComicButton next clickAction={NextPage}>
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
      <ComicButton clickAction={PrePage}>{'>'}</ComicButton>
    </div>
  );
};

export default ComicReader;
