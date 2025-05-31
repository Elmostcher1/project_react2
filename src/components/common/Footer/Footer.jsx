import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";

function Footer() {
  return (
    <div className='Footer sec_con '>
      <div className="row">
        <div className="col-md-3">
        <div className="card_footer flex flex-column text-center gap-4">
          <p className='fs-3 m-0 p-0'>Get In Touch</p>
          <p className='m-0 p-0'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
        </div>
        </div>
        <div className="col-md-3">
        <div className="card_footer flex flex-column text-center gap-4">
          <p className='fs-3 m-0 p-0'>QUICK SHOP</p>
          <p className='m-0 p-0'>About</p>
          <p className='m-0 p-0'>Shop</p>
          <p className='m-0 p-0'>Cotact</p>
          <p className='m-0 p-0'>Cart</p>
        </div>
        </div>
        <div className="col-md-3">
        <div className="card_footer flex flex-column text-center gap-4">
          <p className='fs-3 m-0 p-0'>SHOP Media</p>
          < FaFacebookF/>
          < FaInstagram/>
          < FaTwitter/>
          < BsTwitterX/>
          < BsTwitch/>
        </div>
        </div>
        
        <div className="col-md-3">
        <div className="card_footer flex flex-column text-center gap-4">
          <p className='fs-3 m-0 p-0'>NewsSletter</p>
        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
        <div className='flex'>
        <input type="text" className='form-control  border-redu_1' />
        <button className='btn btn-warning border-redu'>Button</button>
        </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
