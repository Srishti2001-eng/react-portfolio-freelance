import React from "react";
import Form from "./Form";
import Footer from "../Footer/Footer";
import "./Contact.css";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { FiRss } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className=" Contact-container">
        {/* <h1 className="text-center" style={{paddingTop: "20%"}}>
        Contact Us
      </h1> */}

        <div className="Contact-heading">
          <div className="contact-heading-header">
            <div className="contact-heading-header-text">
              <h1>WANNA MAKE YOUR BRAND GO VIRAL?</h1>
              <p>Send me a "Hi" on Telegram, Let's start your next project!</p>
            </div>
            <div className="contact-heading-header-button">
              <a className="contact-heading-header-link" href="https://t.me/Vivaan2007">
                <button className="contact-heading-header-link-button">
                  LET'S CONNECT
                </button>
              </a>
            </div>
          </div>
          <div
            className="Contact-heading-main"
            style={{
              paddingTop: "1%",
              fontWeight: "700",
              fontSize: "36px",
              display: "flex",
            }}
          >
            <h1>SAY HELLO TO ME</h1>
            <centre>
              <div className="Contact-border "></div>
            </centre>
          </div>

          <div></div>
        </div>

        <div className="Contact-form-main">
          <div className="Contact-form-div">
            <div className="Contact-form-div-one">
              <Form />
            </div>

            <div className="Contact-form-div-two">
              <div className="Contact-form-div-two-text">
                <h4>
                  <MdLocationOn></MdLocationOn>ADDRESS
                </h4>
                <p>Mumbai,India</p>
              </div>
            </div>
            <div className="Contact-form-div-three">
              <div className="Contact-form-div-three-text">
                <h4>
                  <MdEmail></MdEmail>EMAIL
                </h4>
                <p>vivaankarulkarofficial@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
