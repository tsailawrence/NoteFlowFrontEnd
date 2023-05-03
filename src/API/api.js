import axios from "axios";
const instance = axios.create({
  baseURL: "https://noteflow.live/api",
  withCredentials: true,
});

export default instance;
