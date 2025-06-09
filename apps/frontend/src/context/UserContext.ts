import { createContext } from 'react';

type UserContextType = {
  userId: string;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
