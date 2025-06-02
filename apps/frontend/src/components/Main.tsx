import { Box } from '@mui/material';
import type { ReactNode } from 'react';

import { DRAWER_WIDTH } from '../MUIThemes';

type MainProps = {
  permanentDrawer?: boolean;
  children: ReactNode;
};

const Main = ({ permanentDrawer, children }: MainProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        ml: permanentDrawer ? `${DRAWER_WIDTH.toString()}px` : 0,
        flexGrow: 1,
        overflow: 'visible',
        // 48px is the dense's toolbar height
        height: `calc(100vh - 48px)`,
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
