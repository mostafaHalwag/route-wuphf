import React from 'react';
import {Navigate} from "react-router-dom";

function ProtectionRoute({children}) {
    if (localStorage.getItem('token') == null) {
        return <Navigate to={'/'}></Navigate>
    } else {
        return children
    }

}

export default ProtectionRoute;