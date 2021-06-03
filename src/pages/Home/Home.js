import React from 'react'
import Footer from '../Footer/Footer'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import Dynamictext from "./DynamicText/Dynamictext"
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-main">
        <header className="image-div">
          <div className="container">
            <div className="row">

              <div className="header-section">
                <div className="header-main">
                  <div className="header-main-scroll"></div>
                  <h5>Hi,I am</h5>
                  <h1>VIVAAN PRASHANT KARULKAR</h1>
                  <Dynamictext/>
                </div>
                <div className="header-content">
                  <ul className="header-ul">
                    <li>
                      <a href="http://"></a><FaFacebookF />
                    </li>
                    <li>
                      <a href="http://"></a><FaTwitter />
                    </li>
                    <li>
                      <a href="http://"></a><FaYoutube />
                    </li>
                    <li>
                      <a href="http://"></a><FaInstagramSquare />
                    </li>
                    <a href="#sec-2">
                      <div className="scroll-down"></div>
                    </a>
                  </ul>

                </div>
              </div>

            </div>
          </div>

        </header>
        <section id="sec-2">
          <div className="header-bottom">
            <div className="header-bottom-heading">
              <div></div>
              <div className="header-bottom-heading-main">
                <h1>ABOUT ME</h1>
                <centre>
                  <div className="header-bottom-border "></div>
                </centre></div>

              <div></div>
            </div>

            <div className="header-bottom-div">
              <div className="header-bottom-div-one">
                <h1>Vivaan Prashant Karulkar</h1>
                <p>My name is Vivaan Prashant Karulkar. I am 14 years old,<br /> studying in high school, and living in Mumbai,India.<br />Having hands-on experience of 3 years in managing<br /> Instagram accounts and handling promotions.
             </p>
                <ul className="header-bottom-div-one-ul">
                  <li><MdLocationOn />Mumbai,India</li>
                  <li><HiPhone />632-90383459</li>
                  <li><HiMail />VivaanPrashantKarulkar@gmail.com</li>
                </ul>
              </div>
              <div className="header-bottom-div-two">
                <div className="header-bottom-div-two-image"></div>
              </div>
              <div className="header-bottom-div-three">
                <h1>My Professional Skills</h1>
                <p>Expert in managing Instagram accounts .I have 3 Instagram pages which are @versatile_science, @facts.gyaan, and @facttoxic, with over 120,000 followers. I have filed a patent on NEO detection (name: Vivastro). I am the founder of a mobile application that helps in supporting the environment, named Plextree. I also have a channel with about 1000 subscribers called “Versatile Science” on Youtube. And obviously, I have published a book titled “Why so scared?”.</p>
              </div>
            </div>


          </div>
        </section>

      </div>

      <Footer/>

    </>
  )
};

export default Home;