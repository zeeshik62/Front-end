import { decode } from "../local-storage-items"
import jwt_decode from "jwt-decode";

export const routes = {
    usersCard: "/",
    login: "/login",
    register: "/register",
    supervisor: {
        root: "/supervisor",
        projects: '/supervisor/projects',
        projectDetails: '/supervisor/projects/:id',
        projectRequest: '/supervisor/requests',
    },
    organizer: {
        root: "/program-organizer",
        projects: '/program-organizer/projects',
        students: '/program-organizer/students',
        addProject: '/program-organizer/add-project',
        addStudent: '/program-organizer/add-students',
        projectDetails: '/program-organizer/projects/:id',
        projectRequest: '/program-organizer/requests',

    },
    student: {
        root: '/student',
        dashboard: '/student/dashboard',
        showProjects: '/student/projects',
        applyProjects: '/student/apply-project',
        studentViewProjects: '/student/student-view-projects/:id',
        teamMembers: '/student/team-members',
        notifications: '/student/notifications',
    },
    hod: "/hod",

}

export const currentUser = (argument) => {
    const userTypes = {
        hod: "Head Of Department",
        po: "Program Organizer",
        sup: "Supervisor",
        student: 'Student'
    }
    return userTypes[argument]

}

export const getURL = (argument) => {
    const userTypes = {
        "Head Of Department": routes.hod,
        "Program Organizer": routes.organizer.root,
        "Supervisor": routes.supervisor.root,
        "Student": routes.student.root
    }
    return userTypes[argument]

}

export const getApiURL = (argument) => {
    const userTypes = {
        "Head Of Department": routes.hod,
        "Program Organizer": "/program-organizers",
        "Supervisor": "/supervisors",
        "Student": "/students"
    }
    return userTypes[argument]

}
export const memoryStrings = {
    authorization: 'authorizationToken'
}

export const appConfig = {
    appColor: '#818cf8'
}


export const niceBytes = (x) => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    let l = 0, n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
        n = n / 1024;
    }
    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

export const getUserFromLocal = () => {
    if (decode(memoryStrings.authorization)) {
        let _user = jwt_decode(decode(memoryStrings.authorization));
        return _user
    }
}