import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import axios from 'axios';
import ProductModal from './ProductModel';
import { useCart } from '../context/CartContext';

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  // Fetch products
  const fetchProducts = async (category = "") => {
    setLoading(true);
    try {
      const url = category 
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products";
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <main className='flex flex-col justify-center items-center mt-6 px-4'>
      <section className='flex gap-2 items-center mb-4'>
        <div className='h-8 w-2 bg-pink-500'></div>
        <h1 className='text-3xl sm:text-4xl font-bold'>OUR PRODUCTS</h1>
      </section>
      <h3 className='text-xl sm:text-2xl mb-6 text-gray-700'>Explore Our Products</h3>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <section className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-4 w-full max-w-7xl'>
          {products.length > 0 ? (
            products.map((item) => (
              <ProductsCard key={item.id} product={item} openModal={(product) => { 
                setSelectedProduct(product); 
                setIsModalOpen(true); 
              }}  />
            ))
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </section>
      )}
      {selectedProduct && (
        <ProductModal     product={selectedProduct} 
        isOpen={isModalOpen} 
        closeModal={() => {
          setSelectedProduct(null); 
          setIsModalOpen(false);
        }} 
        addToCart={addToCart}/>
      )}
    </main>
  );
};

export default Products;
