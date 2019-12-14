import { h } from 'hyperapp';
import { preventDefault } from '@hyperapp/events';

/**
 * Pagenation Button fo Comic Viewer
 *
 * @param {Object} props
 * @param {boolean} props.next
 * @param {Function} props.clickAction
 * @param {JSX.Element} children
 */
const ComicButtonBase = (props, children) => {
  return (
    <button
      class={{
        'components-comic-button-base': true,
        next: props.next,
        pre: !props.next,
      }}
      onClick={preventDefault(props.clickAction)}
    >
      {children}
    </button>
  );
};

export default ComicButtonBase;
