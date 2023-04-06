import React from "react";
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import jwt_decode from "jwt-decode";
import "./Login.scss";

// gcloud 註冊的 ＮoteFlow Project 帳號
const client_id =
  "951808884400-hap9nnfiqanq4r0nh9uin5o3t5asmpc6.apps.googleusercontent.com";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.picture} alt="" />
      <h3>{user.name}</h3>
    </div>
  );
};

const Login = ({ setLogin }) => {
  const [user, setUser] = useState({}); // user 是 google 回傳的 object, 可以拿去 render profile 頁面
  const divRef = useRef(null);

  const handleCallbackResponse = (res) => {
    const userObject = jwt_decode(res.credential);
    console.log(userObject);
    setUser(userObject);
    setLogin(true);
  };

  const handleLogOut = (e) => {
    setUser({});
  };

  const handleSubmit = () => {
    console.log("submit");
    setLogin(true);
  };

  useEffect(() => {
    /* global google */
    if (divRef.current) {
      google.accounts.id.initialize({
        client_id: client_id,
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "dark",
        width: "330",
      });

      google.accounts.id.prompt();
    }
  }, [divRef.current]);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      divRef.current.style.display = "flex";
    } else {
      divRef.current.style.display = "none";
    }
  }, [user]);

  return (
    <div className="login">
      <div className="login-container">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="" width="190" height="190" />
          <h1>NoteFlow</h1>
        </div>
        <div className="info">
          <h2>Log in</h2>

          <div className="infoContainer">
            {Object.keys(user).length === 0 && (
              <>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ margin: "10px 15px" }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="small"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    style={{ backgroundColor: "#0e1111" }}
                  >
                    Log in
                  </Button>
                  <div
                    className="links"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link href="#" variant="body2" style={{ color: "#414a4c" }}>
                      Forgot password?
                    </Link>
                    <Link href="#" variant="body2" style={{ color: "#414a4c" }}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </div>
                </Box>
              </>
            )}
          </div>
          <div className="horizontalLine">
            <span>OR</span>
          </div>
          <div id="signInDiv" ref={divRef}></div>
          {user && <Profile user={user} />}

          {/* {Object.keys(user).length !== 0 && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              style={{ backgroundColor: "#0e1111" }}
              onClick={(e) => {
                handleLogOut(e);
              }}
            >
              Log out
            </Button>
          )} */}

          <div
            className="links"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "65%",
            }}
          >
            <Link href="#" variant="body2" style={{ color: "#414a4c" }}>
              Doesn't have an account yet?
            </Link>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#0e1111", width: "50%" }}
              onClick={(e) => {
                handleLogOut(e);
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login, Profile };
