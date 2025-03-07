import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Hero from "../../components/ui/Hero/Hero";
import CardProduct from "../../components/ui/CartProduct/CardProduct";
import { getProducts } from "../../services";
import { Toaster } from "sonner";
import styles from "./Home.module.css";
import { paginate } from "../../utils/paginate"; // Importa la función de paginación

const Home = () => {
  const [page, setPage] = useState(1);
  const limit = 10; // Número de productos por página

  // Obtener todos los productos
  const { data: allProducts, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  // Paginar los productos manualmente
  const paginatedProducts = allProducts ? paginate(allProducts, page, limit) : [];

  return (
    <>
      <Hero />
      <Toaster />
      {isLoading && <p>LOADING...</p>}
      {error && <p>Productos no encontrados</p>}

      <div className={styles.container}>
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <h1>No hay productos</h1>
        )}
      </div>

      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={styles.paginationButton}
        >
          Previous Page
        </button>
          <span className={styles.paginationActive}>{page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className={styles.paginationButton}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default Home;