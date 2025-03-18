import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { getCartTotal } = useCart();

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🌱 Gaucho Store
        </Link>
        
        <div className="flex items-center gap-6 ">
          <Link to="/" className="hover:text-green-200">Inicio</Link>
          <Link to="/plants" className="hover:text-green-200">Plantas</Link>
          <Link to="/seeds" className="hover:text-green-200">Semillas</Link>
          <Link to="/supplies" className="hover:text-green-200">Insumos</Link>
          <Link to="/kits" className="hover:text-green-200 font-semibold text-green-200">Kits</Link>
          
          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {getCartTotal() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {getCartTotal()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}