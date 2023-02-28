import axios from "axios"

axios.defaults.withCredentials = true
const http = axios.create({
  withCredentials: true,
  baseURL: '/api'
});

function errorResponseHandler(err) {
  console.log(`Возникла ошибка ${err.response.status}`)
  return Promise.reject(err);
}

http.interceptors.response.use(
  response => response,
  errorResponseHandler
);

export default http;