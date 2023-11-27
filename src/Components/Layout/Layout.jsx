import React, { useContext, useEffect } from 'react';
import { Outlet} from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';
import { Offline, Online } from 'react-detect-offline';
export default function Layout() {


  useEffect(()=>{
    toast(    <div>
      <Online>You are online,have fun shopping</Online>
      <Offline className=''>You are not connected to the internet<i className='fas fa-wifi'></i></Offline>
    </div>,{theme:'dark'})

  
      if (localStorage.getItem('userToken'!==null)) {
        localStorage.getItem('userToken')
      }


  },[])



  return <>
  <div className=''>

  <Navbar/>

  <Outlet>
    
  </Outlet>
  <Footer/>
  </div>
  </>
}
