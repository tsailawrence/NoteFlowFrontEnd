import Sidebar from "./Components/SideBar/SideBar.jsx";
import Tab from "./Components/Tab/Tab.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import FlowWithProvider from "./pages/Flow/Flow.jsx";
import { useState } from "react";
import Editor from "./Components/Editor/Editor";
import { Login } from "./pages/Login/Login";
import "./scss/App.scss";
import "./fonts/Bauhaus.ttf";
import Router from "./Router.jsx";

function App() {
  return <Router />;
}

export default App;
