import Sidebar from "../../Components/SideBar/SideBar.jsx";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Main.scss";
import FlowGrid from "../../Components/FlowGrid/FlowGrid.jsx";
import PageTab from "../../Components/PageTab/PageTab.jsx";
import Library from "../../Components/Library/Library.jsx";
import { useFlowStorage } from "../../storage/Storage";
import Calendar from "../../Components/Calendar/Calendar.jsx";
import Settings from "../../Components/Settings/Settings.jsx";
export default function Main() {
  const mode = useFlowStorage((state) => state.mode);
  return (
    <div className="App">
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
    </div>
  );
}
