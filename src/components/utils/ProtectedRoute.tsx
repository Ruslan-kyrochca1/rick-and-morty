import { useAuth } from '../../hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { publicRoute } from '../../route/publicRoute';

const ProtectedRoute = () => {
  const location = useLocation();
  const { user } = useAuth();
  if (user === null) {
    return <Navigate to={publicRoute.login} state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
