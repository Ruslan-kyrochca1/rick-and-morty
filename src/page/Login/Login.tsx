import { useLocation, useNavigate } from 'react-router-dom';
import Signin from '../../components/Singin/Signin';
import { useAuth } from '../../hooks/useAuth';
import type { HandleSubmitType } from '../../types/types';

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const handleSubmit: HandleSubmitType = (email: string, password: string) => {
    console.log('Проверка Сервера на соответстие email и паролья: ', email, password);
    signin({ username: email }, () => {
      navigate(fromPage, { replace: true });
    });
  };
  return <Signin handleSubmit={handleSubmit} />;
};

export default Login;
