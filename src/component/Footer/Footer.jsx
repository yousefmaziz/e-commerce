import amazon from "../../img/amazon-pay.png"
import apple from "../../img/get-apple-store.png"
import google from "../../img/get-google-play.png"
import American from "../../img/American-Express-Color.png"
import paypal from "../../img/paypal.png"
import mastercard from "../../img/mastercard.webp"


export default function Footer() {
  return (
    <>

<footer className="w-full bg-gray-100 py-10 text-gray-700 text-sm mt-16">
  <div className="max-w-7xl mx-auto px-4 space-y-8">

    <div>
      <h2 className="text-lg font-semibold mb-2">Get The FreshCart App</h2>
      <p className="mb-4">We will send you a link, open it on your phone to download the app.</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <input
          type="email"
          placeholder="Email .."
          className="w-full sm:w-auto flex-grow border rounded-md px-4 py-2 outline-none"
        />
        <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md">
          Share App Link
        </button>
      </div>
    </div>


    <hr className="border-gray-300" />

    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <span className="font-semibold">Payment Partners</span>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
          <img src={amazon} alt="Amazon Pay" className="h-2" />
          <img src={American} alt="Amex" className="h-5" />
          <img src={mastercard} alt="Mastercard" className="h-5" />
          <img src={paypal} alt="PayPal" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-2" />
        </div>
      </div>


      <div className="flex flex-col sm:flex-row items-center gap-3">
        <span className="font-semibold hidden md:inline">Get deliveries with FreshCart</span>
        <a href="#"><img src={google} alt="Google Play" className="h-10" /></a>
        <a href="#"><img src={apple} alt="App Store" className="h-10" /></a>
      </div>
    </div>


    <hr className="border-gray-300" />


    <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4 text-center md:text-left">
      <p>
        © 2022 - 2024 FreshCart e-Commerce HTML Template. All rights reserved. Powered by{" "}
        <a href="#" className="text-green-600 font-semibold">Codescandy</a>
      </p>
      <div className="flex items-center gap-4">
        <span>Follow us on</span>
        <a href="#"><i className="fab fa-facebook text-gray-600 text-lg"></i></a>
        <a href="#"><i className="fab fa-twitter text-gray-600 text-lg"></i></a>
        <a href="#"><i className="fab fa-instagram text-gray-600 text-lg"></i></a>
      </div>
    </div>
  </div>
</footer>







    </>




  )
}
