import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../component/Loading/Loading';
import BrandItem from '../BrandItem/BrandItem';
import { UserContext } from '../../Context/User.context';

export default function Brand() {
    const [brand,setBrand] =useState(null)
    const {token } =useContext(UserContext)
    async function getBrand(){
        try{
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/brands`,
                method:'GET',
                headers:{
                    token
                },

            }
        
        let {data}= await axios.request(options)

        setBrand(data.data)
        
        
        }
    catch(error){
            console.log(error);
    }    
    }
    
    
    
    useEffect(()=>{
        getBrand()
    },[])

  return (
      <>
    {brand ?  
           <div>
             <h1 className="text-primcolor-600 text-center font-bold text-2xl mb-8">All Brands</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    
        {brand.map((product)=> <BrandItem BrandInfo={product} key={product._id}/>)}
        </div>
           </div>
        
    
     : <Loading/>}
        </>
  )
}
