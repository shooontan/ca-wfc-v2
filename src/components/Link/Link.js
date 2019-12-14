import { h } from 'hyperapp';
import { Link } from 'hyperstatic';

export default ({ to, ...props }, children) => {
  return (
    <Link
      to={to}
      // disable preload
      oncreate={undefined}
      ontriggerpageload={undefined}
      {...props}
    >
      {children}
    </Link>
  );
};
