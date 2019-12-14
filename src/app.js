import { hyperstatic } from 'hyperstatic';

import { routes } from './routes';
import { init } from './init';
import { view } from './layouts/view';

hyperstatic({
  routes,
  init,
  view,
  subscriptions: () => [],
  node: document.getElementById('app'),
});
