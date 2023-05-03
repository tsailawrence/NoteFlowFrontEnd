// 192.168.50.1
// port: 3000
// /api/user/login - post
// parameters(email, password)
// test account: admin@gmail.com
// pwd: sha256(112a)

console.log(import.meta.env.VITE_API_URL);

import axios from "axios";
const instance = axios.create({
  baseURL: "https://noteflow.live/api",
  withCredentials: true,
  // timeout: 5000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default instance;
