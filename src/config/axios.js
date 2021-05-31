import axios from 'axios';
import {BASE_URL} from "./secrets";

let headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'Accept-Language': 'es',
};

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers
});



export default axiosClient;
