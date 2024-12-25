import { useEffect, useState } from "react"
import Card from "../../component/Card/Card";
import Loading from "../../component/Loading/Loading";
import axios from "axios"
import HomeSlider from "../../component/HomeSlider/HomeSlider";
import CategorySlider from "../../component/CategorySlider/CategorySlider";
export default function Home () {

  
  const [products , setproducts] =useState(null)




  async function getProducts() {
    const options= {
        url: 'https://ecommerce.routemisr.com/api/v1/products',
        method :"GET"
    }

    let { data }= await axios.request(options)
setproducts(data.data)
    
}

useEffect(()=>{
  getProducts()
},[])
return (
  <>

  <HomeSlider/>
  <CategorySlider/>
{!products ? <Loading/> : <div className="grid sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
                {products.map((product)=> <Card productInfo={product} key={product.id}/>)}
  </div>}
  </>
)
}



