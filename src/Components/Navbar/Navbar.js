import React, { useState } from "react";
import { MenuList } from "./MenuList";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import profilrimg from "../../images/portfolio-image.jpg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleMenuClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="nav-menu">
        <img src={profilrimg} />
        <div>
        <h3>Vivaan Prashant Karulkar</h3>
        <div className="nav-bttn">
        <a href="https://t.me/Vivaan2007">
          <button className>Chat With Vivaan</button>
        </a>
      </div>
        </div>

      </div>
      <div className="menu-icon" onClick={handleMenuClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>

      
    </nav>
  );
};

export default Navbar;
