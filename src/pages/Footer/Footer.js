import React from "react";
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="Footer-container">
        <div className="Footer-container-main">
          <center>
            <div className="Footer-container-main-header">
              <p>Going-To-Internet</p>
              <p>
                Copyright<FaCopyright></FaCopyright>2021
              </p>
              <p>"All Rights Reserved"</p>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
export default Footer;
