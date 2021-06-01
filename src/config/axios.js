import axios from 'axios';
import {BASE_URL} from "./secrets";


 export async function commitHistory(request) {
    try {
        const resource = 'commits';
        const response = await axios.post(BASE_URL+resource, request);
        console.log(response, 'try')
        return response.data;
    } catch (error) {
        console.log(error, 'catch')
        if (error.response) {
            return error.response.data;
        } else if (error.request) {
            const response = {
                success: false,
                code: 102,
            };
            return response;
        } else {
            const response = {
                success: false,
                code: 10,
            };
            return response;
        }
    }
}




