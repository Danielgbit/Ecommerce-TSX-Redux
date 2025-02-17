import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css";
import CardProduct from "../../components/ui/CartProduct/CardProduct";
import { getProducts } from "../../services";
import { Product } from "../../interface/index";


const Home = () => {

  const [ products, setProducts ] = useState<Product[]>([]);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero/>
      {loading && <p>LOADING...</p>}
      {error && <p>Productos no encontrados</p>}
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.tail} product={product}/>
        ))}
      </div>

    </>
  )
}

export default Home