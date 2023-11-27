import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export let cartContext=createContext();

let headers={
    token:localStorage.getItem('userToken')
}








export  function CartContextProvider(props) {
  let [Cart,setCart]=useState(null);
let [Wishlist,setWishlist]=useState(null);
let [Count,setCount]=useState(0)
let [CountWishlist,setCountWishlist]=useState(0)
 let [cartId, setCartId]=useState(null)
 
 async  function addToCart(productId) {
          
  let res =await axios.post(`https://route-ecommerce.onrender.com/api/v1/cart`,{
 productId
},
{
headers
})
}

function AddToProduct(id) {
if (localStorage.getItem('userToken') ===null ) {
 toast.error('you need a loggin',{
   theme:'dark'
 })
}else{
addToCart(id)
toast.success('product successfully added',{
 duration:2000,
 position:'bottom-center',
 theme:'dark'
})

}
}

function getLoggedUserCart() {
return axios.get(`https://route-ecommerce.onrender.com/api/v1/cart`,
{
headers
}).then((res)=>res).catch((err)=>err)

}
function getLoggedUserWishList() {
return axios.get(`https://route-ecommerce.onrender.com/api/v1/wishlist`,
{
headers
}).then((res)=>res).catch((err)=>err)

}
function GetWishlistCount() {

return axios.get(`https://route-ecommerce.onrender.com/api/v1/wishlist`, {
headers,
})
.then((data) => {
setCountWishlist(data.data.numOfCartItems)
})
.catch((error) => {

});
}


function removeCartItem(id) {
return axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{
headers
}).then((res)=>res).catch((err)=>err)


}

function updateProductQuantity (id,count){
return axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,
{count},{headers})
.then((response)=>response)
.catch((err)=>err)
}
function GetCartCount() {

return axios.get(`https://route-ecommerce.onrender.com/api/v1/cart`, {
headers,
})
.then((data) => {
setCount(data.data.numOfCartItems)
})
.catch((error) => {

});
}


function OnlinePayment(cartId,values,url) {
return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
{
  shippingAddress:values
},{headers})
.then((response)=>console.log(response)
)
.catch((err)=>console.log(err)
);

}

 async function getCartId(){
  let {data}=await getLoggedUserCart()
  setCartId(data?.data._id)
  console.log(data?.data._id);
 }
useEffect(() => {
  getCartId()
  
}, [])



    return <cartContext.Provider  value={{cartId,Wishlist,setWishlist,GetWishlistCount,CountWishlist,addToCart,AddToProduct,getLoggedUserCart,removeCartItem,updateProductQuantity,Cart,setCart,Count,GetCartCount,setCount,getLoggedUserWishList,OnlinePayment}}>

{props.children}
    </cartContext.Provider>
}