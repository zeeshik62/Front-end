import Axios from "axios"

export const httpClient = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})