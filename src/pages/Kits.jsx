import KitCard from '../components/KitCard';
import { getStock } from '../api/api';
import { useState, useEffect } from 'react';

export default function Kits() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getStock().then((data) => {
      setProductsData(data[0].kits);
    });
  }, []);

  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Kits de Huerta</h1>
        <p className="text-gray-600">Packs especialmente diseñados para comenzar tu huerta urbana</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map(kit => (
          <KitCard key={kit.id} kit={kit} />
        ))}
      </div>
    </div>
  );
}