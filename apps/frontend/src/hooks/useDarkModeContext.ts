import { DarkModeContext } from '@/context/DarkModeContext';
import { useContext } from 'react';

export function useDarkModeContext() {
  const context = useContext(DarkModeContext);

  return context;
}
