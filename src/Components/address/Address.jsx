import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { cartContext } from '../context/CartContext';
export default function Address() {
let {OnlinePayment,cartId}=useContext(cartContext)

 async function handleAddressSubmit(values){
   let res = await OnlinePayment(cartId,'http://localhost:3000',values)
   console.log(res);
   console.log(values);
 window.location.href=res?.data.session.url;
  }
let formik=useFormik({
  initialValues:{
    detalis:'detalis',
    phone:'01010700999',
    city:'cairo',
  },onSubmit:handleAddressSubmit
})


  return <>
  <div className='container mx-auto w-50 p-5 bg-light shadow-lg my-5 '>
    <h1 className='text-center py-2'>Your Address</h1>
    <form onSubmit={formik.handleSubmit} className=' '>
      <label htmlFor="detalis">Detalis</label>
      <input  className='form-control mb-2' type="text" value={formik.values.detalis} onChange={formik.handleChange} onBlur={formik.handleBlur} name='detalis' id='detalis'/>
      <label htmlFor="detalis">Phone</label>

      <input className='form-control mb-2' type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name='phone'id='phone'/>
      <label htmlFor="detalis">City</label>

      <input className='form-control mb-2' type="text" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} name='city' id='city'/>
        <button type='submit' className='btn bg-main text-white  py-2 my-3  form-control'>Pay</button>
    </form>
  </div>
  </>
}
