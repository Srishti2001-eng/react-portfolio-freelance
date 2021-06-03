import React from 'react';
import "./Profile.css";
import Card from './Card';
import Pdata from './Pdata';
import Footer from "../Footer/Footer";




const Services = () => {
  return (
    <>

      <h1 className="Profile-heading">PORTFOLIO</h1>
      
      {Pdata.map((val) => {
        return(
      <Card
        imgsrc={val.imgsrc}
        link={val.link}
      />
        );
})};
      <Footer />
    </>

  )
}
export default Services;