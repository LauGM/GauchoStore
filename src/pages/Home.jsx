import { useState,useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getStock } from '../api/api';

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(()=>{
    getStock().then((data) => {
      setAllProducts([...data[0].plants, ...data[0].seeds, ...data[0].supplies])
    });
  },[]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Todos los Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}