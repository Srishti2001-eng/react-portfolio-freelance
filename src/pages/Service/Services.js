import React from "react";
import "./Profile.css";
import Card from "./Card";
import Pdata from "./Pdata";
import Footer from "../Footer/Footer";

const Services = () => {
  return (
    <>
      <div className="Profile-container-main">
        <h1 className="Profile-heading">Social Pages</h1>

        <div className="profile-image-container-main">
          <Card
            imgsrc="./image/fg.jpg"
            link="https://www.instagram.com/facttoxic/?utm_medium=copy_link"
          />
          <Card
            imgsrc="./image/pt.jpg"
            link="https://www.instagram.com/plex_tree_official/?utm_medium=copy_link"
          />
          <Card
            imgsrc="./image/ve-sc.jpg"
            link="https://www.instagram.com/versatile_science/?utm_medium=copy_link"
          />
        </div>
        <div className="profile-image-container-main">
        <Card
            imgsrc="./image/vv.jpg"
            link="https://www.instagram.com/vivaankarulkar/?utm_medium=copy_link"
          />

          <Card
            imgsrc="./image/fatt.jpg"
            link="https://instagram.com/facts.gyaan?utm_medium=copy_link"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Services;
