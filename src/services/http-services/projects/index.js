import { getDownloadURL, storage, ref, uploadBytes } from "../../firebase-config";
import { httpClient } from "../../../utils/api";

export const getAllProjects = async ({ cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get('projects/')
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};
export const getProject = async ({ cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.get('projects/')
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const AddNewProject = async ({ values, cbSuccess, cbFailure }) => {
    try {
        let { fileList, projectDescription, projectName, stackName } = values;
        const storageRef = ref(storage, `projectDocuments/${fileList.name}`)
        await uploadBytes(storageRef, fileList)
        // let imageSrc = await getDownloadURL(storageRef)
        let addValue = { projectDescription, projectName, stackName, imageSrc: fileList.name };
        const { data } = await httpClient.post("projects/add-project", addValue)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};
export const fileURL = async ({ values, cbSuccess, cbFailure }) => {
    try {
        let { imagePath } = values;
        const storageRef = ref(storage, `projectDocuments/${imagePath}`)
        // await uploadBytes(storageRef, fileList)
        let imageSrc = await getDownloadURL(storageRef)
        let addValue = { ...values, imagePath: imageSrc };
        cbSuccess(addValue);
    } catch (e) {
        cbFailure(e.message);
    }
};
