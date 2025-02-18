import styles from "./CartModal.module.css";
import closeImg from '../../../assets/close.svg'
import { useCartContext } from "../../../hooks/useCartContext";
import Table from "../Table/Table";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props{
  showModal: boolean
  setShowModal: (value: boolean) => void
}

const CartModal: FC<Props> = ({ showModal, setShowModal }) => {

  const { state: {cartItems} } = useCartContext();
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(false);
  }
  
  const totalPay = () => {
    const total = cartItems.reduce((accum, item) => {
          return accum + item.price * item.quantity
    }, 0);
    return total
  };

  const navigateToCheckout = () => {
     navigate('/checkout');
  };

  return (
    <div className={showModal ? styles.modalOpen : styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowModal}>
        <img src={closeImg} alt="Close" />
      </button>
      <Table/>
      <div className={styles.modalTotalContainer}>
        <h3>${totalPay()}</h3>
      </div>
      <div>
        <button className={styles.modalButtonContainer} onClick={navigateToCheckout}>checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
