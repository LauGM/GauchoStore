import { useCart } from '../context/CartContext';

export default function KitCard({ kit }) {
  const { addToCart } = useCart();
  const discount = kit.isPromo ? Math.round(((kit.originalPrice - kit.price) / kit.originalPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between relative border-2 border-purple-500 h-180 overflow-y-auto">
      {kit.isPromo && (
        <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 rounded-bl-lg z-10">
          {discount}% OFF
        </div>
      )}
      <img 
        src={kit.image} 
        alt={kit.name}
        className="w-full h-full max-h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{kit.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{kit.description}</p>
        
        <div className="mt-3 bg-gray-50 p-3 rounded-lg">
          <h4 className="font-medium text-sm text-gray-700 mb-2">Incluye:</h4>
          <ul className="text-sm text-gray-600">
            {kit.includes.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span className="text-gray-500">x{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3">
          {kit.isPromo ? (
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">${kit.price}</span>
              <span className="text-gray-500 line-through text-sm">${kit.originalPrice}</span>
            </div>
          ) : (
            <p className="text-primary font-bold">${kit.price}</p>
          )}
        </div>

        <button
          onClick={() => addToCart(kit)}
          className="mt-3 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded transition-colors"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}