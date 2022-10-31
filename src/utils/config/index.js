export const routes = {
    usersCard: "/",
    login: "/login",
    register: "/register",
    supervisor: "/supervisor",
    organizer: {
        root: "/program-organizer",
        projects: '/program-organizer/projects',
        students: '/program-organizer/students',
        addProject: '/program-organizer/add-project',
        addStudent: '/program-organizer/add-students',
        projectDetails: '/program-organizer/projects/:id',

    },
    student: {
        root: '/student',
        showProjects: '/program-student/projects',
        applyProjects: '/program-student/apply-project',
        studentViewProjects: '/program-student/student-view-projects/:id',


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
        "Supervisor": routes.supervisor,
        "Student": routes.student.root
    }
    return userTypes[argument]

}
export const memoryStrings = {
    authorization: 'authorizationToken'
}


export const niceBytes = (x) => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    let l = 0, n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
        n = n / 1024;
    }
    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}