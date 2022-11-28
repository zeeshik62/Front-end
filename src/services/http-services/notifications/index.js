import { httpClient } from "../../../utils/api";

export const getAllNotifications = async ({ id, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get('notifications/', { params: { id } })
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};
export const acceptNotification = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.put('notifications/accept/', { values })
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};
export const rejectNotification = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.put('notifications/reject/', { values })
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};