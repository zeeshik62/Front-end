import { httpClient } from "../../utils"
import axios from "axios"

export const register = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await axios.post('http://localhost:4000/user/register', values)
        cbSuccess(data.message)
    } catch (error) {
        cbFailure(error.message)
    }
}

export const login = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await axios.post('http://localhost:4000/user/login', values)
        cbSuccess(data)
    } catch (error) {
        console.log(error.response.data);
        cbFailure(error.response.data)
    }
}