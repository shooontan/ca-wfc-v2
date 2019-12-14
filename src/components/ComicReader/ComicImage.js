import { h } from 'hyperapp';

import './ComicImage.css';

/**
 * Comic Image.
 *
 * @param {Object} props
 * @param {string} props.src
 * @param {number} props.width
 * @param {number} props.height
 */
const ComicImage = props => {
  return (
    <img
      class="components-comic-card"
      src={props.src}
      width={props.width}
      height={props.height}
    />
  );
};

export default ComicImage;
