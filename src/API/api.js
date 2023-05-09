import axios from "axios";
const instance = axios.create({
  baseURL: "http://noteflow.live/api",
  withCredentials: true,
});

export default instance;
