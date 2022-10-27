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
    },
    hod: "/hod",
    student: "/student"

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
        "Program Organizer": routes.organizer,
        "Supervisor": routes.supervisor,
        "Student": routes.student
    }
    return userTypes[argument]

}
export const memoryStrings = {
    authorization: 'authorizationToken'
}