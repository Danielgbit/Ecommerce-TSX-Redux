import React, { FormEvent, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
        ...user,
        [e.target.name] : e.target.value
    });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.email.trim() === '' || user.password === '') {
        return
    };
    localStorage.setItem(
        'userLogin',
        JSON.stringify(user.email)
    );
    navigate('/dashboard');
  };

  return (
    <div className={styles.containerLogin}>
      <h1>Login</h1>
      <form onSubmit={HandleSubmit} className={styles.form}>
        {/* Email */}
        <div className={styles.formControlLogin}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={user.email} 
            onChange={HandleInputChange} />
        </div>

        {/* Password */}
        <div className={styles.formControlLogin}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            value={user.password}
            name="password"
            id="password"
            onChange={HandleInputChange}
          />
        </div>
        <div>
          <button className={styles.button} type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
