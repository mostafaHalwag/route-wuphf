import React, {useContext} from 'react';
import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import {theme} from "../context/Theme.context.jsx";


function Layout() {
    const {mode} = useContext(theme)
    return (
        <>
            <div className={`${mode ==='dark' && 'dark'} flex flex-col min-h-screen justify-between items-center bg-base-100 dark:bg-dark-base-100`} >
                <Navbar></Navbar>
                <div className="container">
                    <Outlet/>
                </div>

                <Footer></Footer>
            </div>
        </>
    );
}

export default Layout;