import React from 'react'
import "./Home.css"
import Header from './components/Header/Header'
import Servcies from './components/Servcies/Servcies'
import Categorys from './components/Categorys/Categorys'
import Products from './components/Products/Products'
import Slider2 from './components/Slider2/Slider2'

function Home() {
  return (
    <div className='Home'>
     <Header />
     <Categorys />
     <Products />
     <Slider2 />
     {/* <Servcies /> */}

     </div>
  )
}

export default Home
