import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ProductModal = ({ product, isOpen, closeModal, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-lg sm:max-w-xl shadow-lg relative">
        <button  onClick={closeModal}  className="absolute top-2 right-2 text-gray-600 text-2xl sm:text-xl">
          <RxCross2/>
        </button>
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <div className="w-full sm:w-1/2 flex justify-center">
            <img src={product.image} alt={product.title} className="h-40 sm:h-48 object-contain"/>
          </div>
          <div className="w-full sm:w-1/2 space-y-3 px-2 sm:px-4 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>
            <p className="text-lg font-semibold text-green-600">${product.price}</p>
            <div className="flex items-center justify-center sm:justify-start my-3">
              <button  onClick={() => setQuantity(Math.max(1, quantity - 1))}  className="bg-gray-200 px-3 py-1 text-xl rounded-l">-</button>
              <span className="px-4 text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-200 px-3 py-1 text-xl rounded-r">+</button>
            </div>
            <button onClick={() => {addToCart({ ...product, quantity });closeModal();}} className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;