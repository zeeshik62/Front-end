import * as Yup from "yup";


export const validationSchemaModel = Yup.object({

    projectName: Yup.string().required("Please enter your name"),
    descriptionType: Yup.string().required("Please choose option"),
    //     file: Yup.mixed().required('A file is required')
    //         .test('fileFormat', 'PDF only', (value) => {
    //             console.log(value); return value && ['application/pdf'].includes(value.type);
    //         }),
});
    // const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];



        //   Yup.mixed().nullable().required().test(
        //     "FILE_FORMAT",
        //     "file formate is unsupported ",
        //     (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
        // )