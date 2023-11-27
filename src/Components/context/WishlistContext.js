import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export let wishlistContext=createContext()


export   function WishlistContextProvider(props) {
let headers = {
    token:localStorage.getItem('userToken')
}
 let [Wishlist , setWishlist] = useState({})
 let [x,setX]=useState({})
 
 var list = Wishlist
 let y=x
 async  function addToWishlist(productId) {
     y[productId]=true
     setX(y)
     let res =await axios.post(`https://route-ecommerce.onrender.com/api/v1/wishlist`,{
         productId
        },
        {
            headers
        })
        list[productId] = true
        setWishlist(list)
   

}
function AddToWishlist(id) {
    if (localStorage.getItem('userToken') ===null ) {
        toast.error('you need a loggin',{
          theme:'dark'
        })
    }else{
      addToWishlist(id)
      toast.success('Wishlist successfully added',{
                duration:2000,
                position:'bottom-center',
                theme:'dark'
              })

              

    }

}

    


    return <wishlistContext.Provider value={{addToWishlist,Wishlist,x,AddToWishlist,setX}}>

        {props.children}
    </wishlistContext.Provider>
}
