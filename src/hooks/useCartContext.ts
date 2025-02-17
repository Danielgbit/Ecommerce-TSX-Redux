// useCartContext.ts
import { useContext } from 'react';
<<<<<<< HEAD
import CartContext from '../context/CartContext';
=======
import { CartContext } from '../context/CartContext'; // Adjust the path as necessary
>>>>>>> 01192855b4ad3dfa29492feafb35f6d42be73c09

export const useCartContext = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('Not found context');
  }
  return context;
};