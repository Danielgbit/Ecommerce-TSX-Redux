import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import axios from "axios";
import styles from "./Home.module.css";
import CardProduct from "../../components/ui/CardProduct/CardProduct";


const Home = () => {

  const [ products, setProducts ] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/products');
      const data = await res.data;
      setProducts(data);      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Hero/>
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.tail} product={product}/>
        ))}
      </div>

    </>
  )
}

export default Home