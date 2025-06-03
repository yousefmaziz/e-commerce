import { useContext } from "react"
import { CartContext } from "../../../context/Cart.context"
import { Link } from "react-router-dom"

export default function CartItem({productInfo}) {
    let{removeItem,updateCartCount}=useContext(CartContext)


    let {price, count , product}= productInfo
    let {imageCover,title, category ,id}=product
  return (
<>

<div className="flex gap-2">
<div className="card-item grow flex justify-between items-center bg-gray-100 py-4 pr-10 pl-3 rounded-lg">
    <img src={imageCover} className="w-24 rounded-full h-24 border-white border-4 object-cover " alt="" />
    <h3 className="text-gray-700 font-semibold text-lg">
      <Link to={`/product/${id}`}>{title}</Link>
      
      </h3>
    <h4 className="text-gray-500 font-semibold ">{category.name}</h4>
    <div className="count flex gap-2 items-center ">
        <span className="text-2xl font-bold text-gray-700">{count}</span>
        <div className="icons space-y-2 flex-col ">

          <div
          onClick={()=>{
            updateCartCount({productId:id ,count: count +1})
          }}
          className="plus rounded-full w-6 h-6 text-white bg-gray-800 flex justify-center items-center cursor-pointer">
          <i className="fa-solid fa-plus "></i>
          </div>


           <div
           onClick={()=>{
            updateCartCount({productId:id ,count: count -1})
           }}
           className="minus rounded-full w-6 h-6 text-white bg-gray-800 flex justify-center items-center cursor-pointer">
           <i className="fa-solid fa-minus "></i>
           </div>
        </div>
        <span className="">{price} L.E</span>
    </div>
</div>



<button onClick={()=>{
    removeItem({productId:id})
}} className="rounded-md bg-gray-100 hover:bg-gray-300 transition-colors duration-300 p-3">
    <i className="fa-solid fa-xmark"></i>
</button>
</div>


</>
  )
}
