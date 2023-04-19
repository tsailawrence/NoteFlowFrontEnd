import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Main from "./pages/Main/Main";
import Flow from "./pages/Flow/Flow";
import Node from "./pages/Node/Node";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Login mode="0" />} path="/" />
        <Route element={<Login mode="1" />} path="/register" />
        <Route element={<Login mode="2" />} path="/forgotPassword" />
        <Route element={<Main />} path="/home" />
        <Route element={<Flow />} path="/flow" />
        <Route element={<Node />} path="/node" />
      </Routes>
    </HashRouter>
  );
};

export default Router;
