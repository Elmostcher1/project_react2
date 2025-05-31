import React, { useContext } from 'react'
import "./WishList.css"
import AllProductsComponents from '../AllProductsComponents/AllProductsComponents'
import { wishListCon } from '../../context/WishListApi'
import { cartApiCon } from '../../context/ApiCart'

function WishList() {

  const {wish , deleteProWish} = useContext(wishListCon)
console.log(wish[0].amount);

  return (
    <div className='WishList Products container sec_con'>
        <div className="title_sec">
      <p>WishList </p>
        </div>
          <div className="row">
        {wish.map((val , i)=>(
<div className="col-lg-3 col-md-6 col-sm-12"  key={i}>
  <AllProductsComponents deleteProWish={deleteProWish}  val={val} i={i} />
</div>

        ))}
</div>
    </div>
  )
}

export default WishList
