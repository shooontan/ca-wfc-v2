import { h } from 'hyperapp';
import { ComicReader } from '@/components/ComicReader';

import './style.scss';

export default props => (
  <div class={{ pages: true, viewer: true }}>
    <ComicReader {...props} />
  </div>
);
