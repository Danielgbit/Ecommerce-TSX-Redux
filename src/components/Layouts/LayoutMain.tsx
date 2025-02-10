import { Outlet } from "react-router-dom"
import Navbar from "../ui/Navbar"

const LayoutMain = () => {
  return (
    <>
        <Outlet/>
        <Navbar/>
    </>
  )
}

export default LayoutMain