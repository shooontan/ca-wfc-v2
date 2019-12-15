import { onKeyDown } from '@hyperapp/events';
import * as comicReaderActions from '@/actions/comicReaderActions';

const keycode = {
  escape: 27,
  left: 37,
  up: 38,
  right: 39,
  bottom: 40,
};

export const is = state => state.location?.path === '/viewer';

export const factor = () =>
  onKeyDown((state, result) => {
    if (result.keyCode === keycode.escape) {
      window?.history?.back();
      return state;
    }

    if (result.keyCode === keycode.left) {
      return comicReaderActions.NextPage;
    }

    if (result.keyCode === keycode.right) {
      return comicReaderActions.PrePage;
    }

    return state;
  });
