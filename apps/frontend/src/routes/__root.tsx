import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar renderMain={false} />
      <Box component="main" sx={{ height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        <Outlet />
      </Box>
      <TanStackRouterDevtools />
    </>
  ),
})
