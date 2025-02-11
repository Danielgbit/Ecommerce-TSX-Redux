import styles from './Navbar.module.css'
import logo from '../../../assets/logo.svg'
import cart from '../../../assets/cart.svg'
import { useState } from 'react'
import CardModal from '../CardModal/CardModal'

const Navbar = () => {

  const [showCartModal, setShowCartModal] = useState(false);

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <div className={styles.navbarContainer}>
          <img src={logo} alt="Logo Ecommerce" />
        <div className={styles.navbarDetail}>
          <span>DH PROJECT TSX</span>
        </div>
        <div className={styles.navbarCartContainer}>
          <p className={styles.navbarTextAmount}>2</p>
          <img src={cart} alt="Logo carrito"/>
        </div>
        {showCartModal && (<CardModal handleShowCartModal={handleShowCartModal} />)}
    </div>
  )
}

export default Navbar