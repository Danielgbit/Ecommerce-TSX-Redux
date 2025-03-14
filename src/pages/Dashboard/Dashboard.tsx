import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import { redirect, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Product } from '../../interface';
import { createdProduct } from '../../services';

const Dashboard = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    amiiboSeries: '',
    character: '',
    gameSeries: '',
    head: '',
    image: '',
    name: '',
    release: '', // ✅ Ahora es un objeto Release
    tail: '',
    type: '',
    price: 0,
    quantity: 1
});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    });
  };

  useEffect(() => {
    const userLogin = localStorage.getItem('userLogin');
    if (!userLogin) {
      navigate('/login');
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userLogin');
    navigate('/login');
  };

  const mutation = useMutation({
    mutationFn: async (newProduct: Product) => await createdProduct(newProduct),
    onSuccess: () => {
        alert("✅ Producto creado correctamente");
        navigate('/');
    },
    onError: (error) => {
        console.error("❌ Error al crear el producto:", error);
        alert("❌ No se pudo crear el producto. Inténtalo de nuevo.");
    }
});




const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (product.price <= 0 || product.quantity <= 0) {
      alert("⚠️ Price y quantity deben ser mayores a 0.");
      return;
  }

  mutation.mutate(product);
};


  return (
    <div className={styles.container}>
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="amiiboSeries">Amiibo Series</label>
                <input 
                  type="text"
                  id='amiiboSeries'
                  name='amiiboSeries'
                  value={product.amiiboSeries}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="character">Character</label>
                <input 
                  className={styles.input}
                  type="text"
                  id='character'
                  name='character'
                  value={product.character}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="gameSeries">Game Series</label>
                <input 
                  className={styles.input}
                  type="text"
                  id='gameSeries'
                  name='gameSeries'
                  value={product.gameSeries}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="head">Head</label>
                <input 
                  className={styles.input}
                  type="text"
                  id='head'
                  name='head'
                  value={product.head}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="image">Image</label>
                <input 
                  className={styles.input}
                  type="url"
                  id='image'
                  name='image'
                  value={product.image}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="release">Release</label>
                <input 
                  className={styles.input}
                  type="date"
                  id='release'
                  name='release'
                  value={product.release}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="tail">Tail</label>
                <input 
                  className={styles.input}
                  type="text"
                  id='tail'
                  name='tail'
                  value={product.tail}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input 
                  className={styles.input}
                  type="text"
                  id='name'
                  name='name'
                  value={product.name}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="type">Type</label>
                <input 
                  className={styles.input}
                  type="text"
                  id='type'
                  name='type'
                  value={product.type}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="price">Price $</label>
                <input 
                  className={styles.input}
                  type="number"
                  id='price'
                  name='price'
                  value={product.price}
                  onChange={handleChange}
                  required
                />
            </div>
            <button className={styles.button} type='submit'>Add product</button>
        </form>
    </div>
  )
}

export default Dashboard