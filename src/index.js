import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from './modules/profile';
import LoginButton from './modules/loginbutton';
import LogoutButton from './modules/logoutbutton';
import TestAuth from './modules/tokens';


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
      <LoginButton/>
      <Profile/>
      <LogoutButton/>
      <TestAuth address="http://127.0.0.1:5000/actors" buttonText="Test Actor Endpoint"/>
    </Auth0Provider>
  </StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
