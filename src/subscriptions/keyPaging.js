import { onKeyDown } from '@hyperapp/events';
import * as pagingActions from '@/actions/pagingActions';

const keycode = {
  left: 37,
  up: 38,
  right: 39,
  bottom: 40,
};

export const is = state => state.location?.path === '/viewer';

export const factor = () =>
  onKeyDown((state, result) => {
    if (result.keyCode === keycode.left) {
      return pagingActions.NextPage;
    }

    if (result.keyCode === keycode.right) {
      return pagingActions.PrePage;
    }

    return state;
  });
