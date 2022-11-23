import { useFormik } from "formik";
import React from "react";
import FormButton from "../../components/common/form-button";
import { validationApplyForm } from "./validation-apply-project";

const ApplyProjectsModel = ({ close }) => {
  const arr = ["FYP Management", "LCD Management", "KPK Management", "TLT Management"];
  const initialValues = {
    name: "",
    rollNo: "",
    email: "",
    date: "",
    projectTitle: "",
  };
  const { handleChange, handleBlur, handleSubmit, touched, values, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: validationApplyForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-full my-6 mx-auto max-w-4xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'></div>
            {/*body*/}
            <form className='w-full max-w-xlg p-10' onSubmit={handleSubmit}>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='grid-first-name'
                  >
                    First Name
                  </label>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                    id='grid-first-name'
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Name'
                  />
                  {errors.name && touched.name ? (
                    <p className='text-red-500 text-xs italic'>{errors.name}</p>
                  ) : null}
                </div>
                <div className='w-full md:w-1/2 px-3'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='grid-last-name'
                  >
                    Roll no{" "}
                  </label>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='rollNo'
                    type='text'
                    name='rollNo'
                    placeholder='Enter Your roll no'
                    value={values.rollNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.rollNo && touched.rollNo ? (
                    <p className='text-red-500 text-xs italic'>{errors.rollNo}</p>
                  ) : null}
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='grid-password'
                  >
                    Email
                  </label>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter Your Email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className='text-red-500 text-xs italic'>{errors.email}</p>
                  ) : null}
                  <p className='text-gray-600 text-xs italic'>Make it as long and as crazy as you'd like</p>
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-2'>
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='grid-city'
                  >
                    Submission Date
                  </label>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='submission-date'
                    type='date'
                    name='date'
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.date && touched.date ? (
                    <p className='text-red-500 text-xs italic'>{errors.date}</p>
                  ) : null}
                </div>
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='grid-state'
                  >
                    Select Project
                  </label>
                  <div className='relative'>
                    <select
                      className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-state'
                      name='projectTitle'
                      value={values.projectTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {arr.map((e) => {
                        return <option>{e}</option>;
                      })}
                    </select>
                    {errors.projectTitle && touched.projectTitle ? (
                      <p className='text-red-500 text-xs italic'>{errors.projectTitle}</p>
                    ) : null}
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                      <svg
                        className='fill-current h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <FormButton text='Submit' />
            </form>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default ApplyProjectsModel;
