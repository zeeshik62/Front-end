import { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { currentUser, getURL, routes } from "../../utils/config";
import { validationSchema } from "./sign-in-schema";
import { login } from "../../services/http-client";
import { sls, memoryStrings } from "../../utils";
import { AppLoader } from "../../components/common";
import bg from "../../assets/img/curved6.jpg";
import back from "../../assets/icons/arrow-left.png";
import { useDispatch } from "react-redux";
import { slice as userSlice } from "../../store/slices/user";
import jwt_decode from "jwt-decode";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    userType: currentUser(state.userType),
  };

  const handleLogin = (values) => {
    setLoading(true);
    login({
      values,
      cbSuccess: (data) => {
        let decodedUser = jwt_decode(data.token);
        sls.encode(memoryStrings.authorization, data.token);
        dispatch(userSlice.actions.user(decodedUser));
        navigate(getURL(data.userType));
        toast.success(data.message);
        setLoading(false);
      },
      cbFailure: (error) => {
        setLoading(false);
        toast.error(error.message);
      },
    });
  };
  if (!state.userType) return navigate(routes.usersCard);
  return (
    <div className='m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500'>
      {loading ? <AppLoader linkTitle='signing up' /> : null}
      <main className='mt-0 transition-all duration-200 ease-soft-in-out'>
        <div className='relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen'>
          <div className='container z-10'>
            <div className='flex flex-wrap mt-0 -mx-3'>
              <div className='flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12'>
                <div className='relative flex flex-col min-w-0 mt-16 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border'>
                  <div className='p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl'>
                    <div
                      className='flex place-items-center mb-8 hover:cursor-pointer'
                      onClick={() => navigate(routes.usersCard)}
                    >
                      <img alt='' src={back} height={42} width={42} />
                      <span className='ml-2'>Back</span>
                    </div>
                    <h3 className='relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text'>
                      Welcome {currentUser(state?.userType)}
                    </h3>
                    <p className='mb-0'>Enter your email and password to sign in</p>
                  </div>
                  <div className='flex-auto p-6'>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={(values) => {
                        handleLogin(values);
                      }}
                    >
                      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                          <label className='mb-2 ml-1 font-bold text-xs text-slate-700'>Email</label>
                          <div className='mb-4'>
                            <input
                              className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow'
                              placeholder='doe@email.com'
                              aria-label='Email'
                              aria-describedby='email-addon'
                              autoComplete='off'
                              type='email'
                              id='email'
                              name='email'
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                              <p style={{ color: "red" }} className='form-error text-xs mt-1'>
                                {errors.email}
                              </p>
                            ) : null}
                          </div>
                          <label className='mb-2 ml-1 font-bold text-xs text-slate-700'>Password</label>
                          <div className='mb-4 relative'>
                            <input
                              className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow'
                              placeholder='password should be 8 chars minimum.'
                              aria-label='Password'
                              aria-describedby='password-addon'
                              autoComplete='off'
                              id='password'
                              name='password'
                              type={showPassword ? "text" : "password"}
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
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
                            {errors.password && touched.password && (
                              <p style={{ color: "red" }} className='form-error text-xs mt-1'>
                                {errors.password}
                              </p>
                            )}
                          </div>
                          <Link className='w-full flex items-center justify-end'>
                            <p className='text-xs hover:underline'>Forget Password</p>
                          </Link>
                          <div className='text-center'>
                            <button
                              className='inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85'
                              type='submit'
                            >
                              Sign in
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                  <div className='p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2'>
                    <p className='mx-auto mb-6 leading-normal text-sm'>
                      Don't have an account? Register
                      <Link
                        state={state}
                        to={routes.register}
                        className='relative z-10 pl-1 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text'
                      >
                        here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12'>
                <div className='absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block'>
                  <div className='absolute inset-x-0 top-0 z-0 -ml-16 bg-cover skew-x-10'>
                    <img src={bg} alt='bg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
