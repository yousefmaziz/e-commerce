
import { useState } from "react"

export default function CateItem({CategoryInfo}) {

    let {image , id ,slug ,price,name } = CategoryInfo
    
  return (
    <>

    <div className="card group/card cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-primcolor-500 transition-shadow duration-300">
    <div>
    <img src={image} alt="" className="w-full h-56 object-cover" />
    </div>
    <div className="body">
    <h3 className="text-primcolor-500 font-semibold text-center text-2xl py-3">{name}</h3>
    </div>
    </div>

    
    </>
  )
}
