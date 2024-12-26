import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BershkaNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isWhiteBackground = isMenuOpen || isScrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isWhiteBackground ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-10 py-3 transition-all duration-300">
        {/* Menú Izquierdo */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/hombre"
            className={`text-sm font-medium ${
              isWhiteBackground
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-200"
            } transition-transform transform duration-300 hover:scale-105`}
          >
            HOMBRE
          </Link>
          <Link
            to="/mujer"
            className={`text-sm font-medium ${
              isWhiteBackground
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-200"
            } transition-transform transform duration-300 hover:scale-105`}
          >
            MUJER
          </Link>
          <Link
            to="/novedades"
            className={`text-sm font-medium ${
              isWhiteBackground
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-200"
            } transition-transform transform duration-300 hover:scale-105`}
          >
            NOVEDADES
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`text-xl font-bold uppercase tracking-widest no-underline transition-transform transform duration-300 hover:scale-105 ${
            isWhiteBackground ? "text-black" : "text-white"
          }`}
        >
          Don't U Worry
        </Link>

        {/* Menú Derecho */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/accesorios"
            className={`text-sm font-medium ${
              isWhiteBackground
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-200"
            } transition-transform transform duration-300 hover:scale-105`}
          >
            ACCESORIOS
          </Link>
          <Link
            to="/cuenta"
            className={`text-sm font-medium ${
              isWhiteBackground
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-200"
            } transition-transform transform duration-300 hover:scale-105`}
          >
            CUENTA
          </Link>
          <Link
            to="/carrito"
            className={`text-sm font-medium ${
              isWhiteBackground
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-200"
            } transition-transform transform duration-300 hover:scale-105`}
          >
            CARRITO
          </Link>
        </div>

        {/* Menú Hamburguesa (Móvil) */}
        <div className="md:hidden flex items-center">
          <button
            className="focus:outline-none transition-transform duration-300"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 ${
                isWhiteBackground ? "text-black" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable (Móvil) */}
      <div
        className={`absolute top-full w-full bg-white text-black transition-all duration-300 transform ${
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } origin-top`}
        style={{
          transformOrigin: "top", // Asegura que la animación se despliegue desde arriba
        }}
      >
        <hr />
        <div className="flex flex-col items-start px-4 py-3 space-y-3">
          <Link
            to="/products"
            className="text-sm font-medium text-black underline underline-offset-4 transition-transform duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            PRODUCTOS
          </Link>
          <Link
            to="/novedades"
            className="text-sm font-medium text-black underline underline-offset-4 transition-transform duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            NOVEDADES
          </Link>
          <Link
            to="/accesorios"
            className="text-sm font-medium text-black underline underline-offset-4 transition-transform duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            ACCESORIOS
          </Link>
          <Link
            to="/cuenta"
            className="text-sm font-medium text-black underline underline-offset-4 transition-transform duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            CUENTA
          </Link>
          <Link
            to="/carrito"
            className="text-sm font-medium text-black underline underline-offset-4 transition-transform duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            CARRITO
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default BershkaNavbar;
