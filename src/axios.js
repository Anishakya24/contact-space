import axios from "axios";

const axiosInstance = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://contact-app-backend-six.vercel.app/",
        // baseURL: "http://localhost:3000/",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    })
}

export default axiosInstance;