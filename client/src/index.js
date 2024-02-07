import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Auth0Provider
    domain="dev-mcrbpb68k3fyeiy3.us.auth0.com"
    clientId="CyS93dClj1VBKQhsyFjYlonX0Swx6kdB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
