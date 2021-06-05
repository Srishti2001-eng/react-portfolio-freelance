import React from "react";
import "./Home.css";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import profilrimg from "../../images/portfolio-image.jpg";
import Dynamictext from "./DynamicText/Dynamictext"

const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <div className="home-header">
          <div className="home-header-text">
            <h5>Hi,I am</h5>
            <h1>VIVAAN PRASHANT KARULKAR</h1>
            <Dynamictext/>
          </div>
          <div className="home-header-icons">
            <div></div>
            <ul className="home-header-ul">
              <li>
                <a href="https://t.me/Vivaan2007">
                  <FaTelegram />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCG8sg9QlaC3oLRex6z9vd_w">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href=" https://instagram.com/versatile_science?utm_medium=copy_link">
                  <FaInstagramSquare />
                </a>
              </li>
              {/* <a href="#sec-2">
                <div className="scroll-down"></div>
              </a> */}
            </ul>
            <div></div>
          </div>
        </div>

        <section id="sec-2">
          <div className="home-mid">
            <div></div>
            <div>
              <h1>ABOUT ME</h1>
              <centre>
                <div className="header-bottom-border "></div>
              </centre>
            </div>
            <div></div>
          </div>

          <div className="home-mid-about mb">
            <div className="home-mid-name ">
              <h1>Vivaan Prashant Karulkar</h1>
              <p>
                My name is Vivaan Prashant Karulkar. I am 14 years old,
                <br /> studying in high school, and living in Mumbai,India.
                <br />
                Having hands-on experience of 3 years in managing
                <br /> Instagram accounts and handling promotions.
              </p>
              <ul className="header-bottom-div-one-ul">
                <li>
                  <MdLocationOn />
                  Mumbai,India
                </li>
                <li>
                  <HiMail />
                  vivaankarulkarofficial@gmail.com
                </li>
              </ul>
            </div>
            <div className="home-mid-pic pulse">
              <img src={profilrimg} />
            </div>
            <div className="home-mid-skill">
              <h1>My Professional Skills</h1>
              <p>
                Expert in managing Instagram accounts .I have 3 Instagram pages
                which are @versatile_science, @facts.gyaan, and @facttoxic, with
                over 120,000 followers. I have filled a patent on NEO detection
                (name: Vivastro). I am the founder of a mobile application that
                helps in supporting the environment, named Plextree. I also have
                a channel with about 1000 subscribers called “Versatile Science”
                on Youtube. And obviously, I have published a book titled “Why
                so scared?”.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
