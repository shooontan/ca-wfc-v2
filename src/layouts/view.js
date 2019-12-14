import { h } from 'hyperapp';
import { Router } from 'hyperstatic';

import './view.scss';

export const view = state => {
  return (
    <main
      class={{
        'layouts-main': true,
        darkmode: state.darkMode,
      }}
    >
      {Router(state)}
    </main>
  );
};
