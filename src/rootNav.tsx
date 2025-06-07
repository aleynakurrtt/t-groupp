import { Outlet } from "react-router-dom"
import NavRoot from "./sections/Navbar/NavRoot"
import FooterNav from "./sections/Footer/footerNav"





function RootNavLayout() {
  return (
    <>
    <NavRoot/>
    <Outlet/>
    <FooterNav/>
    </>
  )
}

export default RootNavLayout