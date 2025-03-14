import axios from "axios";
import { Product } from "../interface";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await axios.get(`http://localhost:3000/products`);
    return res.data; // Retorna array vacío si no hay datos
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error: ${error.message}`);
    }
    throw new Error("Error desconocido");
  }
};

export const createdProduct = async (newProduct: Product) => {
  try {
    const res = await axios.post(`http://localhost:3000/products`, newProduct, {
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(res.status);
    return res.data;
    
  } catch (error) {
    console.error(error);
    throw new Error('network Error');
  }
}