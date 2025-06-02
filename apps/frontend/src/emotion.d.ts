import '@emotion/react';

declare module '@emotion/react' {
  export type Theme = {
    palette?: {
      mode?: 'dark' | 'light';
    };
  };
}
