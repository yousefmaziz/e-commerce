import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/User.context'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import { Wishcontext } from '../../../context/WishList.context'

import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../../context/Cart.context'
import Card from '../Card/Card'
import WishListItem from '../WishListItem/WishListItem'
export default function WishList() {

let { getWishproducts ,wishInfo,removeItemFormWish}=useContext(Wishcontext)
let { cartInfo }=useContext(CartContext)

useEffect(()=>{
    getWishproducts()
},[])







  return(
    <>
{wishInfo === null ? <Loading/> :
    <section >

    {wishInfo.data.map((product)=> <WishListItem key={product._id} wishInfo={product}/>)}

   
</section>}

    </>
  )
}
