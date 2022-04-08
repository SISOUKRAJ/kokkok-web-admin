import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL_V1;

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
});

axiosPrivate.interceptors.response.use(
    response => response,
    error => {
        // console.log(error);
        if (error.response.status === 401) {
            alert("Please Login and Try again");
            localStorage.clear();
            window.location.reload();
        }
        return Promise.reject(error);
    }
)