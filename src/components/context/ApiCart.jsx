import React , {createContext, useContext, useEffect, useState} from "react"; 
import product_api from "../pages/Home/components/Products/ProsuctsJSON";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import axios from 'axios'
import { wishListCon } from "./WishListApi";

export const cartApiCon = createContext()
export function CartApiProvider(props){
  let fakeApiURL = "https://fakestoreapi.com/products" 
  let dummyApiURL = "https://dummyjson.com/products" 
  let {wish} = useContext(wishListCon)

  
const [loading , setLoading] = useState(false)
let [dummyApi  , setDummyApi] = useState([])
let [fakeApi , setFakeApi] = useState([])    
let [cartTitle , setCartTitle ] = useState([])
let allData = product_api.concat(fakeApi , dummyApi)


function AddToCart(proTitle , index){


    
    let selectPro = cartTitle.find((el=> Object.keys(el)[0] === proTitle ))
    toast.success('Successfully toasted!')
    
    if (!selectPro) {
     const TowDataOfPro = {[proTitle] : 1}     
       setCartTitle([...cartTitle , TowDataOfPro ]) 
       const findFakeApi = fakeApi.find(el => el.title === proTitle)
       if (findFakeApi) {
        findFakeApi.amount = 1
      }
      const findDummyApi = dummyApi.find(el => el.title === proTitle)
      if (findDummyApi) {
        findDummyApi.amount = 1
      }
      const findJsonApi = product_api.find(el => el.title === proTitle)
      if (findJsonApi) {
        findJsonApi.amount = 1
       }
      const wishAPi = wish.find(el => el.title === proTitle)
      if (wishAPi) {
        wishAPi.amount = 1
       }

      }else{

      const findFakeApi = fakeApi.find( el => el.title === proTitle)
        if (findFakeApi) {
         ++selectPro[proTitle]
         findFakeApi.amount = selectPro[proTitle]
       }
      const findDummyApi = dummyApi.find( el => el.title === proTitle)
        if (findDummyApi) {
         ++selectPro[proTitle]
         findDummyApi.amount = selectPro[proTitle]
       }
      const findJSOnApi = product_api.find( el => el.title === proTitle)
        if (findJSOnApi) {
         ++selectPro[proTitle]
         findJSOnApi.amount = selectPro[proTitle]
       }
      const wishAPi = wish.find( el => el.title === proTitle)
        if (wishAPi) {
         ++selectPro[proTitle]
         wishAPi.amount = selectPro[proTitle]
       }

        setCartTitle([...cartTitle])
      }
      
    
}

function deleteProdutc(title) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      const fillterCart = cartTitle.filter(el => Object.keys(el)[0] !== title )
         setCartTitle(fillterCart)
    }
  });
}

function changeAmount(e ,proTitle) {
  // plus
// minus
console.log(proTitle);

    let selectPro = cartTitle.find((el=> Object.keys(el)[0] === proTitle ))
if (e === 'plus') {
  
        const findFakeApi = fakeApi.find( el => el.title === proTitle)
        if (findFakeApi) {
         ++selectPro[proTitle]
         findFakeApi.amount = selectPro[proTitle]
       }
      const findDummyApi = dummyApi.find( el => el.title === proTitle)
        if (findDummyApi) {
         ++selectPro[proTitle]
         findDummyApi.amount = selectPro[proTitle]
       }
      const findJSOnApi = product_api.find( el => el.title === proTitle)
        if (findJSOnApi) {
         ++selectPro[proTitle]
         findJSOnApi.amount = selectPro[proTitle]
       }
      const wishAPi = wish.find( el => el.title === proTitle)
        if (wishAPi) {
         ++selectPro[proTitle]
         wishAPi.amount = selectPro[proTitle]
       }

      }else if (e == 'minus') {
        
        
              const findFakeApi = fakeApi.find( el => el.title === proTitle)
              if (findFakeApi) {
               --selectPro[proTitle]
               findFakeApi.amount = selectPro[proTitle]
             }
            const findDummyApi = dummyApi.find( el => el.title === proTitle)
              if (findDummyApi) {
               --selectPro[proTitle]
               findDummyApi.amount = selectPro[proTitle]
             }
            const findJSOnApi = product_api.find( el => el.title === proTitle)
              if (findJSOnApi) {
               --selectPro[proTitle]
               findJSOnApi.amount = selectPro[proTitle]
             }
            const wishAPi = wish.find( el => el.title === proTitle)
              if (wishAPi) {
               --selectPro[proTitle]
               wishAPi.amount = selectPro[proTitle]
             }
      
            }
            setCartTitle([...cartTitle])
}

// Dummy

  async function getdummyApi() {
    setLoading(true)
    let {data} = await axios.get(dummyApiURL) 
    setDummyApi(data.products)
    setLoading(false)
  }
  
  // Fake
  async function getfakeApi() {
    setLoading(true)
  let {data} = await axios.get(fakeApiURL)   
  setFakeApi(data) 
  setLoading(false)
  }

useEffect(()=>{
  if (localStorage.getItem('cartData')) {
    setCartTitle([...JSON.parse(localStorage.getItem('cartData'))])
  }else{
    setCartTitle([])
  }
  getdummyApi()
  getfakeApi()
} , [])
useEffect(()=>{

  localStorage.setItem('cartData' , JSON.stringify(cartTitle))


} , [cartTitle])

return(
        <cartApiCon.Provider value={{deleteProdutc , loading ,dummyApi ,fakeApi , setCartTitle , AddToCart ,changeAmount ,cartTitle , allData}}>
            {props.children}
        </cartApiCon.Provider>
)
}