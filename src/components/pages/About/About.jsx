import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import img from '../../../assets/images/about.jpg'


function About() {
  return (
      <div className='About container sec_con'>
      <div className='title_sec'>
      <p className='text-dark'>About <span>Us</span> </p>
      </div>
      <div className='sec-body '> 
        <div className="row mx-auto">
      <div className='col-lg-6 ' style={{width : '460px'  , height : '300px'}}>
        <img src={img} alt="" srcset=""  style={{width : '100%'  , height : '100%'}}/>
      </div>
      <div className='detalis col-lg-6 d-flex  gap-3 flex-column'>
       <b className='fs-1'>Welcome To Bravo Shop</b>
       <p className='m-0 p-0 fs-5'><span  style={{color  : 'rgb(211, 182, 20)'}}>Bravo Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.</p>
       <button className='w-25 btn_about btn btn-warning '><Link className='text-dark'  to={'/shop'}>Shop Now</Link></button>
      </div>
      </div>

        </div>
      </div>
  )
}

export default About
