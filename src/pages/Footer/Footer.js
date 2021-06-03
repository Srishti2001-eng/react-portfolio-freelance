import React from 'react';
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="Footer-container">
                <div className="Footer-container-main">
                    <div className="Footer-container-main-header">
                        <p>Going-To-Internet</p>
                        <p>Designed by Srishti Shrivastava , Copyright<FaCopyright></FaCopyright>2021</p>
                        <p> "All Rights Reserved" </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Footer;