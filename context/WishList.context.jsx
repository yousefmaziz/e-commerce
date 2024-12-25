import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../react/src/Context/User.context";

export const Wishcontext = createContext(null);

export default function WishProvider({ children }) {
    const { token } = useContext(UserContext);
    const [wishInfo, setWishInfo] = useState(null);

    async function addProductToWish({ productId }) {
        try {
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/wishlist",
                method: "POST",
                headers: { token },
                data: { productId },
            };

            let { data } = await axios.request(options);
            console.log(data);
            if (data.status === "success") {
                setWishInfo(data); 
                toast.success(data.message); 
                
            } 
        } catch (error) {
            console.log(error);
            
        }
    }

    async function getWishproducts() {
        try {
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/wishlist",
                method: "GET",
                headers: { token },
            };

            let { data } = await axios.request(options);
            setWishInfo(data);

        } catch (error) {
           console.log(error);
           
        }
    }

    async function removeItemFormWish({productId}){
        try{
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
                method:'DELETE',
                headers:{
                    token
                },
            }
        let {data}= await axios.request(options)
        
        if(data.status=="success"){
            setWishInfo(data)
            getWishproducts()
            toast.success("Deleted")
        }
}
        catch(error){
            console.log(error);
            
}
}   



    return (
        <Wishcontext.Provider value={{ addProductToWish, getWishproducts, wishInfo,removeItemFormWish }}>
            {children}
        </Wishcontext.Provider>
    );
}
