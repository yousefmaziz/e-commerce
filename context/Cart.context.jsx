import axios from "axios";
import { createContext, useContext, useState } from "react";
import { UserContext } from "../src/Context/User.context";
import toast from "react-hot-toast";

export  const CartContext=   createContext(null)


export default function CartProvider({children}){

const {token } =useContext(UserContext)

const [cartInfo,setCartInfo]=useState(null)

    async function addProduct({productId}){

    try{
        const options={
            url:'https://ecommerce.routemisr.com/api/v1/cart',
            method:"POST",
            headers:{
            token
            }, 
            data:{
                productId
            }
        }
        let {data} = await axios.request(options)
        if(data.status=="success"){
            toast.success(data.message)
            getCartproducts()
        }
        
    }catch(error){
        console.log(error);
        
    }


}


   async function getCartproducts(){
       try{
        const options={
            url:'https://ecommerce.routemisr.com/api/v1/cart',
            method:'GET',
            headers:{
                token
            },

        }
    
    let {data}= await axios.request(options)
    console.log(data);
    setCartInfo(data)
    
       }
       catch(error){
        console.log(error);
        
       }
    
    }


    async function removeItem({productId}){
        try{
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                method:'DELETE',
                headers:{
                    token
                },
            }
        let {data}= await axios.request(options)
        setCartInfo(data)
        if(data.status=="success"){
            toast.success("Deleted")
        }
}
        catch(error){
            console.log(error);
            
}
}   

    async function clearCart(){
        try{
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/cart`,
                method:'DELETE',
                headers:{
                    token
                },
            }
        let {data}= await axios.request(options)
        if(data.message=="success"){
            setCartInfo(
                {
                    numOfCartItems:0
                }
                
            )
            toast.success("Is empty ")
            
        }
}
        catch(error){
            console.log(error);
            
}
    }

    async function updateCartCount({productId,count}){
        try{
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                method:'PUT',
                headers:{
                    token
                },
                data:{
                    count
                }
            }
        let {data}= await axios.request(options)
        if(data.status=="success"){
            setCartInfo(data)
        }
}
        catch(error){
            console.log(error);
            
}
    }





return(

    <>
    <CartContext.Provider value={{addProduct,getCartproducts,cartInfo,removeItem,clearCart,updateCartCount}}>
{children}
    </CartContext.Provider>
    </>
    )
}