import { createContext } from 'react';

type DarkModeContextType = {
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDarkMode: () => {},
});
