import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        username,
        password,
      });

      console.log("Login successful!", response.data);

      // Store the access token in session storage
      sessionStorage.setItem("accessToken", response.data.access_token);

      // Navigate to home page after successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed!", error);
      setError("Your data is not valid. Please try again.");
    }
  };

  return (
    <>
    <div className={styles.NewOne}>
        <h1 className={styles.log}>Login </h1>
      <form className={styles.myform} onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
        placeholder="E-mail"
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password"></label>
        <input
        placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        {error && <div className="error">{error}</div>}
        <div className={styles.sb}>
        <button type="submit">Log in</button>
        </div>
      </form>
      </div>
    </>
  );
}

export default Login;
