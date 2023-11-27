/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import {  useQuery } from 'react-query';
import { cartContext } from '../context/CartContext';
import { Watch } from 'react-loader-spinner';
import { Card } from 'antd';

export default function WishList() {
let {Wishlist,setWishlist,getLoggedUserWishList} = useContext(cartContext);

  async function DisplayWishList() {
    var {data}=await getLoggedUserWishList();
    setWishlist(data.data)
}





let {}= useQuery('DisplayWishList',DisplayWishList,{
  // cacheTime:3000,
  // refetchInterval:10
})








// return <>

//   <h3> WishList Cart  </h3>

//   {Wishlist.data.products.map((wish)=>  
//   <div className='row border-bottom py-2 px-2' key={wish.product.id}> 
//     <div className='col-md-1'>
//       <img className='w-100' src={wish.product.imageCover} alt="" />
//     </div>
//     <div className="col-md-11">
//       <div className='d-flex justify-content-between align-items-center'>


// <div>


// </div>

//       </div>
//       <button  className='btn p-0'><i className='fas fa-trash-can text-danger font-sm brdr'></i> remove </button>
//     </div>
//   </div>
//   )}
// : <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>

// <Watch
//   height="120"
//   width="120"
//   radius="48"
//   color="#4fa94d"
//   ariaLabel="watch-loading"
//   wrapperStyle={{}}
//   wrapperClassName=""
//   visible={true}
// />
// </div>  
//   </> 

}
