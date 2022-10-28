import { httpClient } from "../../../utils"

export const register = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post('user/register', values)
        cbSuccess(data)
    } catch (error) {
        cbFailure(error)
    }
}

export const login = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post('user/login', values)
        cbSuccess(data)
    } catch (error) {
        cbFailure(error)
    }
}