import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Layout from "./component/Layout/Layout";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import GuestRoute from "./component/GuestRoute/GuestRoute";
import UserProvider from "./Context/User.context";
import CartProvider from "../context/Cart.context";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Category from "./pages/Category/Category";
import Brand from "./pages/Brand/Brand";
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";
import Verifycode from "./component/Verifycode/Verifycode";
import Resetpassword from "./component/resetpassword/Resetpassword";
import AllOrders from "./pages/AllOrders/AllOrders";
import Checkout from "./pages/Checkout/Checkout";
import WishList from "./component/WishList/WishList";
import WishProvider from "../context/WishList.context";

export default function App() {
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },

      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },

      {
        path: "category",
        element: (
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        ),
      },

      {
        path: "brand",
        element: (
          <ProtectedRoute>
            <Brand />
          </ProtectedRoute>
        ),
      },

      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>
        ),
      },

      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },

      { path: "product/:id", element: <ProductDetails /> },
    ],
  },

  {
    path: "/",
    element: (
      <GuestRoute>
        <Layout />
      </GuestRoute>
    ),
    children: [
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "forgetPassword", element: <ForgetPassword /> },
      { path: "verifycode", element: <Verifycode /> },
      { path: "resetpassword", element: <Resetpassword /> },
    ],
  },
]);


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
