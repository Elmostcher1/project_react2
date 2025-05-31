import "./Products.css"
import product_api from './ProsuctsJSON';
import AllProductsComponents from '../../../AllProductsComponents/AllProductsComponents';

function Products() {
  return (
    <div className='container  sec_con'>
      <div className='title_sec'>
      <h1> Products </h1>
      </div>
    
    <div className="Products mt-5">
      <div className="row" >
        {product_api.map((val , i)=>(
     <div className="col-lg-3 col-md-6 col-sm-12" key={i}>

         <AllProductsComponents  val={val} i={i} />
      </div>
        ))}
    </div>
    </div>

    </div>
  )
}

export default Products
