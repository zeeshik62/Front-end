import { getApiURL, httpClient, memoryStrings, sls } from "../../../utils"

import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '../../firebase-config'

export const register = async ({ values, cbSuccess, cbFailure }) => {
    try {
        let { email, password, userType } = values
        await createUserWithEmailAndPassword(auth, email, password)
        const { data } = await httpClient.post(`${getApiURL(userType)}/register`, values)
        cbSuccess(data)
    } catch (error) {
        cbFailure(error.message)
    }
}

export const login = async ({ values, cbSuccess, cbFailure }) => {
    try {
        let { email, password, userType } = values
        await signInWithEmailAndPassword(auth, email, password)
        const { data } = await httpClient.post(`${getApiURL(userType)}/login`, values)
        cbSuccess(data)
    } catch (error) {
        cbFailure(error.message)
    }
}

export const logOut = async ({ cbSuccess, cbFailure }) => {
    try {
        await signOut(auth)
        sls.remove(memoryStrings.authorization)
        cbSuccess()
    } catch (error) {
        cbFailure(error)
    }
}