import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/Cart.context'
import { UserContext } from '../../Context/User.context'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Checkout() {
    const [paymentMethod,setPaymentMethod]=useState(null)

const {cartInfo} =useContext(CartContext)
const {token} =useContext(UserContext)
let navigate=useNavigate()

async function CashOrder(values){
try{
    const options={
        url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.cartId}`,
        method:'POST',
        headers:{
            token
        },
        data:values,
    }   

    let {data} = await axios.request(options)
    if(data.status=="success"){
        toast.success("Your order has been created")
        setTimeout(()=>{
        navigate('/order')
        },1500)
    }
}
    catch(error){
        console.log(error);
        
    }
}







async function onlinePayment(values){
try{
    const options={
        url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.cartId}?url=${location.origin}`,
        method:'POST',
        headers:{
            token
        },
        data:values,
    }   

    let {data} = await axios.request(options)
    console.log(data);
    
    if(data.status=="success"){
        toast.success("Go TO PAY")
        setTimeout(()=>{
            location.href=data.session.url
        
        },1500)
    }
}
    catch(error){
        console.log(error);
        
    }
}


    const formik =useFormik({
        initialValues:{
            shippingAddress:{
                details:'',
                phone:"",
                city:""
                },
        },


        
    onSubmit:(values)=>{
        if(paymentMethod =="cash"){
            CashOrder(values)
        }else{ 
            onlinePayment(values)
        }
    }


    }
)
  return (
    <>
    
    <section>
        <h1 className='text-xl text-gray-700 font-semibold mb-4'>Shipping address</h1>
        <form action="" className='space-y-4' onSubmit={formik.handleSubmit}>
            <div className="city ">
                <input type="text" className='form-control w-full' name="shippingAddress.city" id=""  placeholder='Type your city..'
                value={formik.values.shippingAddress.city}
                onChange={formik.handleChange}/>
            </div>



            <div className="tel ">
                <input type="tel" className='form-control w-full' name="shippingAddress.phone" id=""  placeholder='Type your phone..'
                value={formik.values.shippingAddress.phone}
                onChange={formik.handleChange}/>
            </div>



            <div className="details">
                <textarea className='form-control w-full' name="shippingAddress.details" id=""  placeholder='Type your details..'

                
                value={formik.values.shippingAddress.details}
                onChange={formik.handleChange}
                >
                </textarea>


               <div className=''>
               <button
                onClick={()=>{
                setPaymentMethod("cash")
                }}
               type='submit' className='btn bg-blue-500 hover:bg-blue-600 text-semibold text-white'>Cash oreder</button>
               
               
               
               <button 
                onClick={()=>{
                    setPaymentMethod("online")
                }}
                
                type='submit' className='btn bg-lime-500 hover:bg-lime-600 text-semibold text-white  ml-2'>Online payment</button>
               </div>
            </div>
        </form>
    </section>
    
    </>
  )
}
