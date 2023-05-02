import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider } from 'react-oidc-context';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from './muiTheme';
import { defineCustomElements } from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';

import keycloak from './keycloak';

defineCustomElements();

const onSigninCallback = () => {
  // Remove query string parameters from URL
  const url = new URL(window.location.href);
  url.search = "";
  window.history.replaceState({}, "", url);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={muiTheme}>
    <AuthProvider {...keycloak} onSigninCallback={onSigninCallback}>
      <App />
    </AuthProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
