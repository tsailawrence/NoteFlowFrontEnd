import "./Sidebar.scss";
const Sidebar = ({ setFlows, setLibrary, setCalendar, setSetting }) => {
  return (
    <div className="d-flex sidebar border-end border-secondary">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="" width="60" height="60" />
      </div>

      <div className="row sidebar-item" onClick={() => setFlows(Date.now())}>
        <img className="col-4" src="src/assets/edit_white_24dp.svg" />
        <div className="col-7">Flows</div>
      </div>
      <div className="row sidebar-item" onClick={() => setLibrary(Date.now())}>
        <img className="col-4" src="src/assets/library_books_white_24dp.svg" />
        <div className="col-7">Library</div>
      </div>
      <div className="row sidebar-item" onClick={() => setCalendar(Date.now())}>
        <img className="col-4" src="src/assets/calendar_month_white_24dp.svg" />
        <div className="col-7">Calendar</div>
      </div>
      <div className="row sidebar-item" onClick={() => setSetting(Date.now())}>
        <img className="col-4" src="src/assets/settings_white_24dp.svg" />
        <div className="col-7">Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
