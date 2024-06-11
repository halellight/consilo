import React, { useState } from "react";
// import "../styles.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/consilo..png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <span className="consilo">consilo</span>
        <span className="dot">.</span>
      </div>
      <ul className="nav-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
