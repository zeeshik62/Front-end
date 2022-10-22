export const routes = {
    usersCard: "/",
    login: "/login",
    register: "/register"

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