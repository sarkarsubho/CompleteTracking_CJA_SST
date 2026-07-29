{
  /* Cart Section */
}
<div className="lg:col-span-1">
  <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
      <ShoppingCart size={24} />
      Cart ({cart.length})
    </h2>

    {cart.length === 0 ? (
      <p className="text-gray-500 text-center py-8">Your cart is empty</p>
    ) : (
      <>
        {/* Cart Items */}
        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 hover:bg-gray-300 p-1 rounded transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 p-1 rounded transition-colors"
                >
                  <Plus size={16} />
                </button>
                <span className="ml-auto font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax (10%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mt-6 transition-colors duration-200">
          Proceed to Checkout
        </button>
      </>
    )}
  </div>
</div>;
