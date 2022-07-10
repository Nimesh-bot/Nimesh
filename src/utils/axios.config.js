import axios from "axios";
const access_token = localStorage.getItem('access_token');

const axiosInstance = axios.create({
    baseURL: "https://portfolio-zrhh.onrender.com/",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ access_token
    }
});

axiosInstance.defaults.withCredentials = false;
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;