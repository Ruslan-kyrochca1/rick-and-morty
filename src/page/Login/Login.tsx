import { useLocation, useNavigate } from 'react-router-dom';
import SigninForm from '../../components/molecules/SigninForm/SigninForm';
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
  return <SigninForm handleSubmit={handleSubmit} />;
};

export default Login;
