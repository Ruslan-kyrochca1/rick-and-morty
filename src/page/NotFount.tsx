import { Navigate } from 'react-router-dom';
import { publicRoute } from '../route/publicRoute';

const NotFount = () => {
  return <Navigate to={publicRoute.home} />;
};

export default NotFount;
