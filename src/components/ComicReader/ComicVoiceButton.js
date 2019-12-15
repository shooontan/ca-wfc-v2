import { h } from 'hyperapp';
import { preventDefault } from '@hyperapp/events';

import './ComicVoiceButton.scss';

/**
 * @param {Object} props
 * @param {boolean} props.active
 * @param {Function} props.action
 */
const ComicVoiceButton = props => {
  const emoji = props.active ? '🔊' : '🔇';

  return (
    <button
      type="button"
      class="comic-voice-button"
      onclick={preventDefault([props.action])}
    >
      {emoji}
    </button>
  );
};

export default ComicVoiceButton;
