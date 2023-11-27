import React, { useContext, useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Login from '../Login/Login';
import axios from 'axios';
import { useQuery } from 'react-query';
import { UserContext } from '../context/UserContext';
import { jwtDecode } from 'jwt-decode';
import LogOut from '../LogOut/LogOut';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserModal = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  let {userData,userToken}= useContext(UserContext)
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };



  return  <>
  {userToken ?  
  <div>

<Space>
        <Radio.Group value={placement} onChange={onChange}>
       
        </Radio.Group>
        <UserOutlined     onClick={showDrawer}  />
      </Space>
      <Drawer
        title="Account"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className='d-flex flex-column text-center '>

<div>
        <UserOutlined className='fa-3x ms-auto'/>

</div>

          
        <span className='badge  bg-success py-2 my-4'>
            
          {userData?.name}
        </span>
        <span className='badge  bg-success py-2 my-4'>

          {userData?.email}
        </span>
        </div>
        <LogOut />
      </Drawer>
  </div>
 : <div>

 <Space>
         <Radio.Group value={placement} onChange={onChange}>
        
         </Radio.Group>
         <UserOutlined   size={400}  onClick={showDrawer}  />
       </Space>
       <Drawer
         title="Account"
         placement={placement}
         closable={false}
         onClose={onClose}
         open={open}
         key={placement}
       >
         <div className='d-flex flex-column text-center '>
 
 <div>
         <UserOutlined className='fa-3x ms-auto'/>
 
 </div>

 <div className='d-flex flex-column w-100'>
  <Link to={'register'} className='btn btn-primary my-3 text-white'>Register</Link>
  <Link to={'login'} className='btn btn-success text-white'>Log In</Link>
 </div>
 
           
     
         </div>
       </Drawer>
   </div>}


    
  </>
}
export default UserModal;