import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Auth0Provider
    domain="dev-y4dtlj6thn26xy28.us.auth0.com"
    clientId="6fngeLvI9PC9UVGEpurUt1TuygFuyqcA"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://NoahCapstone"
    }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
)

reportWebVitals();
