import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import {  useQuery } from 'react-query';
import { Watch } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContext';
import { wishlistContext } from '../context/WishlistContext';

export default function Products() {
let {AddToProduct} =useContext(cartContext)
let {x,AddToWishlist} =useContext(wishlistContext)




//  async function addProductToCart(id) {
//   let response= await addToCart(id)
//   if (headers !== undefined) {
//       toast.success('product successfully added',{
//         duration:4000,
//         position:'bottom-center'
//       })
//   }else{

//     console.log('p'+response);
//   }
//  }


function getFeaturedProduct() {



  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}

let {isLoading,data}= useQuery('featureProducts',getFeaturedProduct,{
  cacheTime:3000,
  refetchInterval:2000,
})
  return <>
  {isLoading? <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
  <Watch
  height="120"
  width="120"
  radius="48"
  color="#4fa94d"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
  </div>:  <div className='container py-5'>
  <div class="nine container">
  <h1 className='main-title '>Featured Products<span>Shop Now</span></h1>
</div>
    <div className='row'>
      {data?.data.data.map((product)=> <div key={product._id} className='col-md-2 product cursor-pointer shadow-sm py-3 px-2'>
        <Link className='text-decoration-none' to={`/ProductDetalis/${product._id}`}>
        
        
        
        <div className=''>
        <img className='w-100' src={product.imageCover} alt={product.title} />
        <span className='text-main font-sm fw-bolder'>{product.category.name}</span>
        <h3 className='h6'>{product.title.split(" ").slice(0,2).join(' ')}</h3>
        <div className='d-flex justify-content-between mt-3'>
          <span>{product.price} SYR</span>
          <span><i className='fas fa-star rating-color'></i>  {product.ratingsAverage}</span>

        </div>
        </div>
        </Link>

        <div className='d-flex flex-row justify-content-between align-items-center py-2'> 
        <button onClick={()=>AddToProduct(product.id)} className='btn bg-main text-white w-75 btn-sm mt-2'>Add to cart</button>
        <div className=''>

{x[product.id]?<i class="fa-solid fa-heart-circle-check fa-beat" style={{color: "#d91212"}}></i>   :<i   onClick={()=>AddToWishlist(product.id) }  className="fa-regular fa-heart  "></i>}


        </div>
        </div>
      </div>
      
      
      )}
    </div>
  </div>}
 

  </>
}
