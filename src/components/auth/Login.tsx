import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TermsandCondition } from './TermsandCondition';
import lock from '../../assets/lock.svg'
import email from '../../assets/email.svg'
import eyeopen from '../../assets/eyeopen.svg'
import eyeclose from '../../assets/eyeclose.svg'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
const Login: React.FC<{switchView:(id:number)=>void}> = ({switchView})=> {
    const [visible, toggle] = useState(false);
    const navigate = useNavigate()
    const {login} = useAuth()
    const formik = useFormik({
        initialValues: {
           
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
           
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(
                    6,
                    'Password must be at least 6 characters'
                )
                .required('Password is required'),
        }),
        onSubmit: async(values) => {
            login(values)
            navigate('/dashboard')
            // console.log('Form submitted:', values);
        },
    });

    const isFormValid = formik.isValid && formik.dirty;

    return (
        <div className='min-h-screen flex items-center justify-center bg-[#f8f9fb] px-4 min-w-[400px]'>
            <form
                onSubmit={formik.handleSubmit}
                className='bg-white shadow-xl rounded-xl p-8 w-full max-w-md'
            >
                <h2 className='text-2xl font-semibold text-gray-800 mb-1'>
                    Log in to your account
                </h2>
                <p className='text-gray-500 mb-6 text-[13px] text-left'>
                    Proceed to log in to your account with your credential.
                </p>


                {/* Email */}
                <div className='mb-4'>
                    <div className='relative'>
                    <img src={email} alt='lock' className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <input
                            type='email'
                            name='email'
                            placeholder='Work email'
                            className='pl-10 pr-4 py-2 w-full border  focus:border-none rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500'
                            onChange={
                                formik.handleChange
                            }
                            onBlur={
                                formik.handleBlur
                            }
                            value={
                                formik.values
                                    .email
                            }
                        />
                        {/* {formik.touched.email &&
                        !formik.errors.email && (
                            <img src={tick} alt='good'
                                
                                className='absolute right-4 top-3'
                            />)} */}
                    </div>
                    {formik.touched.email &&
                        formik.errors.email && (
                            <div className='text-red-500 text-xs mt-1'>
                                {
                                    formik
                                        .errors
                                        .email
                                }
                            </div>
                        )}
                </div>

                {/* Password */}
                <div className='mb-6'>
                    <div className='relative'>
                        <img src={lock} alt='lock' className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                        <input
                            type={
                                visible
                                    ? 'password'
                                    : 'text'
                            }
                            name='password'
                            placeholder='Password'
                            className='pl-10 pr-4 py-2 w-full border  focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                            onChange={
                                formik.handleChange
                            }
                            onBlur={
                                formik.handleBlur
                            }
                            value={
                                formik.values
                                    .password
                            }
                        />
                        {visible ? (
                                                <img src={eyeopen} alt='eyeopen' className='  text-gray-400 w-4 h-4 absolute right-4 top-3' 

                                onClick={() =>
                                    toggle(
                                        !visible
                                    )
                                }
                            />
                        ) : (
                            <img src={eyeclose} alt='eyeopen' className='    text-gray-400 w-4 h-4 absolute right-4 top-3' 

                            onClick={() =>
                                toggle(
                                    !visible
                                )
                            }
                        />
                        )}
                    </div>
                    {formik.touched.password &&
                        formik.errors.password && (
                            <div className='text-red-500 text-xs mt-1'>
                                {
                                    formik
                                        .errors
                                        .password
                                }
                            </div>
                        )}
                </div>

                {/* Submit */}
                <button
                    type='button'
                    disabled={!isFormValid}
onClick={()=>formik.handleSubmit()}
                    className={` ${
                        isFormValid
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    } w-full py-3 rounded-md  font-medium transition `}
                >
                    Login
                </button>
                <TermsandCondition />
                <p className='text-left text-sm text-gray-600 mt-4 '>
                    Don't have account?{' '}
                    <span onClick={()=>switchView(1)}><a
                        href='#'
                        className='text-orange-500 hover:underline font-medium'
                    >
                        Register
                    </a></span>
                </p>
            </form>
        </div>
    );
};

export default Login;
