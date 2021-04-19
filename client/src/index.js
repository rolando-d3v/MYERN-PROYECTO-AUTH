import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import App from "./App";
import AuthState from "./context/auth/authState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
