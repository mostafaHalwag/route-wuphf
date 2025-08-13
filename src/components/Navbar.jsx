import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../context/Auth.context.jsx";
import {theme} from "../context/Theme.context.jsx";


function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {token, setToken, userData} = useContext(auth)
    const navigate = useNavigate()
    const {toggleMode, mode} = useContext(theme)

    console.log(userData)
    function logOut() {
        localStorage.removeItem('token')
        setToken(null)
        navigate('/')

    }

    return (


        <nav className="w-full bg-base-200 border-gray-200 dark:bg-dark-base-100 shadow">
            <div className=" container w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={(token != null) ? "/home" : "/login"}
                      className="logo text-base-content dark:text-dark-base-content"><h2>Wuphf</h2></Link>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-base-content rounded-lg md:hidden hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-base-300 dark:text-dark-base-content dark:hover:bg-dark-base-300 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false"
                        onClick={toggle}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${!isOpen && 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-base-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-base-200 dark:bg-dark-base-100 md:dark:bg-dark-base-100 dark:border-gray-700">
                        {(token != null) ? <>
                                <li className="flex items-center">
                                    <Link to={"/home"}
                                          className="block py-2 px-3 text-base-content rounded-sm hover:bg-base-300 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-dark-base-content md:dark:hover:text-dark-accent dark:hover:bg-base-300 dark:hover:text-dark-accent md:dark:hover:bg-transparent">
                                        Home
                                    </Link>
                                </li>

                                <li className="flex items-center">
                                    <button
                                        className="block py-2 px-3 text-base-content rounded-sm hover:bg-base-300 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-dark-base-content md:dark:hover:text-dark-accent dark:hover:bg-base-300 dark:hover:text-dark-accent md:dark:hover:bg-transparent cursor-pointer"
                                        onClick={logOut}>
                                        Logout
                                    </button>
                                </li>
                                <li className="flex items-center">
                                    <Link to={`/profile/${userData?._id}`}
                                          className="flex items-center py-2 px-3 text-base-content rounded-sm hover:bg-base-300 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-dark-base-content md:dark:hover:text-dark-accent dark:hover:bg-base-300 dark:hover:text-dark-accent md:dark:hover:bg-transparent">
                                        <img className="w-8 h-8 rounded-full mr-2" src={userData?.photo} alt="Profile"/>
                                        <span>{userData?.name}</span>
                                    </Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="flex items-center">
                                    <Link to={"/login"}
                                          className="block py-2 px-3 text-base-content rounded-sm hover:bg-base-300 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-dark-base-content md:dark:hover:text-dark-accent dark:hover:bg-base-300 dark:hover:text-dark-accent md:dark:hover:bg-transparent">Login</Link>
                                </li>
                                <li className="flex items-center">
                                    <Link to={"/register"}
                                          className="block py-2 px-3 text-base-content rounded-sm bg-accent dark:bg-dark-accent hover:bg-base-300 md:hover:bg-transparent md:hover:border-accent-content md:border-0 md:hover:text-base-content md:p-0 dark:text-base-content md:dark:hover:text-dark-accent dark:hover:bg-base-300 dark:hover:text-dark-accent md:dark:hover:bg-transparent"><span
                                        className="p-3">Register</span></Link>
                                </li>
                            </>}


                        <li className="flex items-center">

                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" onChange={toggleMode}
                                       checked={mode === 'dark'}/>
                                <div
                                    className=" relative w-11 h-6 bg-neutral-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent dark:peer-focus:ring-dark-neutral rounded-full peer dark:bg-dark-neutral peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent dark:peer-checked:bg-dark-accent"></div>

                            </label>

                        </li>


                    </ul>
                </div>
            </div>
        </nav>

    )
        ;
}

export default Navbar;