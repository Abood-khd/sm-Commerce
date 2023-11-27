import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { useQueries, useQuery } from 'react-query';
import { cartContext } from '../context/CartContext';
import axios from 'axios';
import { Watch } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default function Cart() {
let {getLoggedUserCart,removeCartItem,updateProductQuantity,Cart,setCart} = useContext(cartContext);

  async function DisplayCart() {
    var {data}=await getLoggedUserCart();
    setCart(data)
}

async function removeItem(id) {
  let {data} = await removeCartItem(id)
  setCart(data)
  
}


async function updateCount(id,count){
  let {data}=await updateProductQuantity(id,count)
  setCart(data,true)
}

let {}= useQuery('DisplayCart',DisplayCart,{
   cacheTime:3000,
  // refetchInterval:10
})


console.log(Cart);





  return <>
{ Cart ? <div className='container  mx-auto p-5 bg-main-light  '>

  <h3> Shoping Cart  </h3>
  <h4 className='h6 text-main fw-bolder'>Cart Items :  {Cart.numOfCartItems} </h4>
  <h4 className='h6 text-main fw-bolder mb-5'>Total Cart Price   :  {Cart.data.totalCartPrice} </h4>
  {Cart.data.products.map((pro)=>  
  <div className='row border-bottom py-2 w-100 px-2' key={pro.product.id}> 
    <div className='col-md-1'>
      <img className='w-100' src={pro.product.imageCover} alt="" />
    </div>
    <div className="col-md-11">
      <div className='d-flex justify-content-between align-items-center'>

<div>
        <Link className=' text-main' to={`/ProductDetalis/${pro.product._id}`}>
        
        <h3 className='h6'>{pro.product.title.split(' ').slice(0,3).join('')}</h3>
        </Link>

      <h6 className='text-main'>Price :  {pro.price} SYR</h6>
</div>
<div>
<button onClick={()=>updateCount(pro.product.id,pro.count +1)} className='btn brdr-main p-2'>+</button>
<span className='mx-2'>{pro.count}</span>
<button onClick={ pro.count   ==1 ?  ()=>removeItem(pro.product.id)  :    ()=>updateCount(pro.product.id,pro.count -1)  }  className='btn brdr-main p-2'>-</button>


</div>

      </div>
      <button onClick={()=>removeItem(pro.product._id)}                    className='btn p-0'><i className='fas fa-trash-can text-danger font-sm brdr'></i> remove </button>
    </div>

  </div>

  )}

  <Link to={'/address'}>
  
<button disabled={Cart.numOfCartItems ===0}    className='btn bg-main w-25 mt-5 text-center text-white'>Online Payment</button>
  </Link>


</div>


: <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
<h6 className='me-3' >You have not added any thing to your store</h6>
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
</div>
  }
  </>
}
