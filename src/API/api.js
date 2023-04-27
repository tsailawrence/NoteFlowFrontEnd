import axios from "axios";
const instance = axios.create({
  baseURL: "http://140.112.107.71:3000/api",
  withCredentials: true,
});

export default instance;
