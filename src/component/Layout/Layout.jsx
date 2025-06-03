
import Footer from '../Footer/Footer'
import Navabr from '../Navbar/Navabr'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  <Navabr/>
  <div className="container py-12">
  <Outlet></Outlet>
  </div>
  <Footer/>

  </>
  
}
