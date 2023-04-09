import { useEffect, useState } from "react";
import "./Tab.scss";
import { Navigate, useNavigate } from "react-router-dom";
import userFlows from "../../data";

const Tab = ({ flows }) => {
  // 暫時用，之後會連後端拿資料
  const tempFlows = {
    //tab的名字與key
    name: "Flows",
    key: 0,
    // 每個tab上方的工具欄/搜尋列，需事先定義好
    bar: (
      <div className="row m-0 content-top-bar">
        <div className="col-auto d-flex align-items-center justify-content-around me-auto">
          <img
            className="content-top-bar-pic me-2"
            src="src/assets/edit_white_24dp.svg"
          />
          <div className="text-white">Flows</div>
        </div>
        <div className="col-auto d-flex align-items-center justify-content-around ms-auto">
          <img
            className="content-top-bar-pic me-2"
            src="src/assets/sort_white_24dp.svg"
          />
          <div className="text-white">Oldest to newest</div>
        </div>
      </div>
    ),
    // Flows頁面中會出現的Flow列表
    content: userFlows,
    // 之後會再加一個attribute，支援單一Flow要render出來的功能
  };
  const [key, setKey] = useState(1);
  const [tabs, setTabs] = useState([tempFlows]);
  const [tabState, setTabState] = useState({ 0: 1 });
  const navigate = useNavigate();

  useEffect(() => {
    if (tabs.length === 0) {
      setTabs([tempFlows]);
      return;
    }
    const activeLinks = document.getElementsByClassName("nav-link active")[0];
    if (activeLinks === undefined) {
      const navLinks = document.getElementsByClassName("nav-link");
      navLinks[navLinks.length - 1].classList.add("active");
      const tabPanes = document.getElementsByClassName("tab-pane");
      tabPanes[tabPanes.length - 1].classList.add("active");
    }
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
    navigate('/flow',{state:flow});
  };
  useEffect(() => {
    const activeKey = parseInt(
      document
        .getElementsByClassName("nav-link active")[0]
        .getAttribute("data-bs-target")
        .match(/\d+/g)[0]
    );
    if (tabState[activeKey] === 0) {
      const { [activeKey]: temp, ...rest } = tabState;
      setTabState({ ...rest, [activeKey]: 1 });
      const tempTabs = [...tabs];
      const currentTab = tabs.filter((obj) => obj.key === activeKey)[0];
      const index = tempTabs.indexOf(currentTab);
      tempTabs[index].name = "Flows";
      setTabs(tempTabs);
    }
  }, [flows]);
  return (
    <div className="container">
      <div className="row d-flex align-middle topnavbar">
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
      </div>
      <div className="row d-flex align-middle">
        <div className="col-md-12 p-0">
          <div className="tab-content" id="pills-tabContent">
            {tabs.map((tab) => (
              <div
                className="tab-pane show active"
                id={"pills-" + tab.key}
                key={tab.key}
                role="tabpanel"
                aria-labelledby={"pills-" + tab.key + "-tab"}
              >
                {/* Flow頁面的工具欄會放在state variable後嵌入於此 */}
                {tab.bar}
                {/* 目前content-body僅處理Flows頁面的排列，之後會修改如何呈現Flow頁面的區塊 */}
                {tabState[tab.key] ? (
                  <div className="content-body py-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-evenly">
                      {tab.content.map((item) => {
                        if (item.src !== undefined) {
                          return (
                            <div
                              className="mt-4 px-3 content-item"
                              key={item.name}
                            >
                              <div
                                className="content-item-pic"
                                onClick={() => {intoFlow(tab.key, item.name, item)}}
                              ></div>
                              <div className="d-flex content-item-desc">
                                <div className="me-auto">{item.name}</div>
                                <div className="ms-auto">
                                  Edited {item.time} hours ago
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              className="mt-4 px-3 content-item"
                              key={item.name}
                            ></div>
                          );
                        }
                      })}
                    </div>
                  </div>
                ) : (
                  //Flow頁面的筆記內容會嵌入於此
                  // <div className="content-body">Temp Flow</div>
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
