import React, { useContext } from 'react'
import "./DummyApi.css"
import AllProductsComponents from '../AllProductsComponents/AllProductsComponents';
import { cartApiCon } from '../../context/ApiCart';

function DummyApi() {

   const {dummyApi} = useContext(cartApiCon)
  return (
  <div className="Products mt-5 container sec_con">
    <div className="title_sec">
      <p>Dummy Api</p>
    </div>


      <div className="row">
     {dummyApi.map((val , i)=>(
     <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
    
      <AllProductsComponents val={val} i={i} />    
      </div>
      ))}
      </div>
      </div>
  )
}

export default DummyApi
