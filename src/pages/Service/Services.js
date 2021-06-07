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
            className="facts"
            imgsrc="./image/fg.jpg"
            link="https://instagram.com/facts.gyaan?utm_medium=copy_link"
          />
          <Card
            imgsrc="./image/pt.jpg"
            link="https://instagram.com/facttoxic?utm_medium=copy_link"
          />
          <Card
            imgsrc="./image/ve-sc.jpg"
            link="https://instagram.com/versatile_science?utm_medium=copy_link"
          />
        </div>
        <div className="profile-image-container-main">
          <Card
            imgsrc="./image/vv.jpg"
            link="https://instagram.com/vivaankarulkar?utm_medium=copy_link"
          />

          <Card
            imgsrc="./image/fatt.jpg"
            link="https://instagram.com/plex_tree_official?utm_medium=copy_link"
          />

          <Card
            imgsrc="./image/vivsreel.jpg"
            link="https://instagram.com/vivastroreels?utm_medium=copy_link"
          />
        </div>
      </div>
    </>
  );
};
export default Services;
