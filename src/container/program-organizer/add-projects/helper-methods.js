export const options = [
    { value: "ANDROID", label: "Android" },
    { value: "FULL_STACK", label: "Full Stack" },
    { value: "IOS", label: "IOS" },
    { value: "WEB_APP", label: "Web Application" },
];
export const makeSupervisor = (array) => {
    return array.map(el => { return { id: el._id, value: el.name, label: el.name } })
}
export const makeStudents = (array) => {
    let arr = array.map(el => { return { id: el._id, value: el.section, label: el.section } })
    return arr.filter((v, i, a) => a.findIndex(v2 => (v2.value === v.value)) === i)

}

export const getPhoto = ({ state, setImageUri, setState }) => (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    var regex = new RegExp(
        "([a-zA-Z0-9s_\\.-:])+(.jpg|.JPG|.png|.PNG|.gif|.jpeg|.svg)$"
    );
    if (regex.test(file.name)) {
        reader.onloadend = () => {
            var image = new Image();
            image.src = reader.result;
            image.onload = () => {
                // if (image.width <= 400 && image.height <= 120) {
                setState({ ...state, projectImage: file });
                setImageUri(reader.result);
                // }
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert("Wrong file extension...");
    }
};
