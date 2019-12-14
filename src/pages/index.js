import { h } from 'hyperapp';
import { Link } from 'hyperstatic';

export default () => (
  <div>
    <p>
      home
      <Link to="/comics">comics</Link>!
    </p>
  </div>
);
