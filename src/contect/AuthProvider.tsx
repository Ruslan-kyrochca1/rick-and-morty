import { useState, type ReactNode } from 'react';
import { AuthContext, type AuthContextType, type UserData, type UserState } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserState>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const signin = (newUser: UserData, callback: () => void) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    callback();
  };
  const value: AuthContextType = {
    user,
    signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
