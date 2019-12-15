import * as requestTop from './requestTop';
import * as requestSeries from './requestSeries';
import * as requestViewer from './requestViewer';
import * as keyPaging from './keyPaging';
import * as voicePaging from './voicePaging';

export const subscriptions = state => [
  console.log(state),
  requestTop.is(state) && requestTop.factor(),
  requestSeries.is(state) && requestSeries.factor(state),
  requestViewer.is(state) && requestViewer.factor(state),
  keyPaging.is(state) && keyPaging.factor(state),
  voicePaging.is(state) && voicePaging.factor(state),
];
