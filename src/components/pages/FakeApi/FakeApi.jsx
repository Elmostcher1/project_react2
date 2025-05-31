import "./FakeApi.css"
import AllProductsComponents from '../AllProductsComponents/AllProductsComponents';
import { useContext } from "react";
import { cartApiCon } from "../../context/ApiCart";
import ProductSelkiton from '../../../skeltons/ProductSelkiton'


function FakeApi() {

  const {fakeApi , loading} = useContext(cartApiCon)
  const shoeDataFake = fakeApi.map((val , i)=>(
     <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
  <AllProductsComponents val={val} i={i} />
    </div>))
  //  const numberSekeliton = 
  
  return (
       <div className="Products mt-5 container sec_con">
         <div className="title_sec">
      <p>Fake Api</p>
    </div>
     {loading ?
     <ProductSelkiton />
        :  
      <div className="row">
     {shoeDataFake}
        </div>
  }
      </div>
  )
}

export default FakeApi
