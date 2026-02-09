import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",  // backend url -> comes from .env file   ;
    withCredentials: true
})



// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         throw error;
//     }
// )


export default axiosInstance;