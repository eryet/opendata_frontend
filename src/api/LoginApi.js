import axios from "axios";
import { useHistory } from "react-router-dom";
// const hostname = "http://10.24.6.80:8000";
const hostname = "http://127.0.0.1:8000";

const LogInApi = (username, password) => {
  const formdata = new FormData();
  formdata.append("username", username);
  formdata.append("password", password);
  return axios.post(hostname + "/auth/login/", formdata);
};

const googleLogInApi = (token) => {
  const formdata = new FormData();
  formdata.append("access_token", token);
  formdata.append("code", "");
  return axios.post(hostname + "/auth/google/login/", formdata);
};

const GetUserApi = () => {
  return axios.get(hostname + "/users/");
};

export { LogInApi, GetUserApi, googleLogInApi };
