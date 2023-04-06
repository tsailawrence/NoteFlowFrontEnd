import "./Sidebar.scss";
const Sidebar = ({ flows, setFlows }) => {
  return (
    <div className="d-flex sidebar border-end border-secondary">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="" width="60" height="60" />
      </div>
      <div className="row sidebar-item" onClick={() => setFlows(flows + 1)}>
        <img className="col-5" src="src/assets/edit_white_24dp.svg" />
        <div className="col-5 text">Flows</div>
      </div>
      <div className="row sidebar-item">
        <img className="col-5" src="src/assets/library_books_white_24dp.svg" />
        <div className="col-5 text">Library</div>
      </div>
      <div className="row sidebar-item">
        <img className="col-5" src="src/assets/calendar_month_white_24dp.svg" />
        <div className="col-5 text">Calendar</div>
      </div>
      <div className="row sidebar-item">
        <img className="col-5" src="src/assets/settings_white_24dp.svg" />
        <div className="col-5 text">Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
