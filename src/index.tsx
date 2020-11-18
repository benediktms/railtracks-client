import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { LoggedInContextProvider } from './app/AppContext';

const app = (
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <LoggedInContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LoggedInContextProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
