/* eslint-disable react-refresh/only-export-components */
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { MUIThemeDark, MUIThemeLight } from '../MUIThemes';

type DarkModeContextType = {
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  toggleDarkMode: () => {},
});

type DarkModeProviderProps = {
  children: ReactNode;
}

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem('darkMode') === 'true'
  );

  const providerValue = useMemo(
    () => ({
      toggleDarkMode: () => { setDarkMode((prevMode) => !prevMode); },
    }),
    []
  );

  const theme = useMemo(
    () => (darkMode ? MUIThemeDark : MUIThemeLight),
    [darkMode]
  );

  useEffect(() => {
    window.localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={providerValue}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext(): DarkModeContextType {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('No DarkModeContext found');
  }

  return context;
}
