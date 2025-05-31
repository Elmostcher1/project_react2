import React , {createContext, useEffect, useState} from "react";
import toast  from "react-hot-toast"
import Swal from 'sweetalert2'

export const wishListCon = createContext()
export function WhishListApiProvider (props){


    let [wish , SetWish] = useState([])

    function AddWishList(value) {
    let check = wish.find(el => el.title === value.title)
     if (!check) { 
        toast.success('You have a new heart! ❤');
       SetWish([...wish , value])
     }else{
            Swal.fire({
      icon: "info",
      title : "You already add product in  wishlist" ,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    })
     }
    }

    function deleteProWish(product) {
             Swal.fire({
          icon: "warning",
          title : `Are You sure to delete product (${product.title})` ,
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
        let newArr = wish.filter( el => el.title !== product.title )
        SetWish(newArr)
      
      }
      });
    }

useEffect(()=>{ 
    if (localStorage.getItem('wish')) {
 SetWish([...JSON.parse(localStorage.getItem('wish'))])
     }else{
        SetWish([])
    }
} , [])
useEffect(()=>{
  localStorage.setItem('wish' , JSON.stringify(wish))
  
} , [wish])

return(
    <wishListCon.Provider value={{AddWishList , deleteProWish , wish}}>
        {props.children}
    </wishListCon.Provider>
)


}
