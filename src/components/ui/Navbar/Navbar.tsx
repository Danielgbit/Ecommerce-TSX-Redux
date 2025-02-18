import styles from './Navbar.module.css'
import logo from '../../../assets/logo.svg'
import cart from '../../../assets/cart.svg'
import { useState } from 'react'
import CardModal from '../CartModal/CartModal'
import { useCartContext } from '../../../hooks/useCartContext'

const Navbar = () => {

  const [showCartModal, setShowCartModal] = useState(false);

  const isModalOpen = () => setShowCartModal(true);
  const isModalClose = () => setShowCartModal(false);


  const {state} = useCartContext();

  return (
    <div className={styles.navbarContainer}>
          <img src={logo} alt="Logo Ecommerce" />
        <div className={styles.navbarDetail}>
          <span>DH PROJECT TSX</span>
        </div>
        <div className={styles.navbarCartContainer}>
          <p className={styles.navbarTextAmount}>{state.cartItems.length}</p>
          <img src={cart} alt="Logo carrito"/>
        </div>
        <CardModal/>
    </div>
  )
}

export default Navbar