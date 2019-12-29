import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import {theme} from 'theme/mainTheme'



function Root() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Button>Close / Save</Button>
          <Button secondary>Remove</Button>
          <h1>Note</h1>
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
