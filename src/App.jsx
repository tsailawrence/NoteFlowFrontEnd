import Sidebar from "./Components/SideBar/SideBar.jsx";
import Tab from "./Components/Tab/Tab.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import FlowWithProvider from "./pages/Flow/Flow.jsx";
import { useState } from "react";
import Editor from "./Components/Editor/Editor";
import { Login } from "./pages/Login/Login";
import "./scss/App.scss";
import Router from "./Router.jsx";

function App() {
  return <Router/>
  // const [flows, setFlows] = useState(1);
  // const [login, setLogin] = useState(false);
  // return (
  //   <div className="App">
  //     {!login && <Login setLogin={setLogin} />}
  //     {login && (
  //       <>
  //         <div className="App-sidebar">
  //           <Sidebar flows={flows} setFlows={setFlows} />
  //         </div>
  //         <div className="App-tab">
  //           <Tab flows={flows} setFlows={setFlows} />
  //         </div>
  //       </>
  //     )}
  //     {/* <div className="FlowEditor">
  //       <FlowWithProvider/>
  //     </div> */}
  //     {/* <Editor /> */}
  //   </div>
  // );

}

export default App;
