import React, { useContext } from 'react'
import image from "../../img/mastercard.webp"
import { CartContext } from '../../../context/Cart.context'
import { Wishcontext } from '../../../context/WishList.context'
export default function WishListItem({wishInfo}) {

    let {description ,id,title ,imageCover ,price } = wishInfo
    // let{category}=product
let {addProduct} = useContext(CartContext)
let{removeItemFormWish}=useContext(Wishcontext)
  return (
    <>
    
<div className='my-8 bg-gray-100 p-3'>

<h1 className="text-2xl font-bold mb-4">My Wish List</h1>
      <div className="flex items-center justify-between">
        {/* Product Image */}
        <div className="w-20 h-20">
          <img
            src={imageCover}
            alt=''
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow ml-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-green-600 font-bold text-sm">{price}EGP</p>
          <button type='submit'
            onClick={()=>{
                removeItemFormWish({productId:id})
            }}
            className="text-red-500 text-sm font-semibold hover:underline flex items-center mt-2"
          >
            <span className="mr-1">
              <i className="fas fa-trash"></i>
            </span>
            Remove
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
    onClick={()=>{
        addProduct({productId:id})
    }}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
</div>
    
    </>
  )
}
