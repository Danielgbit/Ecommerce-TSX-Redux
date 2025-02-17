import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";
import CartModal from "../ui/CartModal/CartModal";

const LayoutMain = () => {
  return (
    <>
      <Navbar />
      <CartModal />
      <Outlet />
    </>
  );
};

export default LayoutMain;
