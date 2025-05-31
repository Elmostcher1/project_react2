import React, { useContext } from 'react'
import "./Shop.css"
import login from '../../../assets/images/spinner.gif'
import AllProductsComponents from '../AllProductsComponents/AllProductsComponents';
import { cartApiCon } from '../../context/ApiCart';

function Shop() {
  const {allData}  = useContext(cartApiCon)
  return (
        <div className="Products mt-5 container sec_con">
         <div className="title_sec">
      <p>Shopping Cart</p>
    </div>
      <div className="row">
{allData ?
<>
{allData.map((val , i)=>(
     <div className="col-lg-3 col-md-6 col-sm-12" key={i}>

   <AllProductsComponents val={val} i={i} />
</div>
))}
</>
:
<div style={{width : '100%' , height:'30vh'}} className='flex'>
<img src={login} alt="" style={{width : '200px' , height:'200px' , background : "#ccc"}} />
</div>
}
      </div>
      </div>

  )
}

export default Shop
