import { Link, useLocation, useNavigate } from "react-router-dom";
import { currentUser, getURL, routes } from "../../utils/config";
import { Formik } from "formik";
import { validationSchema } from "./sign-up.schema";
import { register } from "../../services/http-services";
import { toast } from "react-toastify";
import { AppLoader } from "../../components/common";
import { useDispatch } from "react-redux";
import { slice as userSlice } from "../../store/slices/user";
import jwt_decode from "jwt-decode";
import { useState } from "react";

const SignUp = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    userType: currentUser(state.userType),
  };

  const handleRegister = (values) => {
    setLoading(true);
    register({
      values,
      cbSuccess: (data) => {
        let decodedUser = jwt_decode(data.token);
        toast.success(data.message);
        dispatch(userSlice.actions.user(decodedUser));
        navigate(getURL(data.userType));
        setLoading(false);
      },
      cbFailure: (error) => {
        setLoading(false);
        toast.error(error.message);
      },
    });
  };

  return (
    <div className='m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500'>
      {loading ? <AppLoader linkTitle='signing up' /> : null}
      <main className='mt-0 transition-all duration-200 ease-soft-in-out'>
        <div className='bg-register-pattern relative flex items-start pt- pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl'>
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
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      handleRegister(values);
                    }}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                          <input
                            className='text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow'
                            placeholder='full name'
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
                            placeholder='doe@email.com'
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
                        <div className='mb-4 relative'>
                          <input
                            className='text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow'
                            placeholder='password should be 8 chars minimum.'
                            aria-label='Password'
                            aria-describedby='password-addon'
                            autoComplete='off'
                            id='password'
                            name='password'
                            type={showPassword ? "text" : "password"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          <div className='absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 hover:cursor-pointer'>
                            <svg
                              className={`h-4 text-[#8C8C8C] ${!showPassword ? "hidden" : "block"}`}
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 576 512'
                              onClick={() => setShowPassword((prevState) => !prevState)}
                            >
                              <path
                                fill='currentColor'
                                d='M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z'
                              ></path>
                            </svg>

                            <svg
                              className={`h-4 text-[#8C8C8C] ${showPassword ? "hidden" : "block"}`}
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 640 512'
                              onClick={() => setShowPassword((prevState) => !prevState)}
                            >
                              <path
                                fill='currentColor'
                                d='M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z'
                              ></path>
                            </svg>
                          </div>
                          {errors.password && touched.password ? (
                            <p style={{ color: "red" }} className='form-error text-xs mt-1'>
                              {errors.password}
                            </p>
                          ) : null}
                        </div>
                        <div className='text-center'>
                          <button
                            className='inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white'
                            type='submit'
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
                    )}
                  </Formik>
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
