import { Link, useLocation } from "react-router-dom";
import { currentUser, routes } from "../../utils/config";
import { useFormik } from "formik";
import { SignUpSchema } from "./sign-up.schema";
import { register } from "../../services/http-client";
import { toast } from "react-toastify";

const SignUp = () => {
  const { state } = useLocation();
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    userType: state.userType,
  };
  const { handleBlur, handleChange, touched, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      register({
        values,
        cbSuccess: (data) => {
          console.log("data", data);
          toast.success(data.message);
        },
        cbFailure: (error) => {
          console.log(error);
          toast.success(error.message);
        },
      });
    },
  });
  return (
    <div className='m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500'>
      <main className='mt-0 transition-all duration-200 ease-soft-in-out'>
        <div className='bg-sign-up-pattern relative flex items-start pt- pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl'>
          <span className='absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60'></span>
        </div>
        <div className='container'>
          <div className='flex flex-wrap -mx-3 -mt-10 sm:-mt-60 md:-mt-60 lg:-mt-60'>
            <div className='w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12'>
              <div className='relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border'>
                <div className='p-2 mt-4 text-center bg-white border-b-0 rounded-t-2xl'>
                  <h5>Register {currentUser(state.userType)}</h5>
                </div>
                <div className='flex-auto p-6'>
                  <form onSubmit={handleSubmit} role='form text-left'>
                    <div className='mb-4'>
                      <input
                        className='text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow'
                        placeholder='Full Name'
                        aria-label='Name'
                        aria-describedby='email-addon'
                        autoComplete='off'
                        type='text'
                        id='userName'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userName}
                      />
                      {errors.userName && touched.userName ? (
                        <p style={{ color: "red" }} className='form-error text-xs mt-1'>
                          {errors.userName}
                        </p>
                      ) : null}
                    </div>
                    <div className='mb-4'>
                      <input
                        className='text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow'
                        placeholder='Email'
                        aria-label='Email'
                        aria-describedby='email-addon'
                        autoComplete='off'
                        type='email'
                        id='email'
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <p style={{ color: "red" }} className='form-error text-xs mt-1'>
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className='mb-4'>
                      <input
                        className='text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow'
                        placeholder='Password'
                        aria-label='Password'
                        aria-describedby='password-addon'
                        autoComplete='off'
                        id='password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <p style={{ color: "red" }} className='form-error text-xs mt-1'>
                          {errors.password}
                        </p>
                      ) : null}
                    </div>
                    <div className='text-center'>
                      <button
                        type='submit'
                        className='inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white'
                      >
                        Sign up
                      </button>
                    </div>
                    <p className='mt-4 mb-0 leading-normal text-sm'>
                      Already have an account? Login{" "}
                      <Link
                        to={routes.login}
                        state={state}
                        className='font-bold text-slate-700 hover:cursor-pointer'
                      >
                        here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
