import axios from "axios"

const server = "https://127.0.0.1/"

const refreshToken = (userData) => {
  axios.get({
    headers: "Bearer" + localStorage.getItem("refreshToken")
  })
}

// check life status of token!