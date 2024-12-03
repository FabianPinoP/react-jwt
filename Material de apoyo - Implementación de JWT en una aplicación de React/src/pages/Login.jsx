import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setError("");
    await auth(email, password);
  };

  const auth = async (userEmail, password) => {
    try {
      const url = "http://localhost:8080/api/auth/login";
      const payload = {
        email: userEmail,
        password,
      };
      const user = await axios.post(url, payload);

      const { email, token } = user.data
      localStorage.setItem('token', token)
      return
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Iniciar Sesión</h2>

        {error && <div className="login-error">{error}</div>}

        <div className="login-field">
          <label htmlFor="email" className="login-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            placeholder="Ingresa tu correo"
          />
        </div>

        <div className="login-field">
          <label htmlFor="password" className="login-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
