import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";

const LayoutMain = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LayoutMain;
