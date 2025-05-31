import React , {createContext, useEffect} from "react"; 
import { useContext } from "react";
import { cartApiCon } from "./ApiCart";

import product_api from "../pages/Home/components/Products/ProsuctsJSON";
import { wishListCon } from "./WishListApi";



export const workCartCon = createContext()
export function WorkCartProvider(props){
  let {wish} = useContext(wishListCon)

  const {allData  ,fakeApi , dummyApi ,cartTitle , setCartTitle} = useContext(cartApiCon)

   const ShowsData = ()=>{
    const productsFull = cartTitle.map((title)=>{

    const findedObject = allData.find(el=> el.title === Object.keys(title)[0] )
    
    return {...findedObject  , amount : Object.values(title)[0] }
     
   })
   return productsFull

   }
   let cart  = ShowsData()

   function changeAmountSelete(e , pro_title) {
    const val = +e.target.value
    const selectEle = cartTitle.find(el =>  Object.keys(el)[0] === pro_title)
    selectEle[pro_title] = val
    setCartTitle([...cartTitle])
     

    if (selectEle) {
        
        const findFakeApi = fakeApi.find( el => el.title === pro_title)
        if (findFakeApi) {
         findFakeApi.amount = selectEle[pro_title]
       }
       const findDummyApi = dummyApi.find( el => el.title === pro_title)
         if (findDummyApi) {
          findDummyApi.amount = selectEle[pro_title]
        }
        const findJSOnApi = product_api.find( el => el.title === pro_title)
          if (findJSOnApi) {
           findJSOnApi.amount = selectEle[pro_title]
         }
        const wishApi = wish.find( el => el.title === pro_title)
          if (wishApi) {
           wishApi.amount = selectEle[pro_title]
         }
           
        
    }
    
   }

   useEffect(()=>{
    ShowsData()
   } , [])
    return(
        <workCartCon.Provider value={{cart , changeAmountSelete}}>
            {props.children}
        </workCartCon.Provider>
    )
}