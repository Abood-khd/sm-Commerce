import React, { useContext } from 'react';
import { wishlistContext } from '../context/WishlistContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { cartContext } from '../context/CartContext';
import { useQuery } from 'react-query';

export default function LogOut() {
  let {setX} =useContext(wishlistContext);
  let{setUserToken}=useContext(UserContext)
  let {setCount,setCart} = useContext(cartContext);
  
  let navigate = useNavigate()


  function logOutBtn() {

    localStorage.clear();
    setCount(0);
    setCart(null);
    setUserToken(null);
    setX({});
    navigate('/login');
    window.location.reload()

  }

  // let {}=useQuery('logOutBtn',logOutBtn,{

  // })



  return <>

<Button type="primary" danger block onClick={logOutBtn}>
      LogOut
    </Button>  </>
}
