import { h } from 'hyperapp';
import { Router } from 'hyperstatic';

export const view = state => {
  return <main>{Router(state)}</main>;
};
