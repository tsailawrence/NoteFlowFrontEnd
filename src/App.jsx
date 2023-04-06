import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Tab from "./Components/Tab/Tab.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import Editor from "./Components/Editor/Editor";
import { Login } from "./pages/Login/Login";
import "./scss/App.scss";

function App() {
  const [flows, setFlows] = useState(1);
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      {/* {!login && <Login setLogin={setLogin} />}
      {login && (
        <>
          <div className="App-sidebar">
            <Sidebar flows={flows} setFlows={setFlows} />
          </div>
          <div className="App-tab">
            <Tab flows={flows} setFlows={setFlows} />
          </div>
        </>
      )} */}
      <Editor />
    </div>
  );
}

export default App;
