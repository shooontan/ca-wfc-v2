import { h } from 'hyperapp';
import { Router } from 'hyperstatic';

export const view = state => {
  return (
    <div>
      <main>
        <div key={state.location.path}>{Router(state)}</div>
      </main>
    </div>
  );
};
