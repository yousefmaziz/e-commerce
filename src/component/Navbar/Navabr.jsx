import {  Link, NavLink } from 'react-router-dom'
import logo  from '../../img/freshcart-logo.svg'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../Context/User.context'
import { CartContext } from '../../../context/Cart.context'
export default function Navabr() {

  const  {token,logOut}=useContext(UserContext)
  const {cartInfo,getCartproducts}=useContext(CartContext)

  useEffect(()=>{
    getCartproducts()
  },[])
  return (
    <>
    
    <nav className='bg-slate-100 shadow-sm py-3'>
      <div className="container flex items-center gap-12">
        <a href="">
          <img src={logo} alt="logo of website" />
        </a>

{token && <>

  <ul className='flex gap-5 items-center'>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="/product">product</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="/wishlist">wishlist</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="/category">category</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="/brand">brand</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="/allorders">oreder</NavLink>
        </li>
      </ul>

      <Link to="/cart" className="cart ml-auto cursor-pointer relative">
      <i className="fa-solid fa-cart-shopping text-lg"></i>
      <div className="cart-count h-5 w-5 flex justify-center items-center rounded-full bg-primcolor-400 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white">
      {cartInfo == null ? 
      (<i className='fa-solid fa-spinner fa-spin'>

      </i>):
      <span className='text-white'>{cartInfo.numOfCartItems}</span>
    }
      </div>
      </Link>  
</>}

      <ul className={`flex gap-5 items-center ${!token && "ms-auto"}`} >
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  }
            to="https://instagram" target='_blank'><i className="fa-brands fa-facebook"></i></NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="https://instagram " target='_blank'><i className="fa-brands fa-instagram"></i></NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="https;//facebook " target='_blank'><i className="fa-brands fa-twitter"></i></NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="https;//facebook " target='_blank'><i className="fa-brands fa-github"></i></NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="https;//facebook " target='_blank'><i className="fa-brands fa-linkedin"></i></NavLink>
        </li>
      </ul>

{!token && 
<>
<ul className='flex gap-5 items-center' >
        <li>
        <NavLink
  className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  }
  to="/signup"
>
  Signup
</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="/Login">login</NavLink>
        </li>
      </ul>
</>}
{
  token&& <>
          <li className='list-none cursor-pointer' onClick={logOut}>
          <NavLink className={({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? ' before:!w-full font-semibold ' : ''
    }`
  } to="/logout"><i className="fa-solid fa-right-from-bracket text-lg"></i></NavLink>
        </li>
  
  </>
}
      </div>
    </nav>
    
    
    
    
    
    
    
    
    
    







    
    
    
    </>
  )
}
