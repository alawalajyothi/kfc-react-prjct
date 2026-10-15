import React from 'react'
import logo from  "../images/logo.webp";
const Hero = () => {
  return (
    <div className='hero'>
      <img src={logo} alt="" />
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className='btn1'>LOGIN</button>
    </div>
  );
};

export default Hero;