import axios from "axios"

const URL_DEPLOY = "https://kioskomechi.up.railway.app/"

 const baseURL = URL_DEPLOY
//process.env.baseURL
const USER_ID = 123;

const axiosClient = axios.create({
    baseURL,
    headers: {
        "x-user-id": USER_ID
    }
})

export default axiosClient