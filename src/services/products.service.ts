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