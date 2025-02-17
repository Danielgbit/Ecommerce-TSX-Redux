import styles from './CardProduct.module.css';
import { useCartContext } from '../../../hooks/useCartContext';
import { Product, CartProduct } from '../../../interface';
import { FC } from 'react';

interface Props {
  product: Product
};

const CardProduct: FC<Props> = ({ product }) => {

  const { dispatch } = useCartContext(); // Usa el hook correctamente

  const item: CartProduct = {
    name: product.name,
    image: product.image,
    price: product.price,
    id: product.id,
    quantity: product.quantity
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
