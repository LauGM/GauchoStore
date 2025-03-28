import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { getCartTotal } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://i.imgur.com/fiIwlhY.jpg"
            alt="logo"
            className="w-12 h-12"
          />
          <Link to="/" className="text-2xl font-bold" onClick={closeMenu}>
            Gaucho Store
          </Link>
        </div>

        <div className="flex items-center gap-6 md:flex md:gap-10">
          <button type="button" className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            className={`md:flex md:flex-row md:gap-10 md:items-center md:static md:overflow-visible md:top-0 md:right-0 md:bg-transparent md:text-white md:w-auto absolute top-0 right-0 bg-primary text-white w-full overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "h-50" : "h-0"
            }`}
          >
            <li className="md:flex md:items-center">
              <Link to="/" className="hover:text-green-200" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li className="md:flex md:items-center">
              <Link
                to="/plants"
                className="hover:text-green-200"
                onClick={closeMenu}
              >
                Plantas
              </Link>
            </li>
            <li className="md:flex md:items-center">
              <Link
                to="/seeds"
                className="hover:text-green-200"
                onClick={closeMenu}
              >
                Semillas
              </Link>
            </li>
            <li className="md:flex md:items-center">
              <Link
                to="/supplies"
                className="hover:text-green-200"
                onClick={closeMenu}
              >
                Insumos
              </Link>
            </li>
            <li className="md:flex md:items-center">
              <Link
                to="/kits"
                className="hover:text-green-200 font-semibold text-green-200"
                onClick={closeMenu}
              >
                Kits
              </Link>
            </li>
            <li className="md:flex md:items-center">
              <Link to="/cart" className="relative" onClick={closeMenu}>
                <ShoppingCartIcon className="h-6 w-6" />
                {getCartTotal() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {getCartTotal()}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
