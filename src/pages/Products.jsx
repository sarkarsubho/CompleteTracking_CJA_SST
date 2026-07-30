// import React from 'react'

// const Products = () => {

//     let products = Array(40).fill({id:1, name :"product name", price:400, discription:"this our product description n" }).map((e,index)=>{return{...e,id:index+1}})
//   return (
//     <div>
//         {
//             products.map((e)=>{
//                 return <div>  </div>
//             })
//         }
//     </div>
//   )
// }

// export default Products/

import React, { useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductCart = () => {
  const navigate = useNavigate();
  // Sample products data
  const [products] = useState(
    JSON.parse(localStorage.getItem("products")) || [],
  );

  // Cart state
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      );
    }
  };

  // Calculate totals
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen max-w-[90%] m-auto  py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
            className="product-cart dark:bg-slate-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative h-80  bg-gray-200 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold  mb-2">{product.name}</h3>
              <p className="text-sm mb-4">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2 duration-300">
                  {product.rating} / 5
                </span>
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold ">${product.price}</span>

                <div className="flex flex-row gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <FaCartPlus size={18} />
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black text-sm px-5 rounded-lg transition-colors duration-200   flex flex-col"
                  >
                    <span>Buy now</span>
                    <span className="text-[10px] mt-[-3px]">
                      at ${product.price}{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
