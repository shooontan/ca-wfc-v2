import { h } from 'hyperapp';
import Link from '@/components/Link';

/**
 * @typedef Comic
 * @type {Object}
 * @property {string} title
 * @property {string} props.seriesId
 * @property {string} props.author
 * @property {string} props.publisher
 * @property {number} props.volumes
 * @property {string} props.description
 * @property {string} props.seriesImage
 * @property {string} props.width
 * @property {string} props.height
 */

/**
 * TODO: jsdoc
 *
 * @param {Comic} props
 * @param {string} props.to
 */
const ComicListItem = props => {
  return (
    <Link to={props.to} class="components-comic-list-item">
      <div class="components-comic-list-inner">
        <img src={props.seriesImage} />
        <div class="components-comic-list-item-detail">
          <p class="components-comic-list-item-title">{props.title}</p>
          <p class="components-comic-list-item-description">
            {props.description}
          </p>
          <div>
            <p>{props.publisher}</p>
            <p>{props.author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

/**
 * @param {Object} props
 */
const ComicList = props => {
  return props.comics.map(comic => <ComicListItem {...comic} />);
};

export default ComicList;
