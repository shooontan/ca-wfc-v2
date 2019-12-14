import { hyperstatic } from 'hyperstatic';

import { routes } from './routes';
import { init } from './init';
import { view } from './layouts/view';

// style
import './styles/global.css';

hyperstatic({
  routes,
  init,
  view,
  subscriptions: state => [console.log(state)],
  node: document.getElementById('app'),
});

if (process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register(`${window.location.origin}/sw.js`);
}
