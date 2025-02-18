import styles from "./CartModal.module.css";
import closeImg from '../../../assets/close.svg'
import { FC } from "react";
import Table from "../Table/Table";

interface Props{
  handleShowCartModal : () => void 
};

const CardModal: FC<Props> = ({ handleShowCartModal }) => {



  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={closeImg} alt="Close" />
      </button>
      <Table/>
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