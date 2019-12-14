import { h } from 'hyperapp';
import Link from '@/components/Link';

export default props => (
  <div>
    <p>
      home
      <Link to="/comics" state={props.state}>
        comics
      </Link>
      !
    </p>
  </div>
);
