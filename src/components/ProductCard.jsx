import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = product.isPromo ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden relative ${product.isPromo ? 'border-2 border-green-500' : ''}`}>
      {product.isPromo && (
        <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg z-10">
          {discount}% OFF
        </div>
      )}
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-90 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-2">
          {product.isPromo ? (
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">${product.price}</span>
              <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
            </div>
          ) : (
            <p className="text-primary font-bold">${product.price}</p>
          )}
        </div>
        <button
          onClick={() => addToCart(product)}
          className={`mt-3 w-full py-2 px-4 rounded transition-colors ${
            product.isPromo 
              ? 'bg-green-500 hover:bg-green-600 text-white' 
              : 'bg-secondary hover:bg-primary text-white'
          }`}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}