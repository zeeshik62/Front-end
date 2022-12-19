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
        const { data } = await httpClient.post('teams/create-team', values)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const getTeam = async ({ id, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get('teams/get-team', { params: { id } })
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const getAllDashboardData = async ({ id, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get(`students/${id}`)
        const { data: projectData } = await httpClient.get('projects/')
        cbSuccess(data, projectData);
    } catch (e) {
        cbFailure(e.message);
    }
};
