
import { createBrowserRouter ,RouterProvider } from "react-router"
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import Layout from "./component/Layout/Layout"
import { Toaster } from "react-hot-toast"
// import CartProvider from "../context/Cart.context"
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute"
import GuestRoute from "./component/GuestRoute/GuestRoute"
import UserProvider from "./Context/User.context"
import CartProvider from "../context/Cart.context"
import Cart from "./pages/Cart/Cart"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Category from "./pages/Category/Category"
import Brand from "./pages/Brand/Brand"
import ForgetPassword from "./component/ForgetPassword/ForgetPassword"
import Verifycode from "./component/Verifycode/Verifycode"
import Resetpassword from "./component/resetpassword/Resetpassword"
import Order from "./pages/AllOrders/AllOrders"
import Checkout from "./pages/Checkout/Checkout"
import AllOrder from "./pages/AllOrders/AllOrders"
import AllOrders from "./pages/AllOrders/AllOrders"
import WishList from "./component/WishList/WishList"
import WishProvider from "../context/WishList.context"




export default function App() {
  let router = createBrowserRouter(
    [
      {path:"/", element:(

        <ProtectedRoute>
        <Layout/>
        </ProtectedRoute> 
      ), 
      children:[
        {index:true, element: <Home/>},
        {path:"cart",element:<Cart/>},
        {path:"product/:id",element:<ProductDetails/>},
        {path:"wishlist",element:<WishList/>},
        {path:"category",element:<Category/>},
        {path:"brand",element:<Brand/>},
        {path:"allorders",element:<AllOrders/>},
        {path:"checkout",element:<Checkout/>},
      ]
    },

    {
      path:"/",element:(

        <GuestRoute>
        <Layout/>
      </GuestRoute>
      ),
      children:[
        {path:"Signup", element: <Signup/>},
        {path:"login", element: <Login/>},
        {path:"forgetPassword", element: <ForgetPassword/>},
        {path:"verifycode", element: <Verifycode/>},
        {path:"resetpassword", element: <Resetpassword/>},
      ]
    }

      ]
    )
        return (
          <>
        <UserProvider>
          <CartProvider>
<WishProvider>

        <RouterProvider router={router} />
</WishProvider>


          </CartProvider>
        </UserProvider>
          
        <Toaster />

    </>
  );
}


