import React, { lazy  , Suspense} from 'react'

// library------------------
import {createHashRouter, RouterProvider } from "react-router-dom"
// components
const Home = lazy(()=>import('./components/pages/Home/Home'))
const About = lazy(()=>import('./components/pages/About/About'))
const DummyApi = lazy(()=>import('./components/pages/DummyApi/DummyApi'))
const FakeApi = lazy(()=>import('./components/pages/FakeApi/FakeApi'))
const Cart = lazy(()=>import('./components/pages/Cart/Cart'))
const Shop = lazy(()=>import('./components/pages/Shop/Shop'))
const Layout = lazy(()=> import ('./Layout'))
import { Toaster } from 'react-hot-toast';
import LotieHadel from './LotieHadel';
const Contact  = lazy(()=> import ( './components/pages/Contact/Contact'))
const WishList = lazy(()=> import ( './components/pages/WishList/WishList'))




function App() {
const router = createHashRouter([
        {
            path : '' , 
            element : <Suspense fallback={<LotieHadel  status={'main_page'} text={"loading_layout_pages"}/>} > <Layout /> </Suspense> ,
            children : [
                {path : '' , element : <Suspense fallback={<LotieHadel  status={'nestd_page'} text={'loding_nestd_page'} />} ><Home /> </Suspense> } ,

                {path : 'about' , element :<Suspense fallback={<LotieHadel  status={'nestd_page'} text={'loding_nestd_page'} />} > <About /></Suspense> } ,
                
                {path : 'wish' , element :<Suspense fallback={<LotieHadel  status={'nestd_page'} text={'loding_nestd_page'} />} > <WishList /></Suspense> } ,

                {path : 'fakeApi' , element : <Suspense fallback={<LotieHadel  status={'nestd_page'} text={'loding_nestd_page'} />} ><FakeApi  /> </Suspense>} ,
                {path : 'dummyApi' , element :<Suspense fallback={<LotieHadel  status={'nestd_page'} text={'loding_nestd_page'} />} > <DummyApi /></Suspense> } ,
                
                {path : 'cart' , element : <Suspense fallback={<LotieHadel  status={'nestd_page'} text={'loding_nestd_page'} />} ><Cart  /></Suspense> } ,
                
                {path : 'shop' , element : <Suspense fallback={<LotieHadel  status={'nestd_page'} text={'loding_nestd_page'} />} ><Shop /> </Suspense>} ,

                {path : 'contact' , element : <Suspense fallback={<LotieHadel  status={'nestd_page'} text={'loding_nestd_page'} />} ><Contact /> </Suspense>} ,
            ] , 
            errorElement : <LotieHadel status={'error'} text={"error"} />
            }
])

    
  return (
    <>
    <Toaster />
  <RouterProvider router={router} />
    </>
  )
}

export default App

