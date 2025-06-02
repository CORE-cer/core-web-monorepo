import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import { DRAWER_WIDTH } from '../MUIThemes';

type MainProps = {
  permanentDrawer?: boolean;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const Main = ({ permanentDrawer, children, sx }: MainProps) => {
  return (
    <Box
      sx={{
        ...sx,
        display: 'flex',
        ml: permanentDrawer ? `${DRAWER_WIDTH}px` : 0,
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
