import React from 'react'
import "./Slider2.css"
import slider1 from "../../../../../assets/images/vendor-6-CmmiMxIm.jpg"
import slider2 from "../../../../../assets/images/vendor-7-BBAmhwW7 (1).jpg"
import slider3 from "../../../../../assets/images/download (1).jpeg"
import slider4 from "../../../../../assets/images/download (2).jpeg"
import slider5 from "../../../../../assets/images/download.jpeg"
import slider6 from "../../../../../assets/images/spinner.gif"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slider2() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows : false ,
      autoplay: true,
  autoplaySpeed: 500,
    slidesToScroll: 1 ,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
  };
  return (
    <div className='Slider2 container sec_con'>
      <div className='row '>

      <Slider {...settings} >
        <div className="col-3">
          <div className='me-2'> 
            <div className='div_img'>
              <img src={slider1} alt='' />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className='me-2'> 
            <div className='div_img'>
              <img src={slider2} alt='' />
            </div>
            </div>
        </div>
        <div className="col-3">
          <div className='me-2'> 
            <div className='div_img'>
              <img src={slider3} alt='' />
            </div>
            </div>
        </div>
        <div className="col-3">
          <div className='me-2'> 
            <div className='div_img'>
              <img src={slider4} alt='' />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className='me-2'> 
            <div className='div_img'>
              <img src={slider1} alt='' />
            </div>
            </div>
        </div>
        <div className="col-3">
          <div className='me-2'> 
            <div className='div_img'>
              <img src={slider5} alt='' />
            </div>
            </div>
        </div>
        <div className="col-3">
          <div className='me-2'> 
            <div className='div_img'>
              <img src={slider6} alt='' />
            </div>
            </div>
        </div>

      </Slider>
      </div>
    </div>
  )
}

export default Slider2
