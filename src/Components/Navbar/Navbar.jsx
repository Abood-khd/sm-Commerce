/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/freshcart-logo.svg'
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import { wishlistContext } from '../context/WishlistContext';
import { cartContext } from '../context/CartContext';
import { Avatar, Badge, Space } from 'antd';
import { ShoppingCartOutlined} from '@ant-design/icons';
import { useQuery } from 'react-query';
import UserModal from '../UserModal/UserModal';


export default function Navbar() {
  let {userToken}=useContext(UserContext)
  let {Count,GetCartCount} = useContext(cartContext);



   let {}=useQuery('GetCartCount',GetCartCount,{
refetchInterval:100   })


 
  
 

  return <>


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="fresh cart logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/brands">Brands</Link>
            </li>
       

          </ul>


          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0  gap-3">

<div>
  {Count !==0 ? 

<Link  className='' to={'/cart'}>
              <Space size={24}>
    <Badge count={Count}>
      <Avatar shape="square" style={{"color":"#4fa94d"}} icon={<ShoppingCartOutlined />} />
    </Badge>
   
  </Space>
            </Link>
            : ""}
</div>
<div>

            {/* <Link   className='' to={'/WishList'}>
              <Space size={1}>
    <Badge count={CountWishlist}>
      <Avatar shape="square"  icon={<HeartOutlined  />} />
    </Badge>
   
  </Space>
            </Link> */}
</div>


            

           </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">



          <li className="nav-item d-flex align-items-center">
              <i className='fab mx-2 fa-facebook fa-sm'></i>
              <i className='fab mx-2 fa-twitter fa-sm'></i>
              <i className='fab mx-2 fa-instagram fa-sm'></i>
              <i className='fab mx-2 fa-youtube fa-sm'></i>
              <i className='fab mx-2 fa-tiktok fa-sm'></i>
            </li>
            {userToken !==  null ?
            <>
             
              <li className="nav-item">

            <UserModal/>


            </li>

            </>
            
            :<>
       


            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            </>}
       


           
         

          </ul>

        </div>
      </div>
    </nav>

  
  </>



}




