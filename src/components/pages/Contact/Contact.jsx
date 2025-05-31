import React from 'react'
import "./Contact.css"
import { FaCrosshairs } from "react-icons/fa6";

function Contact() {
  return (
      <div className='Contact container sec_con'>
      <div className='title_sec'>
      <p className='text-dark'>Contact <span>Us</span> </p>
      </div>
      <div className='sec-body row '>
         <div className='sec-form col-md-7 mt-2  bg-white p-3 rounded'>
        <form className='d-flex flex-column gap-5'>
          <input type="text" className='input-contact  px-2' placeholder='Name'/>
          <input type="text" className='input-contact  px-2' placeholder='Email'/>
          <input type="text" className='input-contact  px-2' placeholder='Subject'/>
          <input type="text" className='input-contact  massage  px-2' placeholder='Massage'/>
          <button className='btn btn-warning text-dark fs-5 p-2'>Send Massage</button>
        </form>
         </div>
         <div className="col-md-5 d-flex  mt-2 algin-items-center  flex-column gap-2">
          <div className="map w-75 bg-white p-3 rounded" >
            <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3521362674496!2d31.499302325344377!3d30.595829392237796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sar!2seg!4v1713800005950!5m2!1sar!2seg" frameborder="0"></iframe>
          </div>
          <div className="date_map d-flex  flex-column gap-2 w-75 bg-white p-3 rounded">
            <p className='m-0 p-0 d-flex  gap-3 fs-5'><span style={{color : 'rgb(211, 182, 20)'}}>< FaCrosshairs /></span>Egypt - Sharkia - Zagazig</p>
            <p className='m-0 p-0 d-flex  gap-3 fs-5'><span style={{color : 'rgb(211, 182, 20)'}}>< FaCrosshairs /></span>bravocoading123@gmail.com</p>
            <p className='m-0 p-0 d-flex  gap-3 fs-5'><span style={{color : 'rgb(211, 182, 20)'}}>< FaCrosshairs /></span>+0123456789</p>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
