import { storage, ref, uploadBytes } from "../../firebase-config";
import { httpClient } from "../../../utils/api";

export const sendAnnouncement = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { file, description, userId, studentList, supervisorList } = values
        const storageRef = ref(storage, `projectAnnouncement/${file.name}`)
        await uploadBytes(storageRef, file)
        let putValues = { description, userId, fileName: file.name, studentList, supervisorList }
        const { data } = await httpClient.post('notifications/announcement/', putValues)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const getDropdownItems = async ({ cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get('supervisors/')
        const { data: students } = await httpClient.get('students/')
        cbSuccess(data, students);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const getAllAnnouncement = async ({ cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get('notifications/announcement')
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};