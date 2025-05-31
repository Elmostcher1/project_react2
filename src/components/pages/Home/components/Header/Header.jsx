import React from 'react'
import "./Header.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheck } from "react-icons/fa";
import { FaTruckMonster } from "react-icons/fa";

function Header() {
 
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    arrows : false 
  };
 
  return (
    <div className='Header container mt-3'>
    <div className="row">
      <div className="col-lg-8">
        <Slider {...settings} className="slider_slick">
        <div className='men  slider-item'> 
           <div>
            <b>Mn fashon</b>
            <p className='m-0 p-0'>corrupti perferendis, quasi ad vero ipsa molestias cum quis voluptate. Ab explicabo earum eum accusamus neque saepe.</p>
            <button className='btn_shop'>Shop Now</button>
           </div>
          
        </div>
        <div className='women slider-item '> 
           <div>
            <b>Mn fashon</b>
            <p className='m-0 p-0'>corrupti perferendis, quasi ad vero ipsa molestias cum quis voluptate. Ab explicabo earum eum accusamus neque saepe.</p>
            <button className='btn_shop'>Shop Now</button>
           </div>
          
        </div>
        <div className='kids  slider-item'> 
           <div>
            <b>Mn fashon</b>
            <p className='m-0 p-0'>corrupti perferendis, quasi ad vero ipsa molestias cum quis voluptate. Ab explicabo earum eum accusamus neque saepe.</p>
            <button className='btn_shop'>Shop Now</button>
           </div>
          
        </div>

        </Slider>

        </div>
      <div className="col-lg-4">
        <div className='offer'>
          <div className='flex flex-column gap-3'>
            <p className='m-0 p-0 '>Save 20%</p>
            <p className='m-0 p-0'>Special Offer </p>
            <button className='btn_shop'>Shop Now</button>
          </div>
          <div className='flex flex-column gap-3'>
            <p className='m-0 p-0'>Save 20%</p>
            <p className='m-0 p-0'>Special Offer </p>
            <button className=' btn_shop '>Shop Now</button>
          </div>
        </div>
      </div>
      </div>

      <div className=" sec_con">
        <div className="row">
          <div className=" col-lg-3 col-md-6 col-sm-12">
            <div className="div_card">
          <div className='flex gap-2'>
            <span>
            <FaCheck />
            </span>
         <p className='m-0 p-0'>Quality Product</p>
          </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12">
            <div className="div_card">
          <div className='flex gap-2'>
            <span>
            <FaTruckMonster />
            </span>
         <p className='m-0 p-0'>Free Shipping</p>
          </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12">
            <div className="div_card">
          <div className='flex gap-2'>
            <span>

            <FaCheck />
            </span>
         <p className='m-0 p-0'>14-Day Return</p>
          </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12">
            <div className="div_card">
          <div className='flex gap-2'>
            <span>
            <FaTruckMonster />
            </span>
         <p className='m-0 p-0'>24/7 Support</p>
          </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
