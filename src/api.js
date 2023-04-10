// 192.168.50.1
// port: 3000
// /api/user/login - post
// parameters(email, password)
// test account: admin@gmail.com
// pwd: sha256(112a)

import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.50.98:3000/api",
  withCredentials: true,
  // timeout: 5000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default instance;
