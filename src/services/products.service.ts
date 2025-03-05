import axios from "axios";
import { Product } from '../interface';

export const getProducts = async (page = 0): Promise<Product[]> => {
  try {

    const res = await axios.get(`http://localhost:3000/products?_page=${page}&_limit=4`);

    // Verifica si la respuesta contiene datos
    if (!res.data || res.data.length === 0) {
      throw new Error("No hay más productos disponibles");
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching products: ${error.message}`);
    } else {
      throw new Error('Network Error');
    }
  }
};