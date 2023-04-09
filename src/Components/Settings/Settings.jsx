const settingsTemplate = {
  name: "Settings",
  key: 0,
  bar: (
    <div className="row m-0 content-top-bar">
      <div className="col-auto d-flex align-items-center justify-content-around me-auto">
        <img
          className="content-top-bar-pic me-2"
          src="src/assets/settings_white_24dp.svg"
        />
        <div className="text-white">Settings</div>
      </div>
    </div>
  ),
  layout: () => {
    return (
      <div className="content-body">
        <div className="row settings">
          <div className="col-md-11 border-end border-secondary">
            <div className="row">
              <div className="col-md-7 d-flex justify-content-center align-items-center">
                <div class="circle">
                  <img src="src/assets/person_black_24dp.svg" alt="" />
                </div>
              </div>
              <div className="col-md-5 d-flex flex-column justify-content-center align-items-start information">
                <div className="userName my-3">Lawrence Tsai</div>
                <div className="userEmail my-3">Email: lawrence@gmail.com</div>
                <div className="userPassword my-3">
                  <span className="me-3">Password:</span>
                  <button>Reset Password</button>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-sidebar m-0 p-0 col-md-1 d-flex flex-column justify-content-start align-items-center">
            <div className="row profile-button m-0 p-0">
              <img
                className="col-md-4 m-0 p-1"
                src="src/assets/person_white_24dp.svg"
              />
              <div className="col-md-7 m-0 p-0 d-flex align-items-center">
                Profile
              </div>
            </div>
            <div className="row theme-button m-0 p-0">
              <img
                className="col-md-4 m-0 p-1"
                src="src/assets/light_mode_black_24dp.svg"
              />
              <div className="col-md-7 m-0 p-0 d-flex align-items-center">
                Theme
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  content: [],
};
export default settingsTemplate;
