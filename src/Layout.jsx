import React from 'react'
import Nav from './components/common/Nav/Nav'
import Footer from './components/common/Footer/Footer'
import {Outlet} from "react-router-dom"
import ButtonTop from './components/common/ButtonTop'

function layout() {
  return (
    <>
     <Nav />
     <Outlet />
     <ButtonTop />
     <Footer />
    </>
  )
}

export default layout
