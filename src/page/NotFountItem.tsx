import { Link } from 'react-router-dom';
import { publicRoute } from '../route/publicRoute';

const NotFount = ({ name }: { name: keyof typeof publicRoute }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>The {name} not found...</h2>
      <Link to={`${publicRoute[name]}`}>Return to list of all {name}s</Link>
    </div>
  );
};

export default NotFount;
