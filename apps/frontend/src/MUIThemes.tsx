import { createTheme } from '@mui/material/styles';

// import { Link as RouterLink } from '@tanstack/react-router';
// import React from 'react';

// type LinkBehaviorProps = {
//   href?: string;
//   [key: string]: unknown;
// };

// const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkBehaviorProps>(function LinkBehavior(props, ref) {
//   const { href, ...other } = props;
//   return <RouterLink ref={ref} to={href ?? '/'} {...other} />;
// });

// const common = {
//   components: {
//     MuiLink: {
//       defaultProps: {
//         component: LinkBehavior,
//       },
//     },
//     MuiButtonBase: {
//       defaultProps: {
//         LinkComponent: LinkBehavior,
//       },
//     },
//   },
// };

export const DRAWER_WIDTH = 160;

export const MUIThemeDark = createTheme({
  // ...common,
  palette: {
    mode: 'dark',
    primary: {
      main: '#fbbf24',
    },
    secondary: {
      main: '#22d3ee',
    },
  },
});

export const MUIThemeLight = createTheme({
  // ...common,
  palette: {
    mode: 'light',
    primary: {
      main: '#d97706',
    },
    secondary: {
      main: '#0891b2',
    },
  },
});
