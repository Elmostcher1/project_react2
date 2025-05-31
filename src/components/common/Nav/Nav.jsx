import React, { useContext, useRef } from 'react'
import {useLocation} from "react-router-dom"

import "./Nav.css"
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartApiCon } from '../../context/ApiCart';
import { wishListCon } from '../../context/WishListApi';

function Nav() {

  const location = useLocation()
  const moon = useRef()
  const sun = useRef()
   const {cartTitle} = useContext(cartApiCon)
   const {wish} = useContext(wishListCon)

  function changeMood(e){
    if (e == 'moon') {
      
     document.body.classList.add('dark') ;
     sun.current.style.display = "block"
     moon.current.style.display = "none"
    }else if (e == 'sun') {
      
      document.body.classList.remove('dark') ;
      moon.current.style.display = "block"
      sun.current.style.display = "none"
 }

}
return (
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid px-5">
    <a className="navbar-brand fw-bold fs-4" href="#">Bravo <span>Shop</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={''} className="nav-link active a-hover" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'about'} className="nav-link a-hover" >About</Link>
        </li>
        <li className="nav-item">
          <Link to={'shop'} className="nav-link a-hover" href="#">Shop</Link>
        </li>
        <li className="nav-item">
          <Link to={'cart'} className="nav-link a-hover">Cart</Link>
        </li>
        <li className="nav-item">
          <Link to={'wish'} className="nav-link a-hover">WishList</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item"  to={'fakeApi'}>Fake Api</Link></li>
            <li><Link className="dropdown-item" to={'dummyApi'} >Dummy Api</Link></li>
          </ul>
        </li>

     <li className="nav-item">
          <Link to={'contact'} className="nav-link a-hover" href="#">Contact</Link>
        </li>
      <div className='flex'>
<div className='moon' ref={moon}  onClick={()=>changeMood('moon')}>
  <FaMoon />
</div>
<div className='sun'  ref={sun} onClick={()=>changeMood('sun')}>
  <FaSun />
</div>
      </div>
      </ul>
      <div className="pross gap-3 flex">
        {location.pathname !== "/cart" && (
          <div className='fs-5'>
          <Link style={{color : 'var(--main-color)'}} to={'cart'}>
          <FaCartPlus />
          </Link>
          <sub className='fs-5'>({cartTitle.length})</sub>
        </div>
        )}
        {location.pathname !== "/wish" && ( 
        <div className='fs-5'>
          <Link style={{color : 'var(--main-color)'}} to={'wish'}>
          <FaHeart />
        </Link>
          <sub className='fs-5'>({wish.length})</sub>
        </div>
        )}
      </div>
    </div>
  </div>
</nav>
)
}

export default Nav
