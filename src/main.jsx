import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/index.scss";
import { UserProvider } from "./hooks/useApp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./i18n";

const theme = createTheme({
  typography: {
    fontFamily: "Flipahaus",
  },
  palette: {
    primary: {
      main: "#black", // 琥珀色
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  // 讓所有的頁面都套用 Bauhaus 字體
  <ThemeProvider theme={theme}>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
