import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";
import CardModal from "../ui/CardModal/CardModal";

const LayoutMain = () => {
  return (
    <>
      <Navbar />
      <CardModal />
      <Outlet />
    </>
  );
};

export default LayoutMain;
