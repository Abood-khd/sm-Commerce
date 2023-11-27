import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as   Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner'

export default function Register() {
 let navigate=useNavigate()
  const [error,seterror]=useState(null)
 const [isLoading,setisLoading]=useState(false)
  async  function submitRegister(values) {
    setisLoading(true)

    let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).catch((err)=>{
      setisLoading(false)
      seterror(err.response.data.message)
    })
    if (data.message === 'success') {
      setisLoading(false)
      navigate('/login')
    }
 }

let validationSchema = Yup.object({
  name:Yup.string().min(3,'name minlength is 3 ').max(10,'name maxlength is 10').required('name is required'),
  email:Yup.string().email('email is invalid').required('email is required'),
  password:Yup.string().matches(/^[A-Z][a-z0-9]{3,10}$/,'password start with uppercase').required('password is reqiured'),
  // eslint-disable-next-line no-undef
  rePassword:Yup.string().oneOf([Yup.ref("password")],'rePassword is invalid').required('rePassword is required')

})


const formik = useFormik({
  initialValues:{ 
  name:'',
  email:'',
  phone:'01010700700',
  password:'',
  rePassword:''
},onSubmit:submitRegister,validationSchema
})

  return <>
  <div className="w-50 m-auto text-center shadow-lg mt-5 p-5 rounded-4" >
    <h1 className='fw-bold'>Register Now</h1>
  <form onSubmit={formik.handleSubmit} className='w-75 d-flex flex-column align-items-center m-auto gap-4 mt-5 '>
<input placeholder='Your Name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='form-control' name='name' />

{formik.errors.name && formik.touched.name?
<div className='alert mt-2 p-2 alert-danger'>{formik.errors.name}</div>:''
}

<input placeholder='Your Email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control' name='email'/>

{formik.errors.email && formik.touched.email?
<div className='alert mt-2 p-2 alert-danger'>{formik.errors.email}</div>:''
}


<input placeholder='Password => 6 chars' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control'type='password' name='password'/>
{formik.errors.password && formik.touched.password?
<div className='alert mt-2 p-2 alert-danger'>{formik.errors.password}</div>:''
}
<input placeholder='re-Password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} className='form-control' type='password' name='rePassword'/>
{formik.errors.rePassword && formik.touched.rePassword?
<div className='alert mt-2 p-2 alert-danger '>{formik.errors.rePassword}</div>:''
}


{isLoading?<CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>:<button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white mt-2 w-50 fw-bold'>Register</button>}
  </form>
  </div>
  </>
}
