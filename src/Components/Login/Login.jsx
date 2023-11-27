import React, { useContext, useState } from 'react';
import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {   MutatingDots } from 'react-loader-spinner'
import { UserContext } from '../context/UserContext';
import { useQuery } from 'react-query';

export default function Login() {
 let {setUserToken,setUserData}= useContext(UserContext)
  let navigate=useNavigate()
  const [error,seterror]=useState(null)
 const [isLoading,setisLoading]=useState(false)


  async  function submitLogin(values) {
    setisLoading(true)

    let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).catch((err)=>{
      setisLoading(false)
      seterror(err.response.data.message)
    })
    if (data.message === 'success') {
      setisLoading(false)
      localStorage.setItem('userToken',data.token)
      setUserToken(data.token)

      setUserData(data.user)
      navigate('/')
      window.location.reload()
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let {}= useQuery("submitLogin",submitLogin,{
refetchOnMount:true
    })




    



 }
 let validationSchema = Yup.object({
  email:Yup.string().email('email is invalid').required('email is required'),
  password:Yup.string().matches(/^[A-Z][a-z0-9]{3,10}$/,'password start with uppercase').required('password is reqiured'),
})


  const formik = useFormik({
    initialValues:{ 
    email:'',
    password:'',
  },onSubmit:submitLogin,validationSchema
  })

  return <>
  <div className="w-50 m-auto text-center shadow-lg mt-5 p-5 rounded-4" >
    <h1 className='fw-bold'>Login</h1>
  <form  className='w-75 d-flex flex-column align-items-center m-auto gap-4 mt-5 'onSubmit={formik.handleSubmit}>

<input placeholder='Your Email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control' name='email'/>
{formik.errors.email && formik.touched.email?
<div className='alert mt-2 p-2 alert-danger'>{formik.errors.email}</div>:''
}
<input placeholder='Password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control'type='password' name='password'/>
{formik.errors.password && formik.touched.password?
<div className='alert mt-2 p-2 alert-danger'>{formik.errors.password}</div>:''
}
{isLoading?<MutatingDots 
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor= '#4fa94d'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />:<button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white mt-2 w-50 fw-bold'>Login</button>}
  </form>
  </div>
  </>
}
