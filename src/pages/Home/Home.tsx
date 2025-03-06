import Hero from "../../components/ui/Hero/Hero";
import styles from "./Home.module.css";
import CardProduct from "../../components/ui/CartProduct/CardProduct";
import { getProducts } from "../../services";
import { Toaster } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page)
  });


  return (
    <>
      <Hero />
      <Toaster />
      {isLoading && <p>LOADING...</p>}
      {error && <p>Productos no encontrados</p>}
      <div className={styles.container}>
        {data && data.length > 0 ? (
          data.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <h1>No hay productos</h1>
        )}
      </div>
      <div>
        <button 
          onClick={() => setPage(page - 1)} 
        >
          Previous Page
        </button>
        <div>
          <span>Página: {page + 1}</span>
        </div>
        <button 
          onClick={() => setPage(page + 1)}
          disabled={data && data.length === 0} 
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default Home;