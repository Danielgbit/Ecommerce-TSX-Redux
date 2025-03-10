import React, { useEffect } from 'react'
import styles from './Dashboard.module.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const [product, setProduct] = ({
    amiiboSeries: '',
    character: '',
    gameSeries: '',
    head: '',
    image: '',
    name: '',
    release: '',
    tail: '',
    type: '',
    price: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    })
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

  return (
    <div className={styles.container}>
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <form>
            <div className={styles.formControlLogin}>
                <label className={styles.label} htmlFor="amiiboSeries">Amiibo Series</label>
                <input 
                  type="text"
                  id='amiiboSeries'
                  name='amiiboSeries'
                  value={''}
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
                  value={''}
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
                  value={''}
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
                  value={''}
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
                  value={''}
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
                  value={''}
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
                  value={''}
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
                  value={''}
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
                  value={''}
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