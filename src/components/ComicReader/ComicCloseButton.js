import { h } from 'hyperapp';
import './ComicCloseButton.scss';

const ComicCloseButton = () => {
  return (
    <button
      type="button"
      class="comic-close-button"
      onclick={[
        state => state,
        event => {
          event.preventDefault();
          window?.history?.back();
          return;
        },
      ]}
    >
      x
    </button>
  );
};

export default ComicCloseButton;
