import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Tab from "../../Components/Tab/Tab.jsx";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { Navigate } from "react-router-dom"; 
import "./Main.scss";

export default function Main() {
  const [flows, setFlows] = useState(1);
  const [login, setLogin] = useState(true);

  return (
    <div className="App">
      {!login && <Navigate to='/login' />}
      {login && (
        <>
          <div className="App-sidebar">
            <Sidebar flows={flows} setFlows={setFlows} />
          </div>
          <div className="App-tab">
            <Tab flows={flows} setFlows={setFlows} />
          </div>
        </>
      )}
    </div>
  );
}

