import { FC } from 'react';
import styles from './CardProduct.module.css';
import { Product, CartProduct } from '../../../interface/index';
import { useCartContext } from '../../../hooks/useCartContext'; // Importación corregida

interface Props {
  product: Product;
}

const CardProduct: FC<Props> = ({ product }) => {

  const { dispatch } = useCartContext(); // Usa el hook correctamente

  const item: CartProduct = {
    id: product.id,
    name: product.name,
    image: product.image,
    quantity: 1,
    price: product.price
  };

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={product.image} alt="" />
      <div className={styles.cardDetail}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <div className={styles.cardBody}>
          <p className={styles.cardType}>{product.type}</p>
          <p className={styles.cardPrice}>
            price, <small>{product.price}</small>
          </p>
        </div>
        <button className={styles.cardButton} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
