import React from 'react';
import { css, Global } from '@emotion/core';

const globalStyles = (
  <Global
    styles={css`
      :root {
        --primary: #5a18e9;
        --secondary: #9564ff;
        --white: #ffffff;
        --green: #00ff80;
        --grey: #909090;
        --dark: #313131;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
      }

      ol,
      ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      form,
      input {
        font-family: inherit;
      }

      html,
      body {
        margin: 0;
        font-family: AppleSDGothicNeo, 'Noto Sans CJK KR', 'Noto Sans KR', NanumGothic, 'Segoe UI',
          '맑은 고딕', Helvetica, Arial, sans-serif;
        line-height: 1;
        overflow: hidden;
      }
    `}
  />
);

export default globalStyles;
