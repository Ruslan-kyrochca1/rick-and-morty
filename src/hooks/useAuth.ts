import { useContext } from 'react';
import { AuthContext, type AuthContextType } from '../contect/AuthContext';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('Пользователь не авторизован');
  }

  return context;
};
