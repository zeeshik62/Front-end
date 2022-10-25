import { useState } from "react";
import { useFormik } from "formik";
import { validationSchemaModel } from "./validation-schema";
const Modal = ({ modelState, close }) => {
  const [showModel, setShowModal] = useState(modelState);
  const [showDescription, setShowDescription] = useState(false);
  const [showUploadFiles, setShowUploadFiles] = useState(false);
  const [descriptionState, setDescriptionState] = useState("");
  const TypeDescription = () => {
    setShowDescription(true);
    setShowUploadFiles(false);
  };
  const UploadFiles = () => {
    setShowDescription(false);
    setShowUploadFiles(true);
  };
  const initialValues = {
    projectName: "",
    descriptionType: "",
    description: "",
    file: null,
  };

  const { handleChange, handleSubmit, touched, handleBlur, errors, values } = useFormik({
    initialValues,
    validationSchema: validationSchemaModel,
    onSubmit: (values) => {
      ApiCall(values);
    },
  });
  const ApiCall = ({ descriptionType, description, ...values }) => {
    console.log(values);
    if (descriptionType === "Type Description") {
      setDescriptionState(descriptionType);
      console.log("hello");
    } else {
      const formData = new FormData();
      const a = formData.append("img", description);
      // setDescriptionState(a);
      // console.log(description);
    }
  };
  return (
    <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
      <div className='relative w-11/12 my-6 mx-auto max-w-3xl'>
        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
            <h3 className='text-3xl font=semibold'>General Info</h3>
            <button className='bg-transparent border-0 text-black float-right' onClick={close}>
              <span className='text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full'>
                x
              </span>
            </button>
          </div>
          <div className='relative p-6   flex-auto'>
            <form onSubmit={handleSubmit} className='w-full'>
              <label className='block text-black text-sm font-bold mb-1'>Project Tittle </label>
              <input
                id='projectName'
                name='projectName'
                type='text'
                value={values.projectName}
                onChange={handleChange}
                onBlur={handleBlur}
                className='w-5/12 shadow appearance-none border rounded py-2 px-1 text-black'
              />
              {errors.projectName && touched.projectName ? (
                <p className='text-xs' style={{ color: "red" }}>
                  {errors.projectName}
                </p>
              ) : null}
              <div className=' mt-10 grid grid-cols-3 gap-4'>
                <div>
                  <input
                    disabled={values.description !== ""}
                    onClick={TypeDescription}
                    name='descriptionType'
                    type='radio'
                    value='Type Description'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='default-radio-1'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Type
                  </label>
                </div>
                <div>
                  <input
                    disabled={values.description !== ""}
                    onClick={UploadFiles}
                    name='descriptionType'
                    type='radio'
                    value='upload Files'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='default-radio-1'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    onChange={UploadFiles}
                  >
                    Upload Files
                  </label>
                </div>
              </div>
              {errors.descriptionType && touched.descriptionType ? (
                <p className='text-xs' style={{ color: "red" }}>
                  {errors.descriptionType}
                </p>
              ) : null}
              {showDescription ? (
                <>
                  <label
                    htmlFor='message'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Your message
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    type='text'
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Your message...'
                  ></textarea>
                </>
              ) : null}
              {showUploadFiles ? (
                <div className='mt-10'>
                  <div className=' w-96'>
                    <label htmlFor='formFile' className='form-label inline-block mb-2 text-gray-700'>
                      Choose only pdf files
                    </label>
                    <input
                      className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                      type='file'
                      id='file'
                      name='file'
                      value={values.file}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              ) : null}
              {errors.file && touched.file ? (
                <p className='text-xs' style={{ color: "red" }}>
                  {errors.file}
                </p>
              ) : null}
              <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                <button
                  className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                  onClick={close}
                >
                  Close
                </button>
                <button
                  className='text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
