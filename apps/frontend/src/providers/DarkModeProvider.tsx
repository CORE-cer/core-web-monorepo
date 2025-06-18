import { MUIThemeDark, MUIThemeLight } from '@/MUIThemes';
import { DarkModeContext } from '@/context/DarkModeContext';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type DarkModeProviderProps = {
  children: ReactNode;
};

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = window.localStorage.getItem('darkMode');
    return stored === null || stored === 'true';
  });

  const providerValue = useMemo(
    () => ({
      toggleDarkMode: () => {
        setDarkMode((prevMode) => !prevMode);
      },
    }),
    []
  );

  const theme = useMemo(() => (darkMode ? MUIThemeDark : MUIThemeLight), [darkMode]);

  useEffect(() => {
    window.localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={providerValue}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </DarkModeContext.Provider>
  );
}
