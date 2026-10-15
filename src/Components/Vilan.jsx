import React from 'react'
import swiggy from "../images/swiggy.webp";
import zomato from "../images/zomato.webp";
import kfc from "../images/kfc_png.webp";

const Vilan = () => {
  return (
    <div className='vilan'>
     <div className='left'>
         <span className='title'>TASTE THE KFC CHICKEN.</span>
         <p>KFC, which stands for Kentucky Fried Chicken, is a popular fast-food restaurant chain known for its fried chicken. It was founded by Colonel Harland Sanders in the United States. KFC chicken is prepared by coating chicken pieces with a special seasoned mixture and cooking them until they become crispy and golden. KFC offers different varieties of chicken, including chicken pieces, wings, strips, burgers, and buckets. It is popular because of its crispy texture and distinctive taste. However, fried chicken can be high in calories, fat, and salt, so it is better to eat it occasionally as part of a balanced diet.
         </p>
      <div className="btns">
         <button className='btn1'>ORDER NOW</button>
         <button className='btn2'>KFC CHICKEN</button>
      </div>

      <div className='social'></div>
         <span className='social-1'>Also Available On</span>

      <div className='social-icons'>
         <img src={swiggy} alt="" />
         <img src={zomato} alt="" />
      </div>
      </div>

     <div className='right'></div>
      <img src={kfc} alt="" />
    </div>
  );
};

export default Vilan;