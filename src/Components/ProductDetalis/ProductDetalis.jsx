import axios from 'axios'
import React, { useContext } from 'react'
import { Watch } from 'react-loader-spinner';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { cartContext } from '../context/CartContext';
import { wishlistContext } from '../context/WishlistContext';

export default function ProductDetalis() {
let {id}=useParams();
let {AddToProduct,} =useContext(cartContext)
let {x,AddToWishlist} =useContext(wishlistContext)


function ProductsDetalis(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

let {data ,isLoading}=useQuery('productsDetalis',()=>ProductsDetalis(id),{
  refetchInterval:1000
})
  return (
    <>
    <div>

    </div>
         {isLoading?<div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
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
  </div>:  <div className='container'>
   {data?.data.data?<div  className='row py-2 align-items-center'>
    <div className='col-md-4'>
<img className='w-100' src={data?.data.data.imageCover} alt={data?.data.data.title} />
    </div>
    <div className='col-md-8'>
        <h2 className='h5'>{data?.data.data.title}</h2>
        <p>{data?.data.data.description}</p>
        <h6 className='text-main'>{data?.data.data.category?.name}</h6>
        <h6 className='text-main'>{data?.data.data.price} SYR</h6>
        <div className='d-flex justify-content-between'>
            <span>ratingQuantity : {data?.data.data.ratingsQuantity}</span>
            <span className='d-flex  align-items-center justify-content-center gap-1'>
                {x[data?.data.data._id]?<i class="fa-solid fa-heart-circle-check fa-beat cursor-pointer " style={{color: "#d91212",fontSize:"20px"}}></i>   :<i style={{fontSize:"20px"}}   onClick={()=>AddToWishlist(data?.data.data._id) }  className="fa-regular fa-heart cursor-pointer "></i>}
                <i className='fas fa-star rating-color'> </i> 

                {data?.data.data.ratingsAverage}

            </span>
            
        </div>
        <button className='btn bg-main text-white w-100 mt-2' onClick={()=>AddToProduct(data?.data.data._id)}>Add to cart</button>

    </div>
   </div>:""}
    </div>}
  
    </>
  )
}
