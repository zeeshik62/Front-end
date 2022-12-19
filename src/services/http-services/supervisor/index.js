import { httpClient } from "../../../utils/api";

export const getAllDashboardData = async ({ id, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get(`supervisors/${id}`)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const getChatData = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get("notifications/get-chat", { params: { values } })
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};