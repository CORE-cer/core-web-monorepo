import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';

import './monaco/setup';
import DarkModeProvider from './providers/DarkModeProvider.tsx';
import { UserProvider } from './providers/UserProvider.tsx';
import reportWebVitals from './reportWebVitals.ts';
// Import the generated route tree
import { routeTree } from './routeTree.gen';
import './style.scss';
import './styles.css';

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
// Needs to be interface to merge with internal interface
declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  // Set base document title
  document.title = 'CORE';
  document.documentElement.lang = 'en';

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <CookiesProvider>
        <UserProvider>
          <DarkModeProvider>
            <CssBaseline />
            <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }} maxSnack={3} autoHideDuration={3000}>
              <RouterProvider router={router} />
            </SnackbarProvider>
          </DarkModeProvider>
        </UserProvider>
      </CookiesProvider>
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
