import "./App.scss";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Tab from "./Components/Tab/Tab.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
function App() {
  const [flows, setFlows] = useState(1);
  return (
    <>
      <div className="App-sidebar">
        <Sidebar flows={flows} setFlows={setFlows} />
      </div>
      <div className="App-tab">
        <Tab flows={flows} setFlows={setFlows} />
      </div>
    </>
  );
}

export default App;
