
import { useContext, useState } from "react"
import img from "../../assets/react.svg"
import { CartContext } from "../../../context/Cart.context"
import { Link } from "react-router-dom"
import { Wishcontext } from "../../../context/WishList.context"




export default function Card({productInfo}) {
    let {imageCover , id ,title, price , category,description , ratingAverage } = productInfo
    let {addProduct} = useContext(CartContext)
    let {addProductToWish} = useContext(Wishcontext)



    const [isInWishlist, setIsInWishlist] = useState(false); 

    const handleWishToggle = () => {
        
        setIsInWishlist(!isInWishlist); 
        addProductToWish({ productId:id });
    };


    
  return (
    <>
    
    <div className="card group/card rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
      <img src={imageCover} alt="" />

<div
    onClick={()=>{
        addProductToWish({productId:id})
    }}



className="layer group-hover/card:opacity-100 transation-opacity duration-300  flex justify-center items-center gap-4 absolute w-full h-full bg-slate-400 left-0 top-0 bg-opacity-40 opacity-0 ">
<button
    onClick={() => {
        handleWishToggle(); 
    }}
    className={` icons cursor-pointer w-8 h-8
     rounded-full bg-primcolor-600 flex justify-center items-center ${
        isInWishlist ? "text-red-500" : "text-white"
    }`}
>
    <i className="fa-solid fa-heart"></i>
</button>

    <div
    onClick={()=>{
        addProduct({productId:id})
    }}
    className="icons cursor-pointer w-8 h-8 text-white rounded-full bg-primcolor-600 flex justify-center items-center">
        <i className="fa-solid fa-cart-shopping"></i>
    </div>
    <Link to={`/product/${id}`} className="icons cursor-pointer w-8 h-8 text-white rounded-full bg-primcolor-600 flex justify-center items-center">
        <i className="fa-solid fa-eye"></i>
    </Link >
</div>
      </div>

        <div className="card-details space-y-4 p-6">
            <header>
                <h3 className='text-lg text-gray-600 font-semibold line-clamp-1'>{title}</h3>
                <h4 className=' text-primcolor-400 font-semibold'> {category.name}</h4>
            </header>
            <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        <div className='flex justify-between items-center'> 
            <span>{price} L.E</span>
            <div>
                <i className='fa-solid fa-star text-yellow-400 mr-2'></i>
                <span>{ratingAverage}</span>
            </div>
        </div>

        </div>
    </div>
    
    
    
    </>
  )
}
