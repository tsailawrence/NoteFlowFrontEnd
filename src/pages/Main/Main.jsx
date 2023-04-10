import Sidebar from "../../Components/SideBar/SideBar.jsx";
import Tab from "../../Components/Tab/Tab.jsx";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";
import { useParams } from "../../hooks/useParams";

export default function Main() {
  const [flows, setFlows] = useState(1);
  const [library, setLibrary] = useState(1);
  const [calendar, setCalendar] = useState(1);
  const [settings, setSettings] = useState(1);
  const { login } = useParams();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!login) navigateTo("/");
  }, [login]);

  console.log(login);
  return (
    <div className="App">
      {login && (
        <div className="App-container">
          <div className="App-sidebar">
            <Sidebar
              setFlows={setFlows}
              setLibrary={setLibrary}
              setCalendar={setCalendar}
              setSettings={setSettings}
            />
          </div>
          <div className="App-tab">
            <Tab
              flows={flows}
              library={library}
              calendar={calendar}
              settings={settings}
            />
          </div>
        </div>
      )}
    </div>
  );
}
