import { httpClient } from "../../../utils/api";

export const getAllDashboardData = async ({ id, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get(`program-organizers/${id}`)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};