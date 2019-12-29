import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
      <h1>Note</h1>
    </div>
  );
}

export default Root;
