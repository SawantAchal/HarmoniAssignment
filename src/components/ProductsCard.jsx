import React from 'react';

const ProductsCard = ({ product, openModal }) => {
  return (
    <div className="p-4 h-96 flex flex-col items-center justify-between border-2 rounded-lg shadow-md transition hover:shadow-lg cursor-pointer bg-white"onClick={() => openModal(product)}>
      <img src={product.image} alt="product image" className="h-48 object-contain p-3" />
      <section className="flex flex-col items-center text-center">
        <p className="font-semibold">{product.title}</p>
        <p className="text-lg font-bold text-green-600">${product.price}</p>
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <p>{product.rating.rate}⭐</p>
          <p>({product.rating.count} reviews)</p>
        </div>
      </section>
    </div>
  );
};

export default ProductsCard;