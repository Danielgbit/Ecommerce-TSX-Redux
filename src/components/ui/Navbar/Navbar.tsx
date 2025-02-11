import styles from './Navbar.module.css'
import logo from '../../../assets/logo.svg'
import cart from '../../../assets/cart.svg'



const Navbar = () => {
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
    </div>
  )
}

export default Navbar