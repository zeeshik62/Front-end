import * as Yup from "yup";
import * as EmailValidator from "email-validator";

export const validationSchema = Yup.object().shape({
    projectName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
        .label("Project Name"),
    stackName: Yup.string().required("Required").label("Stack Name"),
    projectDescription: Yup.string(),
});

export const additionalValidation = (developers, setDevelopers) => {
    let error = false;

    developers.forEach((dev) => {
        if (dev.name === "") {
            dev.nameError = "Required";
            error = true;
        } else dev.nameError = "";
        if (!dev.email) {
            dev.emailError = "";
            return;
        }
        if (!EmailValidator.validate(dev.email)) {
            dev.emailError = "Please enter a valid email";
            error = true;
        } else dev.emailError = "";
    });
    setDevelopers([...developers]);
    return error;
};
