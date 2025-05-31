import React, { useContext } from 'react'
import "./AllProductsComponents.css"
import Starts from '../../Starts';
import {useLocation} from 'react-router-dom'
// --icons
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { cartApiCon } from '../../context/ApiCart';
import { wishListCon } from '../../context/WishListApi';
import { IoClose } from "react-icons/io5";

function AllProductsComponents({val ,deleteProWish  , i}) {
   const location = useLocation()
  const {AddToCart,cartTitle} = useContext(cartApiCon)
  const {AddWishList} = useContext(wishListCon)
  const max = (val.stock || val.rating['count'])  - (val.amount ?? 0)
  const check = cartTitle.find((el)=>  Object.keys(el)[0] === val.title )
  return (
          <div className="product" >
            <div>
              <img src={val.thumbnail || val.image || val.img} /> 
            </div>

            <div >
              <div>
              <p className='m-0 p-0'>{val.title.slice(0,18) || ""}</p>
              <p className='m-0 p-0'>${val.price} <del>$40</del></p>
              </div>
              <Starts />
     <p>You Can Add Just <span className='text-primary fs-5 fw-bold' >{(val.stock || val.rating['count'])  - (val.amount ?? 0)} </span> Items</p>
                {check &&
            <span className='btn btn-light fs-6 fw-normal p-0 mx-4 py-2 m-0'>Already In The Cart</span>
                
                }
              <div className='flex justify-content-between'> 
              
             {location.pathname !== '/wish' &&(
              <>
            <button disabled={max <= 0 ? true : false} className='flex ' onClick={()=>AddToCart(val.title,i)}>
              <FaCartArrowDown />
            </button>
            <button className='flex 'onClick={()=>AddWishList(val,i)}>
              <FaHeart />
             </button>
              </>
             )}
             {location.pathname === '/wish' &&
             <>
             {! check &&
               <button disabled={max <= 1 ? true : false} className='flex ' onClick={()=>AddToCart(val.title,i)}>
              <FaCartArrowDown />
            </button>
             }
            <button className='flex 'onClick={()=>deleteProWish(val,i)}>
              <IoClose />
             </button>
             </>
             }
              </div>

            </div>

          </div>
  )
}

export default AllProductsComponents
