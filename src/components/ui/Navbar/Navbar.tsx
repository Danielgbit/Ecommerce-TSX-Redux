import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.svg";
import cart from "../../../assets/cart.svg";
import { useCartContext } from "../../../hooks/useCartContext";
import { useState } from "react";
import CartModal from "../CartModal/CartModal";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { state } = useCartContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.navbarContainer}>
      <img src={logo} alt="Logo Ecommerce" onClick={navigateToHome} />
      <div className={styles.navbarDetail}>
        <span>DH PROJECT TSX</span>
      </div>
      {location.pathname !== '/checkout' && (
        <>
          <div className={styles.navbarCartContainer}>
            <p className={styles.navbarTextAmount}>{state.cartItems.length}</p>
            <img src={cart} alt="Logo carrito" onClick={handleShowModal} />
          </div>
          <CartModal showModal={showModal} setShowModal={setShowModal} />
        </>
      )}
    </div>
  );
};

export default Navbar;
