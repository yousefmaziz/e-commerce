// import { axios,useEffect, useState } from "react"
// import Card from "../Card/Card"
// import Loading from "../Loading/Loading"

// export default function Home () {
    
//     const [products , setproducts] =useState()

//     async function getProducts() {
//         const options= {
//             url: "https://ecommerce.routemisr.com/api/v1/products",
//             method :"GET"

//         }
//          let {data}= await axios.request(options);
//          console.log(data);
//          setproducts(data.data)
//     }

// useEffect(()=>{
//     getProducts()
// },[])

//  return (
//               <>
//     {!products ? <Loading/> : <div className="grid sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-3"></div>}
//                 {products.map((product)=><Card key={product.id}/>)}
                

    
//     </>
//   )
// }
