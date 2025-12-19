import { createContext } from 'react';

export type UserData = { username: string };
export type UserState = UserData | null;

export interface AuthContextType {
  user: UserState;
  signin: (newUser: UserData, callback: () => void) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
