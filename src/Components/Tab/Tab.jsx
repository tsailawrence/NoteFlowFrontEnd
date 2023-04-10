import { useEffect, useState, useRef } from "react";
import "./Tab.scss";
import flowsTemplate from "../Flows/Flows";
import libraryTemplate from "../Library/Library";
import calendarTemplate from "../Calendar/Calendar";
import settingsTemplate from "../Settings/Settings";
import PageTab from "../PageTab/PageTab";
import { useNavigate } from "react-router-dom";
import { useFlowStorage } from "../../storage/Storage";

const Tab = ({ flows, library, calendar, settings }) => {
  // 暫時用，之後會連後端拿資料
  const tempFlows = flowsTemplate;
  const tempLibrary = libraryTemplate;
  const tempCalendar = calendarTemplate;
  const tempSettings = settingsTemplate;
  const [flowsRef, setFlowsRef] = useState(flows);
  const [libraryRef, setLibraryRef] = useState(library);
  const [calendarRef, setCalendarRef] = useState(calendar);
  const [settingsRef, setSettingsRef] = useState(settings);
  const [key, setKey] = useState(1);
  const [tabs, setTabs] = useState([tempFlows]);
  const [tabState, setTabState] = useState({ 0: 1 });
  const navigate = useNavigate();
  const addFlow = useFlowStorage((state) => state.addFlow);

  const userFlows = useFlowStorage((state) => state.flows);
  tempFlows.content = userFlows;


  useEffect(() => {
    if (tabs.length === 0) {
      
      setTabs([tempFlows]);
      return;
    }
    // const activeLinks = document.getElementsByClassName("nav-link active")[0];
    // if (activeLinks === undefined) {
    //   const navLinks = document.getElementsByClassName("nav-link");
    //   navLinks[navLinks.length - 1].classList.add("active");
    //   const tabPanes = document.getElementsByClassName("tab-pane");
    //   tabPanes[tabPanes.length - 1].classList.add("active");
    // }
  }, [tabs]);
  const cancelTab = (target) => {
    const filteredArr = tabs.filter((obj) => obj.key !== target);
    const { [target]: temp, ...rest } = tabState;
    setTabState({ ...rest });
    setTabs(filteredArr);
  };
  const addTab = () => {
    const navLink = document.getElementsByClassName("nav-link active")[0];
    navLink.classList.remove("active");
    const tabPane = document.getElementsByClassName("tab-pane active")[0];
    tabPane.classList.remove("active", "show");
    // just for test
    const addFlows = { ...tempFlows, key: key };
    const num = 3 - (addFlows.content.length % 3);
    for (let index = 0; index < num; index++) {
      addFlows.content = [
        ...addFlows.content,
        { src: undefined, name: "undefined" + index },
      ];
    }
    // just for test
    setKey(key + 1);
    setTabState({ ...tabState, [key]: 1 });
    setTabs([...tabs, addFlows]);
    
  };
  const intoFlow = (target, name, flow) => {
    const { [target]: temp, ...rest } = tabState;
    setTabState({ ...rest, [target]: 0 });
    const tempTabs = [...tabs];
    const currentTab = tabs.filter((obj) => obj.key === target)[0];
    const index = tempTabs.indexOf(currentTab);
    tempTabs[index].name = name;
    setTabs(tempTabs);
    navigate('/flow',{ state:flow });
  };
  const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dateString = year + "-" + month + "-" + day;
    return dateString;
  };
  const addNewFlow = () => {
    const payload = {
      id: "user1"+Math.floor(Math.random() * 10000),
      name: "untitle",
      time: "0",
      nextNodeId: 1,
      nodes:[],
      edges:[],
      viewport:{}
    }
    addFlow(payload);
    console.log("hi")
  }
  useEffect(() => {
    // const activeKey = parseInt(
    //   document
    //     .getElementsByClassName("nav-link active")[0]
    //     .getAttribute("data-bs-target")
    //     .match(/\d+/g)[0]
    // );
    let mode;
    let template;
    if (flowsRef !== flows) {
      mode = 1;
      template = tempFlows;
      setFlowsRef(flows);
    } else if (libraryRef !== library) {
      mode = 2;
      template = tempLibrary;
      setLibraryRef(library);
    } else if (calendarRef !== calendar) {
      mode = 3;
      template = tempCalendar;
      setCalendarRef(calendar);
    } else if (settingsRef !== settings) {
      mode = 4;
      template = tempSettings;
      setSettingsRef(settings);
    } else {
      return;
    }
    const { [activeKey]: temp, ...rest } = tabState;
    setTabState({ ...rest, [activeKey]: mode });
    let tempTabs = [...tabs];
    const currentTab = tabs.filter((obj) => obj.key === activeKey)[0];
    const index = tempTabs.indexOf(currentTab);
    let newTab = { ...tempTabs[index] };
    newTab.name = template.name;
    newTab.bar = template.bar;
    newTab.layout = template.layout;
    newTab.content = template.content;
    tempTabs[index] = newTab;
    setTabs(tempTabs);
  }, [flows, library, calendar, settings]);
  return (
    <div className="container">
      {/* <div className="row d-flex align-middle topnavbar">
        <img
          className="col-auto home-pic"
          src="src/assets/home_white_24dp.svg"
        />
        <div className="col-auto d-flex p-0">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-item" role="presentation" key={tab.key}>
                <button
                  className="nav-link active d-flex align-items-center justify-content-between"
                  id={"pills-" + tab.key + "-tab"}
                  data-bs-toggle="pill"
                  data-bs-target={"#pills-" + tab.key}
                  type="button"
                  role="tab"
                  aria-controls={"pills-" + tab.key}
                  aria-selected="true"
                >
                  <div className="button-name me-2">{tab.name}</div>
                </button>
                <div
                  className="button-close"
                  onClick={() => {
                    cancelTab(tab.key);
                  }}
                >
                  <img
                    className="button-close-pic"
                    src="src/assets/close_white_24dp.svg"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img
          className="col-auto add-pic"
          src="src/assets/add_white_24dp.svg"
          onClick={() => addTab()}
        />
      </div> */}
      <PageTab addNewFlow = {addNewFlow}/>
      <div className="row d-flex align-middle">
        <div className="col-md-12 p-0">
          <div className="tab-content" id="pills-tabContent">
            {tabs.map((tab) => {
              return (
                <div
                  className="tab-pane show active"
                  id={"pills-" + tab.key}
                  key={tab.key}
                  role="tabpanel"
                  aria-labelledby={"pills-" + tab.key + "-tab"}
                >
                  {tab.bar}
                  {tabState[tab.key] === 1 ? (
                    tempFlows.layout(tab, intoFlow)
                  ) : tabState[tab.key] === 2 ? (
                    tempLibrary.layout(tab, intoFlow)
                  ) : tabState[tab.key] === 3 ? (
                    tempCalendar.layout(tab, intoFlow, getDate)
                  ) : tabState[tab.key] === 4 ? (
                    tempSettings.layout()
                  ) : (
                    <div className="content-body">not implemented</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
