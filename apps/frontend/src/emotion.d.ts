import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    palette?: {
      mode?: 'dark' | 'light';
    };
  }
}
