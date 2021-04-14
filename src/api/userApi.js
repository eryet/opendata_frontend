import axios from "axios"

// axios api for user login

const server = "https://127.0.0.1/"

const LoginApi = (formData) => {
    axios.post({
      method: "post",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    })
    .then((response) => {return response})
    .catch((error) => {
      console.log(error)
      return error
    })
}

const RegisterApi = (formData) => {
  axios.post({})
}

const ForgetPasswordApi = () => {
 axios.post({}) 
}

// promise.all
const ServerTimeApi = () => {
  axios.get({})
}

const LogoutApi = () => {
  axios.get({})  
}

export {
  LoginApi, 
  RegisterApi,
  ForgetPasswordApi,
  LogoutApi,
  ServerTimeApi,
}
