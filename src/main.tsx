import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @font-face {
    font-family: 'NanumHuman-Regular';
    src: url('/fonts/NanumHumanRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumHuman-Bold';
    src: url('/fonts/NanumHumanBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumHuman-Light';
    src: url('/fonts/NanumHumanLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumHuman-ExtraLight';
    src: url('/fonts/NanumHumanEL.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumHuman-ExtraBold';
    src: url('/fonts/NanumHumanEB.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumHuman-Heavy';
    src: url('/fonts/NanumHumanHeavy.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
