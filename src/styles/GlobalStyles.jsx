// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Global } from '@emotion/react';
import { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Glory:wght@200;400;600&family=Noto+Serif+KR:wght@200;400;600&display=swap');
`;

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
};

export default GlobalStyles;
