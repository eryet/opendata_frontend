import axios from "axios";
import { useHistory } from "react-router-dom";
const hostname = "http://10.24.6.80:8000";

const LogIn = (username, password) => {
  const formdata = new FormData();
  formdata.append("username", username);
  formdata.append("password", password);
  console.log(formdata);
  return axios.post(hostname + "/auth/login/", formdata);
};

const GetUser = () => {
  return axios.get(hostname + "/users/");
};

export { LogIn, GetUser };
