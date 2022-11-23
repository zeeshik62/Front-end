import { httpClient } from "../../../utils/api";

export const getAllStudents = async ({ cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get('students/')
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const sendRequestToTeam = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post('students/create-team', values)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};
