import { httpClient } from "../../utils"
import axios from "axios"

export const register = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await axios.post('http://localhost:4000/user/register', values)
        cbSuccess(data)
    } catch (error) {
        cbFailure(error)
    }
}

export const login = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await axios.post('http://localhost:4000/user/login', values)
        cbSuccess(data)
    } catch (error) {
        console.log(error);
        cbFailure(error)
    }
}