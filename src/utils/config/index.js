export const routes = {
    usersCard: "/",
    login: "/login",
    register: "/register",
    supervisor: "/supervisor-das",
    organizer: "/organizer-das",
    hod: "/hod",
    student: "/student"

}

export const currentUser = (argument) => {
    const userTypes = {
        hod: "Head Of Department",
        "po": "Program Organizer",
        sup: "Supervisor",
        student: 'Student'
    }
    return userTypes[argument]

}
export const memoryStrings = {
    authorization: 'authorizationToken'
}