import styles from "./CartModal.module.css";
import closeImg from '../../../assets/close.svg'

const CardModal = ({ handleShowCartModal }) => {
  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal} >
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
          <tr>
            <td>name</td>
            <td>
              <button className={styles.modalButtonRemove}>-1</button>
            </td>
            <td>12</td>
            <td>
              <button className={styles.modalButtonAdd}>+1</button>
            </td>
          </tr>
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
