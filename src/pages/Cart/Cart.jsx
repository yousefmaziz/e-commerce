import { useContext, useEffect } from "react"
import { CartContext } from "../../../context/Cart.context"
import Loading from "../../component/Loading/Loading"
import CartItem from "../../component/CartItem/CartItem"
import { Link } from "react-router-dom"


export default function Cart() {
   
let {getCartproducts,cartInfo,clearCart}=useContext(CartContext)

useEffect(()=>{
    getCartproducts()
},[])


    return (
    <>


{cartInfo === null ? <Loading/> : <section>
    <div>
        <h2 className="text-semibold text-gray-700 text-xl">Your shopping cart</h2>
    </div>
    {cartInfo.numOfCartItems === 0 ? 
    
    <>
    <div className="mt-6 bg-gray-100 p-5 shadow rounded-md flex justify-center items-center flex-col gap-3">
        <h2 className="">Your cart is empty </h2>
    <Link to='/' className= "btn bg-primcolor-500 hover:bg-primcolor-700 text-white text-md">Back to Home</Link>
    </div>
    </>
    
    :(
  <>
  
  <div className="space-y-4 mt-6">
        {cartInfo.data.products.map((product)=> <CartItem key={product._id} productInfo={product}/>)}
        
    </div>
   <div className="flex justify-between items-center">
   <p className="text-semibold text-gray-700 text-xl mt-8">Your total price is <span className="text-primcolor-600">
   {cartInfo.data.totalCartPrice}
    </span></p>
   <button
   onClick={clearCart}
   className="btn bg-red-500 hover:bg-red-800 text-semibold text-white text-md"> Delete Cart</button>
   </div>
<Link className="btn bg-primcolor-500 hover:bg-primcolor-600 text-white inline-block w-full text-center mt-8" to={"/checkout"}>

GO TO PAYMENT
</Link>
  </>


)
    
    
    }
    </section>}



    </>
  )
}
