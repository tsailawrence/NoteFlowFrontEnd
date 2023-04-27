import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/index.scss";
import { UserProvider } from "./hooks/useApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <UserProvider>
    <App />
  </UserProvider>
  // </React.StrictMode>
);
