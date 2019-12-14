import * as requestTop from './requestTop';
import * as requestSeries from './requestSeries';
import * as requestViewer from './requestViewer';

export const subscriptions = state => [
  console.log(state),
  requestTop.is(state) && requestTop.factor(),
  requestSeries.is(state) && requestSeries.factor(state),
  requestViewer.is(state) && requestViewer.factor(state),
];
