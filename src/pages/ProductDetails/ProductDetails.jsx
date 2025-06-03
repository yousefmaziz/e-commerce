
import axios from "axios";
import img from "../../img/blog-img-1.jpeg"
import { useContext, useEffect, useState } from "react";
import Loading from "../../component/Loading/Loading";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/Cart.context";
export default function ProductDetails() {


let [ProductDetails,setProductDetalis]=useState(null)
let {id}= useParams()

   let {addProduct}= useContext(CartContext)

   async function getProductDetails(){
        try{
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/products/${id}`,
                method:'GET',
            }
        
        let {data}= await axios.request(options)
        console.log(data);
        setProductDetalis(data.data)
        }
catch(error){
            console.log(error);
            
}    
    }
useEffect(()=>{
    getProductDetails()
},[])




  return (
    <>
{ProductDetails ?     <section className="grid grid-cols-12 gap-5 mx-3">
    <div className="col-span-3">
    <img src={ProductDetails.imageCover}alt="" className="w-full"/>
    </div>
    


<div className="col-span-9 space-y-4">
<div>
<h2 className="text-2xl font-semibold text-gray-600">{ProductDetails.title}</h2>
<h3 className="text-primcolor-400 font-semibold">{ProductDetails.category.name}</h3>
</div>
    <p className="text-gray-400">{ProductDetails.description}</p>
    <div className="flex justify-between items-center">
        <span>{ProductDetails.price} L.E</span>
        <div>
            <i className="fa-solid fa-star text-yellow-500 mr-2"></i>
        <span>{ProductDetails.ratingsAverage}</span>
        </div>
</div>

<button
onClick={()=>{
    addProduct({productId:id})
}} 
className="btn bg-primcolor-400 hover:bg-primcolor-600 font-semibold text-white w-full"> Add To Card</button>
</div>

    </section> : <Loading/>}
    </>
  )
}
