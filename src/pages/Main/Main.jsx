import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Tab from "../../Components/Tab/Tab.jsx";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";
import { useParams } from "../../hooks/useParams";

export default function Main() {
  const [flows, setFlows] = useState(1);
  const { login } = useParams();
  const navigateTo = useNavigate();
  // console.log(login);

  return (
    <div className="App">
      {!login && navigateTo("/")}
      {login && (
        <div className="App-container">
          <div className="App-sidebar">
            <Sidebar flows={flows} setFlows={setFlows} />
          </div>
          <div className="App-tab">
            <Tab flows={flows} setFlows={setFlows} />
          </div>
        </div>
      )}
    </div>
  );
}
