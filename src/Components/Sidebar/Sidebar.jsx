import React, { useEffect, useState } from "react";
import "./SideBar.scss";
import { useParams } from "../../hooks/useParams";
const Sidebar = () => {
  const {
    setFlows,
    setLibrary,
    setCalendar,
    setSettings,
    tabState,
    activateKey,
  } = useParams();
  const [active, setActive] = useState([true, false, false, false]);
  const items = document.getElementsByClassName("sidebar-item");
  useEffect(() => {
    for (let index = 1; index <= 4; index++) {
      items[index - 1].classList.remove("active-item");
    }
    if (tabState[activateKey] === 0) {
      items[0].classList.add("active-item");
      const tempArray = [true, false, false, false];
      setActive(tempArray);
      return;
    }
    items[tabState[activateKey] - 1].classList.add("active-item");
    const tempArray = [false, false, false, false];
    tempArray[tabState[activateKey] - 1] = true;
    setActive(tempArray);
  }, [tabState, activateKey]);
  return (
    <div className="d-flex sidebar border-end border-secondary">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="" width="60" height="60" />
      </div>
      <div className="row sidebar-item" onClick={() => setFlows(Date.now())}>
        {active[0] ? (
          <img className="col-4" src="src/assets/edit_black_24dp.svg" />
        ) : (
          <img className="col-4" src="src/assets/edit_white_24dp.svg" />
        )}
        <div className="col-6">Flows</div>
      </div>
      <div className="row sidebar-item" onClick={() => setLibrary(Date.now())}>
        {active[1] ? (
          <img
            className="col-4"
            src="src/assets/library_books_black_24dp.svg"
          />
        ) : (
          <img
            className="col-4"
            src="src/assets/library_books_white_24dp.svg"
          />
        )}
        <div className="col-6">Library</div>
      </div>
      <div className="row sidebar-item" onClick={() => setCalendar(Date.now())}>
        {active[2] ? (
          <img
            className="col-4"
            src="src/assets/calendar_month_black_24dp.svg"
          />
        ) : (
          <img
            className="col-4"
            src="src/assets/calendar_month_white_24dp.svg"
          />
        )}
        <div className="col-6">Calendar</div>
      </div>
      <div className="row sidebar-item" onClick={() => setSettings(Date.now())}>
        {active[3] ? (
          <img className="col-4" src="src/assets/settings_black_24dp.svg" />
        ) : (
          <img className="col-4" src="src/assets/settings_white_24dp.svg" />
        )}
        <div className="col-6">Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
