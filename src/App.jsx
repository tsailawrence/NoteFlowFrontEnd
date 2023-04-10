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

function App() {
  const [flows, setFlows] = useState(0);
  const [library, setLibrary] = useState(0);
  const [calendar, setCalendar] = useState(0);
  const [setting, setSetting] = useState(0);
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {!login && <Login setLogin={setLogin} />}
      {login && (
        <>
          <div className="App-sidebar">
            <Sidebar
              setFlows={setFlows}
              setLibrary={setLibrary}
              setCalendar={setCalendar}
              setSetting={setSetting}
            />
          </div>
          <div className="App-tab">
            <Tab
              flows={flows}
              library={library}
              calendar={calendar}
              setting={setting}
            />
          </div>
        </>
      )}
      {/* <div className="FlowEditor">
        <FlowWithProvider />
      </div> */}
      {/* <Editor /> */}
    </div>
  );
}

export default App;
