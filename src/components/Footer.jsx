import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="flex items-center my-5 "><Link to="/mybeloved" className="text-accent dark:text-dark-accent hover:underline">
            Secret Button
        </Link></div>
    );
}

export default Footer;