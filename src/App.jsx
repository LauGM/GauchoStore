import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Kits from './pages/Kits';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<ProductList />} />
              <Route path="/kits" element={<Kits />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;