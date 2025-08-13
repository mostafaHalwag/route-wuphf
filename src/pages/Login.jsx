import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import login from "../apis/login.api.js";
import {auth} from "../context/Auth.context.jsx";

function Login() {
    const {setToken} = useContext(auth)
    let [isLoading, setLoading] = useState(false);
    let [error, setError] = useState('');
    let navigate = useNavigate()

    const {register, handleSubmit,formState:{errors}} = useForm({
        defaultValues: {
            email: '', password: ''
        }
    })

    async function onSubmit(data) {
        setLoading(true);
        try {
            const res = await login(data);
            console.log(res.token)

            if (res.message === 'success') {
                setLoading(false);
                setError('')
                navigate('/home')
                setToken(res.token)
                localStorage.setItem('token', res.token)
                console.log(localStorage.getItem('token'))
            }
        } catch (error) {
            setLoading(true);
            setError(error?.response?.data?.error);
            setLoading(false);
        }
    }

    return (


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
                <input type="email" {...register("email")} id="email"
                       className="block py-2.5 px-0 w-full text-sm text-base-content bg-transparent border-0 border-b-2 border-base-content appearance-none dark:text-dark-base-content dark:border-dark-accent dark:focus:border-dark-accent focus:outline-none focus:ring-0 focus:border-accent peer"
                       placeholder=" " required/>
                <label htmlFor="email"
                       className="peer-focus:font-medium absolute text-sm text-base-content dark:text-dark-base-content duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-dark-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" {...register("password")} id="password"
                       className="block py-2.5 px-0 w-full text-sm text-base-content bg-transparent border-0 border-b-2 border-base-content appearance-none dark:text-dark-base-content dark:border-dark-accent dark:focus:border-dark-accent focus:outline-none focus:ring-0 focus:border-accent peer"
                       placeholder=" " required/>
                <label htmlFor="password"
                       className="peer-focus:font-medium absolute text-sm text-base-content dark:text-dark-base-content duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-dark-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button type="submit" onClick={() => console.log(`Errors = ${errors.name}`)}
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

                : <>Login</>}
            </button>
            <p className="mt-4 text-sm text-base-content dark:text-dark-base-content text-center">
                Don't have an account?{' '}
                <Link to="/register" className="text-accent dark:text-dark-accent hover:underline">
                    Register here
                </Link>
            </p>
        </form>

    );
}

export default Login;