import { useCartContext } from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";
import styles from './Table.module.css';


const Table = () => {

    const { state: {cartItems}, dispatch } = useCartContext();

    console.log(cartItems);
    
    const handleOnRemove = (item: CartProduct) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };
  
    const handleAddProductInCart = (item: CartProduct) => {
      dispatch({ type: 'ADD_TO_CART', payload: item});
    };

  return (
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
  )
}

export default Table
