import styles from "./CartModal.module.css";
import closeImg from '../../../assets/close.svg'
import { FC } from "react";
import { useCartContext } from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";

interface Props{
  handleShowCartModal : () => void 
};

const CardModal: FC<Props> = ({ handleShowCartModal }) => {

  const { state: {cartItems}, dispatch } = useCartContext();

  console.log(cartItems);
  
  const handleOnRemove = (item: CartProduct) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleAddProductInCart = (item: CartProduct) => {
    dispatch({ type: 'ADD_TO_CART', payload: item});
  };

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={closeImg} alt="Close" />
      </button>
      <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <button onClick={() => handleOnRemove(item)} className={styles.modalButtonRemove}>-1</button>
            </td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => handleAddProductInCart(item)} className={styles.modalButtonAdd}>+1</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.modalTotalContainer}>
        <h3>TOTAL: 500.00</h3>
      </div>
      <div>
        <button className={styles.modalButtonContainer}>checkout</button>
      </div>
    </div>
  );
};

export default CardModal;