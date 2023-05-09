import Sidebar from "../../Components/SideBar/SideBar.jsx";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";
import { useParams } from "../../hooks/useParams";
import FlowGrid from "../../Components/FlowGrid/FlowGrid.jsx";
import PageTab from "../../Components/PageTab/PageTab.jsx";
import Library from "../../Components/Library/Library.jsx";
import { useFlowStorage } from "../../storage/Storage";
import Calendar from "../../Components/Calendar/Calendar.jsx";
import Settings from "../../Components/Settings/Settings.jsx";
export default function Main() {
  const { login } = useParams();
  const navigateTo = useNavigate();
  const mode = useFlowStorage((state) => state.mode);
  useEffect(() => {
    if (!login) navigateTo("/");
  }, [login]);

  console.log(login);
  return (
    <div className="App">
      {login && (
        <div className="App-container">
          <div className="App-sidebar">
            <Sidebar />
          </div>
          <div className="App-tab">
            {/* <Tab /> */}
            <div className="Page-tab">
              <PageTab />
            </div>
            <div className="Flow-grid">
              {mode === 0 ? (
                <FlowGrid />
              ) : mode === 1 ? (
                <Library />
              ) : mode === 2 ? (
                <Calendar />
              ) : (
                <Settings />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
