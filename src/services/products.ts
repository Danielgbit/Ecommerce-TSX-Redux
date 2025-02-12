import axios from "axios";
import { Products } from '../interface'

export const getProducts = async ():Promise<Products[]> => {
    try {
        const res = await axios.get('http://localhost:3000/products');
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(`Error fetching products: ${error.message}`);
        } else {
          throw new Error('Network Error');
        }
      }
  };