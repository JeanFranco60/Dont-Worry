import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Limpiar errores anteriores
    setLoading(true); // Mostrar indicador de carga

    // Validar los campos
    if (!name || !surname || !email || !password) {
      setError("Por favor, completa todos los campos.");
      setLoading(false);
      return;
    }

    try {
      // Realizar la solicitud al backend
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, surname, email, password }),
        }
      );

      if (!response.ok) {
        // Manejo de errores del servidor
        const message =
          response.status === 409
            ? "El correo electrónico ya está registrado."
            : "Ocurrió un error al registrarse. Intenta nuevamente.";
        throw new Error(message);
      }

      // Si todo sale bien, navegar al login
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white p-8 shadow-xl rounded-lg">
          {/* Título */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Crear una cuenta
          </h2>

          {/* Mensaje de error */}
          {error && (
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md mb-4">
              {error}
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full border  border-gray-300 rounded-lg p-3 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido
              </label>
              <input
                id="surname"
                type="text"
                placeholder="Ingresa tu apellido"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-black focus:border-black"
              />
            </div>
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
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-black focus:border-black"
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
                placeholder="Crea una contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-black focus:border-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrarse"}
            </button>
          </form>
          <div className="text-center text-sm text-gray-500 mt-6">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="text-black font-medium hover:underline"
            >
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
