import axios from "axios";
import { useHistory } from "react-router-dom";

// const hostname = "http://10.24.6.80:8000";
const hostname = "http://127.0.0.1:8000";

const RegisterApi = () => {
  axios.post({});
};

/**
 * Change user current password
 * Server will validate data transfer
 * @param {string} oldpassword - user old password
 * @param {string} password  - user new password
 * @param {string} password2 - reconfirm new password
 * @returns {Promise} httpstatus == 200 === ok
 */
const ChangePasswordApi = (oldpassword, password, password2) => {
  const userid = localStorage.getItem("user_id");
  const formdata = new FormData();
  formdata.append("oldpassword", oldpassword);
  formdata.append("password", password);
  formdata.append("password2", password2);
  return axios.post(hostname + `/changepassword/${userid}/`, formdata);
};

// promise.all
const ServerTimeApi = () => {
  axios.get({});
};

/**
 * Logout api to blacklist refresh token
 * @returns {Promise} will return http 205 status code if success
 */
const LogoutApi = () => {
  const refresh_token = localStorage.getItem("refresh_token");
  const formdata = new FormData();
  formdata.append("refresh_token", refresh_token);
  return axios.post(hostname + "/auth/logout/", formdata);
};

export { RegisterApi, ChangePasswordApi, LogoutApi, ServerTimeApi };
