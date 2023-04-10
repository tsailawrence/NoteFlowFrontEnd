import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyProvider } from "./hooks/useParams";

import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
