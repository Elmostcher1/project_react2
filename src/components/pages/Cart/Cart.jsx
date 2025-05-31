import React, { useContext, useEffect }  from  'react'
import "./Cart.css"
import { cartApiCon } from '../../context/ApiCart'
import { workCartCon } from '../../context/WorkCart'

function Cart() {
  
  const {allData   , changeAmount,cartTitle , deleteProdutc} = useContext(cartApiCon)
  const {changeAmountSelete} = useContext(workCartCon)


   const ShowsData = ()=>{
    const productsFull = cartTitle.map((title)=>{

    const findedObject = allData.find(el=> el.title === Object.keys(title)[0] )
    
    return {...findedObject  , amount : Object.values(title)[0] }
     
   })
   return productsFull

   }
   let cart  = ShowsData()

   
  let TotallPrice = cart.reduce((a,b)=>(
    a + (b.price * b.amount)
  ) , 0)

   useEffect(()=>{
    ShowsData()
   } , [])

  return (
    <div className='Cart container sec_con'>
      <div className='title_sec'>
      <p>Cart </p>
      </div>

      <div className="row">
      {cart.length > 0 ? (
  <>
        {cart.map((val , i)=>{
const max = (val.stock || val.rating['count'])  - (val.amount ?? 0)
console.log(val.amount);

  const maxnumber = Array((val.stock || val.rating['count'])).fill(0).map(( _ , index)=>{
    let amount = index+1
    return <option key={amount} value={amount}>{amount}</option>
  })
          return(
   <div className="col-12 mt-2" key={i}>
          <div className="pro col-12 flex shadow justify-content-between p-3 bg-white rounded">
          <div>
            <img src={val.image || val.thumbnail || val.img} alt="" style={{with : '100px' ,height: '100px'}}/>
          </div>
          <div>
          <p className='m-0 p-0 fs-5 text-center'>{val.title.slice(0,18)}</p>
          </div>
          <div>
            <p className='m-0 fs-5 p-0'>price : ${val.price}</p>
            <p className='m-0 fs-5 p-0'>Totallprice : ${(val.price * val.amount).toFixed(2)}</p>
          </div>
          <div className='flex gap-2'>
            <button onClick={()=>changeAmount('plus' , val.title)} disabled={max <=  0 ? true : false } className='btn btn-dark text-white btn-sm rounded-cricle'>+</button>
            <span className='amount_cart'>{val.amount}</span>
            <button onClick={()=>changeAmount('minus' , val.title)} disabled={ max >= (val.stock || val.rating['count']) ? true : false } className='btn btn-dark text-white btn-sm rounded-cricle'>-</button>
         
           <select onChange={(e)=>changeAmountSelete(e , val.title)} value={val.amount}>
             {maxnumber}
           </select>

          </div>
          <div>
          <button className='btn btn-danger' onClick={()=>deleteProdutc(val.title)}>Remove Product</button>
          </div>

           </div>
        </div>
)
})}

   <div className="col-8 offset-2 mt-4">
          <div className='border border-dark flex shadow justify-content-between p-3 bg-white rounded'>
             <b className='fs-4'>Totall : </b>
             <b className='fs-4'>${TotallPrice.toFixed(2)}</b>
          </div>
        </div>
  </>
      ) : 
      <div className='text-danger fs-1  text-center'> There Is Not Products Here </div>
      
    }
        
     
      </div>
    </div>
  )

  
}

export default Cart
