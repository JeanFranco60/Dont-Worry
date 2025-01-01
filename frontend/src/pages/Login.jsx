import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { saveToken, saveRole } from "../redux/authReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Por favor, completa ambos campos.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/validate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorMsg =
          response.status === 401
            ? "Usuario o contraseña incorrectos."
            : "Error al iniciar sesión. Inténtalo nuevamente.";
        throw new Error(errorMsg);
      }

      const data = await response.json();
      dispatch(saveToken({ token: `Bearer ${data.token}` }));
      dispatch(saveRole({ role: data.role }));
    } catch (error) {
      console.error("Error submitting login:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (auth.token) {
    if (auth.role === "admin") {
      return <Navigate to="/products" />;
    }
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800">
            Iniciar sesión
          </h2>
          <p className="text-gray-600">
            Ingresa tus credenciales para acceder a tu cuenta
          </p>
        </div>
        {error && (
          <div
            className="mt-3 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md border border-yellow-300"
            role="alert"
          >
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Ingresar"}
          </button>
        </form>
        <div className="text-sm text-center text-gray-500 mt-4">
          ¿No tienes una cuenta?{" "}
          <Link to="/signup" className="text-black hover:underline">
            Regístrate
          </Link>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-block bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition text-decoration-none"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
