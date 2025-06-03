
import { useContext, useEffect, useState } from "react"
import img from "../../assets/react.svg"
import { CartContext } from "../../../context/Cart.context"
import { Link } from "react-router-dom"
import { Wishcontext } from "../../../context/WishList.context"




export default function Card({productInfo}) {
    let {imageCover , id ,title, price , category,description , ratingAverage } = productInfo
    let {addProduct} = useContext(CartContext)
    let {addProductToWish,removeItemFormWish,wishInfo} = useContext(Wishcontext)



    const [isInWishlist, setIsInWishlist] = useState(false); 

   const handleWishToggle = () => {
    if (isInWishlist) {
        removeItemFormWish({ productId: id });
    } else {
        addProductToWish({ productId: id });
    }
};
useEffect(() => {
    if (wishInfo?.data) {
      const found = wishInfo.data.some((product) => product._id === id);
      setIsInWishlist(found);
    }
  }, [wishInfo, id]);


    
  return (
    <>
    
<div className="card group/card rounded-lg overflow-hidden shadow-lg">
  
  <Link to={`/product/${id}`}>
    <img
      src={imageCover}
      alt={title}
      className="w-full h-64 object-cover transition-transform duration-300 group-hover/card:scale-105"
    />
  </Link>


  <div className="card-details space-y-4 p-6">
    <header>
      <h3 className="text-lg text-gray-600 font-semibold line-clamp-1">
        {title}
      </h3>
      <h4 className="text-primcolor-400 font-semibold">{category.name}</h4>
    </header>

    <p className="text-sm text-gray-400 line-clamp-2">{description}</p>

    <div className="flex justify-between items-center">
      <span>{price} L.E</span>
      <div>
        <i className="fa-solid fa-star text-yellow-400 mr-2"></i>
        <span>{ratingAverage}</span>
      </div>
    </div>

    <div className="flex justify-between items-center gap-2">
      {/* زر إضافة للسلة */}
      <button
        onClick={() => {
          addProduct({ productId: id });
        }}
        className="py-1 px-4 bg-primcolor-400 rounded-lg hover:bg-primcolor-600 duration-400 text-white w-full md:w-auto"
      >
        Add to cart
      </button>

      {/* زر الإضافة للمفضلة */}
      <button
        onClick={() => {
          handleWishToggle();
        }}
        className={`icons cursor-pointer w-8 h-8 rounded-full bg-primcolor-600 flex justify-center items-center ${
          isInWishlist ? "text-red-500" : "text-white"
        }`}
      >
        <i className="fa-solid fa-heart"></i>
      </button>
    </div>
  </div>
</div>

    
    
    
    </>
  )
}
