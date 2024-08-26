import React from 'react'
import logo from "../assets/footer_logo.png";
import icons from "../assets/icons.png";
import mail from "../assets/footer-mail.png";
import phone from "../assets/footer-phone.png";
import map from "../assets/map.png";

const Footer = () => {
  return (
    <div className='mx-16 bg-formbg '>
        <div className='flex space-x-24 h-80 bg-cover text-white pt-10 pl-20 backdrop-blur-sm bg-blue-950/40'>
        <div className='space-y-5'>
            <img src={logo} alt="logo" className='w-36'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Soluta facere delectus qui placeat inventore <br />consectetur repellendus optio debitis.</p>
            <img src={icons} alt="social-media icons" className='h-5'/>
        </div>
        <div>
            <h1>Short Link</h1>
            <hr className='w-18 border-t-2 border-orangeclr'/>
            <ol className='space-y-2 pt-5 list-disc marker:text-orangeclr'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Our Service</li>
                <li>Gallery</li>
            </ol>
        </div>
        <div>
            <h3>Help Link</h3>
            <hr className='w-20 border-t-2 border-orange-600'/>
            <ol className='space-y-2 pt-5 list-disc marker:text-orangeclr'>
                <li>Terms & Conditions</li>
                <li>privacy Policy</li>
                <li>Refund Policy</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ol>
        </div>
        <div>
            <h3>Contact Us</h3>
            <hr className='w-20 border-t-2 border-orangeclr'/>
            <div className='space-y-4 pt-9'>
            <div className='flex space-x-2'>
                <img src={phone} alt="phone icon" className='w-3 h-5 '/>
                <p>+44 (0) 20 9994 7740</p>
            </div>
            <hr className='w-18 border-t-2 border-orangeclr'/>
            <div className='flex space-x-2'>
                <img src={mail} alt="mail-icon" className='h-5 w-5'/>
                <p>themefaxbd@gmail.com</p>
            </div>
            <hr className='w-18 border-t-2 border-orangeclr'/>
            <div className='flex space-x-2'>
                <img src={map} alt="map-icon" className='h-5'/>
                <p>Blackwell Street,Dry Creek,Alaska</p>
            </div>
            </div>
        </div>
        </div>
        <div className='h-14 text-2xl pt-3 text-white text-center items-center bg-orangeclr'>
            <a href="#">Home</a>
        </div>
    </div>
  )
}

export default Footer