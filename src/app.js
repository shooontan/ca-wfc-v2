import { hyperstatic } from 'hyperstatic';

import { routes } from './routes';
import { init } from './init';
import { view } from './layouts/view';
import { subscriptions } from './subscriptions';

// style
import './styles/global.css';

hyperstatic({
  routes,
  init: init(),
  view,
  subscriptions,
  node: document.getElementById('app'),
});
