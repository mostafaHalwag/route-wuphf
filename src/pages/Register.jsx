"use client";

import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {Alert} from "flowbite-react";
import {HiInformationCircle} from "react-icons/hi";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterScheme} from "../lib/register.scheme.js";
import registerUser from "../apis/register.api.js";


function Register() {

    let [isLoading, setLoading] = useState(false);
    let [error, setError] = useState('');

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(RegisterScheme), defaultValues: {
            name: '', email: '', password: '', rePassword: '', dateOfBirth: '', gender: ''
        }
    });


    async function onSubmit(data) {
    setLoading(true);
        try {
            const res = await registerUser(data);
            console.log(data)

            if(res.message === 'success'){
                console.log(res)
                setLoading(false);
                setError('')
                navigate('/login')
            }
        } catch (error) {
            setLoading(true);
            setError(error?.response?.data?.error);
            setLoading(false);
        }
    }


    return (


        <>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}
                  className="max-w-md mx-auto shadow drop-shadow-base-300 rounded-xl p-5">
                <div>
                    {error && <div
                        className="flex items-center p-4 mb-4 text-sm text-error-content bg-error rounded-lg dark:bg-dark-error dark:text-dark-error-content"
                        role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">{error}</span>
                        </div>
                    </div>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" {...register("name")} id="name"
                           className="block py-2.5 px-0 w-full text-sm text-base-content bg-transparent border-0 border-b-2 border-base-content appearance-none dark:text-dark-base-content dark:border-dark-accent dark:focus:border-dark-accent focus:outline-none focus:ring-0 focus:border-accent peer"
                    />
                    <label htmlFor="name"
                           className="peer-focus:font-medium absolute text-sm text-base-content dark:text-dark-base-content duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-dark-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    {errors.name && <div
                        className="p-4 mb-4 text-sm text-base-content bg-base-300 rounded-lg dark:bg-dark-base-200 dark:text-dark-base-content"
                        role="alert">
                        <span className="font-medium">{errors.name?.message}</span>
                    </div>}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" {...register("email")} id="email"
                           className="block py-2.5 px-0 w-full text-sm text-base-content bg-transparent border-0 border-b-2 border-base-content appearance-none dark:text-dark-base-content dark:border-dark-accent dark:focus:border-dark-accent focus:outline-none focus:ring-0 focus:border-accent peer"
                    />
                    <label htmlFor="email"

                           className="peer-focus:font-medium absolute text-sm text-base-content dark:text-dark-base-content duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-dark-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    {errors.email && <div
                        className="p-4 mb-4 text-sm text-base-content bg-base-300 rounded-lg dark:bg-dark-base-200 dark:text-dark-base-content"
                        role="alert">
                        <span className="font-medium">{errors.email?.message}</span>
                    </div>}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" {...register("password")} id="password"
                           className="block py-2.5 px-0 w-full text-sm text-base-content bg-transparent border-0 border-b-2 border-base-content appearance-none dark:text-dark-base-content dark:border-dark-accent dark:focus:border-dark-accent focus:outline-none focus:ring-0 focus:border-accent peer"
                    />
                    <label htmlFor="password"
                           className="peer-focus:font-medium absolute text-sm text-base-content dark:text-dark-base-content duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-dark-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    {errors.password && <div
                        className="p-4 mb-4 text-sm text-base-content bg-base-300 rounded-lg dark:bg-dark-base-200 dark:text-dark-base-content"
                        role="alert">
                        <span className="font-medium">{errors.password?.message}</span>
                    </div>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" {...register("rePassword")} id="rePassword"
                           className="block py-2.5 px-0 w-full text-sm text-base-content bg-transparent border-0 border-b-2 border-base-content appearance-none dark:text-dark-base-content dark:border-dark-accent dark:focus:border-dark-accent focus:outline-none focus:ring-0 focus:border-accent peer"
                    />
                    <label htmlFor="rePassword"
                           className="peer-focus:font-medium absolute text-sm text-base-content dark:text-dark-base-content duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-dark-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Re-Password</label>
                    {errors.rePassword && <div
                        className="p-4 mb-4 text-sm text-base-content bg-base-300 rounded-lg dark:bg-dark-base-200 dark:text-dark-base-content"
                        role="alert">
                        <span className="font-medium">{errors.rePassword?.message}</span>
                    </div>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="date" {...register("dateOfBirth")} id="dateOfBirth"
                           className="block py-2.5 px-0 w-full text-sm text-base-content bg-transparent border-0 border-b-2 border-base-content appearance-none dark:text-dark-base-content dark:border-dark-accent dark:focus:border-dark-accent focus:outline-none focus:ring-0 focus:border-accent peer"
                           data-date-format="DD/MM/YYYY"/>
                    <label htmlFor="dateOfBirth"
                           className="peer-focus:font-medium absolute text-sm text-base-content dark:text-dark-base-content duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-dark-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date
                        of Birth</label>
                    {errors.dateOfBirth && <div
                        className="p-4 mb-4 text-sm text-base-content bg-base-300 rounded-lg dark:bg-dark-base-200 dark:text-dark-base-content"
                        role="alert">
                        <span className="font-medium">{errors.dateOfBirth?.message}</span>
                    </div>}
                </div>

                <div className="mb-5">
                    <p className="mb-2 text-sm font-medium text-base-content dark:text-dark-base-content">Gender</p>
                    <div className="flex space-x-8">
                        <div className="flex items-center">
                            <input
                                id="gender-male"
                                type="radio"
                                value="male"
                                {...register('gender')}
                                className="w-4 h-4 text-accent bg-transparent border-base-content focus:ring-accent dark:focus:ring-dark-accent dark:ring-offset-dark-base-100 focus:ring-2 dark:bg-dark-base-200 dark:border-dark-base-content"
                            />
                            <label
                                htmlFor="gender-male"
                                className="ms-2 text-sm font-medium text-base-content dark:text-dark-base-content"
                            >
                                Male
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="gender-female"
                                type="radio"
                                value="female"
                                {...register('gender')}
                                className="w-4 h-4 text-accent bg-transparent border-base-content focus:ring-accent dark:focus:ring-dark-accent dark:ring-offset-dark-base-100 focus:ring-2 dark:bg-dark-base-200 dark:border-dark-base-content"
                            />
                            <label
                                htmlFor="gender-female"
                                className="ms-2 text-sm font-medium text-base-content dark:text-dark-base-content"
                            >
                                Female
                            </label>
                        </div>
                    </div>
                    {errors.gender && <div
                        className="p-4 mb-4 text-sm text-base-content bg-base-300 rounded-lg dark:bg-dark-base-200 dark:text-dark-base-content"
                        role="alert">
                        <span className="font-medium">{errors.gender?.message}</span>
                    </div>}
                </div>

                <button type="submit" onClick={() => console.log(errors.name)}
                        className="cursor-pointer text-base-content dark:text-dark-base-300 bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-offset-accent font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark-accent dark:hover:bg-dark-accent dark:focus:ring-dark-accent-content">{(isLoading) ?

                    <div role="status">
                        <svg aria-hidden="true"
                             className="w-8 h-8 text-accent-content dark:text-dark-accent-content animate-spin  fill-base-content dark:fill-dark-base-content"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"/>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>

                    : <>Register</>}
                </button>
                <p className="mt-4 text-sm text-base-content dark:text-dark-base-content text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-accent dark:text-dark-accent hover:underline">
                        Login here
                    </Link>
                </p>
            </form>
        </>

    );
}

export default Register;