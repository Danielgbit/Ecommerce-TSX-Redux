import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Adjust the path as necessary

export const useCartContext = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('Not found context');
  }
  return context;
};