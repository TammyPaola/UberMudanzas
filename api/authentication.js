import axios from "axios";

export const apiApp = axios.create({
    baseURL: `http://192.168.1.35:8000/api/v1/`,
})