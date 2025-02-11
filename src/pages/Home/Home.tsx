import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import axios from "axios";

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
    </>
  )
}

export default Home