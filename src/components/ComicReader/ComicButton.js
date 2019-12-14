import { h } from 'hyperapp';
import { preventDefault } from '@hyperapp/events';

import './ComicButton.scss';

/**
 * Pagenation Button fo Comic Viewer
 *
 * @param {Object} props
 * @param {boolean} props.next
 * @param {boolean} props.disabled
 * @param {Function} props.clickAction
 * @param {JSX.Element} children
 */
const ComicButtonBase = (props, children) => {
  return (
    <div class="components-comic-button">
      <button
        type="button"
        class={{
          'components-comic-button-base': true,
          next: props.next,
          pre: !props.next,
          disabled: props.disabled,
        }}
        onClick={preventDefault(props.clickAction)}
      >
        {children}
      </button>
    </div>
  );
};

export default ComicButtonBase;
