import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleWhatsApp = () => {
    const message = cart
      .map((item) => `${item.quantity}x ${item.name} ($${item.price} c/u)`)
      .join("\n");

    const total = getTotalPrice().toFixed(2);
    const whatsappMessage = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n${message}\n\nTotal: $${total}`;

    const whatsappUrl = `https://wa.me/5491123879096?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío </h2>
        <p>¡Agrega productos a tu carrito para comenzar tu compra!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Tu Carrito</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4 border-b"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Cantidad: {item.quantity}</p>
                <p className="text-primary">${item.price} c/u</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        ))}

        <div className="text-xl font-bold mb-4">
          Total: ${getTotalPrice().toFixed(2)}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleWhatsApp}
            className=" bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Realizar Pedido por WhatsApp
          </button>
          <button
            onClick={clearCart}
            className=" bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
