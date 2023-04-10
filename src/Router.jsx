import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Main from "./pages/Main/Main";
import Flow from "./pages/Flow/Flow";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<Main />} path="/home" />
        <Route element={<Flow />} path="/flow" />
      </Routes>
    </HashRouter>
  );
};

export default Router;
