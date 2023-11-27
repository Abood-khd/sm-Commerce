import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Categories from './Components/Categories/Categories'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'
import Footer from './Components/Footer/Footer'
// eslint-disable-next-line no-unused-vars
import UserContextProvider from './Components/context/UserContext';
import ProductDetalis from './Components/ProductDetalis/ProductDetalis';
import { CartContextProvider } from './Components/context/CartContext';
import { WishlistContextProvider } from './Components/context/WishlistContext';
import { ToastContainer } from 'react-toastify';
import WishList from './Components/WishList/WishList';
import Address from './Components/address/Address';
import Orders from './Components/Orders/Orders';
// import { GetCartContextProvider } from './Components/context/getCartContext';




let routes = createHashRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<Home/>},
    {path:'Products' , element:<Products/>},
    {path:'ProductDetalis/:id' , element:<ProductDetalis/>},
    {path:'Cart' , element:<Cart/>},
    {path:'WishList' , element:<WishList/>},
    {path:'Categories' , element:<Categories/>},
    {path:'Brands' , element:<Brands/>},
    {path:'address' , element:<Address/>},
    {path:'orders' , element:<Orders/>},
    {path:'Footer' , element:<Footer/>},
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ] }
])

function App() {
  
  return <>
  <UserContextProvider>
  <CartContextProvider>
    <WishlistContextProvider>

      {/* <GetCartContextProvider> */}
  <RouterProvider router={routes}></RouterProvider>
  <ToastContainer  position='bottom-center'/>

      {/* </GetCartContextProvider> */}
  
    </WishlistContextProvider>
  </CartContextProvider>
  </UserContextProvider>
  
  </> 
}

export default App;
