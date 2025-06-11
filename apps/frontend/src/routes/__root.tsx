import Navbar from '@/components/Navbar';
import { Box, useTheme } from '@mui/material';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const theme = useTheme();

  return (
    <>
      <Navbar renderMain={false} />
      <Box component="main" sx={{ height: `calc(100vh - ${theme.mixins.toolbar.minHeight?.toString() ?? '0'}px)`, overflow: 'hidden' }}>
        <Outlet />
      </Box>
      <TanStackRouterDevtools />
    </>
  );
}
