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
        let { fileList, projectDescription, projectName, stackName, userId } = values;
        const storageRef = ref(storage, `projectDocuments/${fileList.name}`)
        await uploadBytes(storageRef, fileList)
        // let imageSrc = await getDownloadURL(storageRef)
        let addValue = { projectDescription, projectName, stackName, imageSrc: fileList.name, userId };
        const { data } = await httpClient.post("projects/add-project", addValue)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const applyProject = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data: teamData } = await httpClient.get('teams/get-team', { params: { id: values.userId } })
        let value = { ...values, teamId: teamData.teamData[0].teamId }
        const { data } = await httpClient.post("projects/apply-project", value)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};

export const getApplyProject = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post("projects/apply-project", values)
        cbSuccess(data);
    } catch (e) {
        cbFailure(e.message);
    }
};
export const fileURL = async ({ values, cbSuccess, cbFailure }) => {
    try {
        let { project, userId: id } = values;
        const storageRef = ref(storage, `projectDocuments/${project.imagePath}`)
        // await uploadBytes(storageRef, fileList)
        let imageSrc = await getDownloadURL(storageRef)
        const { data } = await httpClient.get("teams/get-team/", { params: { id } })
        const { data: projectData } = await httpClient.get("projects/apply-project", { params: { teamId: data.teamData[0].teamId, projectId: project._id } })
        let _project = { ...values.project, imagePath: imageSrc, applied: projectData._project?.projectId };
        cbSuccess(_project, data);
    } catch (e) {
        cbFailure(e.message);
    }
};
export const getProjectInfo = async ({ values, cbSuccess, cbFailure }) => {
    try {
        let { imagePath } = values;
        const storageRef = ref(storage, `projectDocuments/${imagePath}`)
        // await uploadBytes(storageRef, fileList)
        let imageSrc = await getDownloadURL(storageRef)
        let _project = { ...values, imagePath: imageSrc };
        cbSuccess(_project);
    } catch (e) {
        cbFailure(e.message);
    }
};
