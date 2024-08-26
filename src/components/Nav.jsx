import React from "react";
import logo from "../assets/logo.png";
import groupicon from "../assets/icons.png";
import mail from "../assets/mail-icon.png";
import phone from "../assets/phone-icon.png";
import user from "../assets/user-icon.png";
import cart from "../assets/cart.png";

const Nav = () => {
  return (
    <div className="parant-div">
      <nav>
        <div className="flex bg-navbg w-100% h-7 items-center">
          <div className="flex  h-7 w-1/2 justify-center">
          <div className="flex bg-orangeclr w-2/3 justify-center rounded-tl-full rounded-tr-full items-center gap-3">
          <img src={mail} alt="mail icon" className="w-5 h-5"/>
          <p>examplemail@gmail.com</p>
          <img src={phone} alt="phone icon" className=" pl-1 w-4 h-4"/>
          <p>+9647384984984949</p></div>
          </div>
          <div className="w-1/2 pl-[600px]">
          <img src={groupicon} alt="social-media icons"/>
        </div>
        </div>
        <div className="flex h-20 w-100% items-center space-x-60">
          <img src={logo} alt="logo" className="h-10 pl-20"/>
          <div className="space-x-10">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Chefs</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex space-x-16 w-10 h-5">
            <img src={cart} alt="cart icon" />
            <img src={user} alt="user icon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;