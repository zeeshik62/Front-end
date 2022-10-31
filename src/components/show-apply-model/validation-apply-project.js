import * as Yup from "yup";

export const validationApplyForm = Yup.object({
    name: Yup.string().required("Please enter Name"),
    rollNo: Yup.number().required("Please enter Roll no"),
    email: Yup.string().required("Please enter email"),
    date: Yup.string().required("Please enter date"),
    projectTitle: Yup.string().required("Please select Project"),
});