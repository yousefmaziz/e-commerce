import { Navigate } from "react-router-dom"
import { UserContext } from "../../Context/User.context"
import { useContext } from "react"


export default function ProtectedRoute({children}) {
    let {token}=
    useContext(UserContext)
    if(token){

        return  children

    
}else{
    return <Navigate to="/Login"/>
}
}