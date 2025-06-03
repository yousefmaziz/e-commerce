
import axios from "axios";

import { useEffect, useState } from "react";
import Loading from "../../component/Loading/Loading";
import CateItem from "../../component/CateItem/CateItem";


export default function Category() {

    const [category,setCategory] =useState(null)
    async function getCategory(){
    try{
        const options={
            url:`https://ecommerce.routemisr.com/api/v1/categories`,
            method:'GET',
        }
    let {data}= await axios.request(options);
    setCategory(data.data.slice(0, 10));
    }
catch(error){
        console.log(error);
}    
}
useEffect(()=>{
    getCategory()
},[])


  return (
    <>
{category ?  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

    {category.map((product)=> <CateItem CategoryInfo={product} key={product._id}/>)}
    </div>
    

 : <Loading/>}
    </>
  )
}
