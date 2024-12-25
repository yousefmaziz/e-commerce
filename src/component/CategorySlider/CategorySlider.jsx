import axios from "axios"
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CategorySlider() {
    const [Category,setCategory]=useState(null)
    async function getCategory(){

        const options={
            url:'https://ecommerce.routemisr.com/api/v1/categories',
            method:'GET'

        }
        let {data}=await axios.request(options)

setCategory(data.data)
    }
    useEffect(()=>{
        getCategory()
    },[])
  return (
    <>
    
    <section className="my-12">
        <h2 className="mb-3 text-bold text-lg text-gray-600">Shop Category </h2>
    {!Category ? <Loading/> : 
        <Swiper slidesPerView={6} loop={true}>
            {Category.map((Category)=>
            <SwiperSlide key={Category._id}>
<div className="h-64 ">
<img className="w-full h-full object-cover" src={Category.image} alt="" />
</div>
<h3>{Category.name}</h3>
            </SwiperSlide>)
            }
        </Swiper>
        }
    </section>
    
    
    
    
    </>
  )
}
