import Hero from "../../components/ui/Hero/Hero";
import styles from "./Home.module.css";
import CardProduct from "../../components/ui/CartProduct/CardProduct";
import { getProducts } from "../../services";
import { Toaster } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1); // Cambia a 1

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
    placeholderData: (previousData) => previousData || [], // Evita errores si no hay datos
  });

  return (
    <>
      <Hero />
      <Toaster />
      {isLoading && <p>LOADING...</p>}
      {error && <p>Productos no encontrados</p>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div>
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 0} // Deshabilita si es la primera página
        >
          Previous Page
        </button>
        <div>
          <span>Página: {page + 1}</span> {/* Muestra la página actual (empezando desde 1) */}
        </div>
        <button 
          onClick={() => setPage(page + 1)}
          // Deshabilita si no hay más páginas (depende de tu API)
          disabled={data && data.length === 0} 
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default Home;