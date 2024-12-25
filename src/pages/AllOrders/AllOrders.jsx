import axios from "axios"
import img from "../../img/grocery-banner.png"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/User.context"
import { jwtDecode } from "jwt-decode"
import Loading from "../../component/Loading/Loading"
import { Link } from "react-router-dom"
export default function AllOrders() {

  const [orders,setOrders]=useState(null)  
  const {token}=useContext(UserContext)
  let {id}=  jwtDecode(token)




  async function getOrder(){
  
  
try {
    const options = {
      url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
      method:'GET',
    }

let {data} = await axios.request(options)
console.log(data);

setOrders(data)
  } catch (error) {
    console.log(error);
    
}
  }

useEffect(()=>{
  getOrder()
},[])





  return (
    <>

{orders ?     <section className="space-y-4">
{orders.map((order)=> <>
  <div key={order.id} className="order border-2 border-gray-500 rounded-lg border-opacity-25 p-5">
        <div className="header flex justify-between">
          <div className="header-num">
            <h2 className="font-semibold text-xl text-gray-600">order ID</h2>
            <span className="font-bold text-md">#{order.id}</span>
          </div>
          <div className="buttons space-x-3">
            {order.isPaid ? <span className="font-semibold rounded-full inline-block bg-red-500 hover:bg-red-600 py-1 px-3 text-white">تم مدفوع</span>
            :<span className="font-semibold rounded-full inline-block bg-red-500 hover:bg-red-600 py-1 px-3 text-white">غير مدفوع</span>}


            {order.isDelivered ? <span className="font-semibold rounded-full inline-block bg-blue-500 hover:bg-blue-600 py-1 px-3 text-white">نم التوصيل</span>:
            <span className="font-semibold rounded-full inline-block bg-blue-500 hover:bg-blue-600 py-1 px-3 text-white">قيد التوصيل</span>}
          </div>
        </div>




        <div className="grid mt-4 md:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

{order.cartItems.map((product)=> <>
  <div key={product._id} className="product-item overflow-hidden  border-2 border-gray-500 rounded-lg border-opacity-25">
            <img src={product.product.imageCover} alt="" className="w-full"/>
<div className="px-4">
<h3 className="font-semibold text-lg line-clamp-2 ">
<Link to={`/product/${product.product.id }`}>
{product.product.title}
</Link>

</h3>
            <div className="flex justify-between items-center my-5">
              <p>
              <span className="font-bold">count {product.count}</span>
              </p>
              <span>{product.price} L.E</span>
            </div>

</div>
          </div>
</>)}




        </div>


  <p className="mt-8 text-xl font-semibold ">Your total order is 
    <span className="text-primcolor-500 ml-2">
    {order.totalOrderPrice} L.E
    </span></p>

      </div>
</>)}
    </section> : <Loading/>}
    </>
  )

}