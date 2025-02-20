import React, { useEffect, useState } from 'react';
import { IoIosCart } from "react-icons/io";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Header = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const { cartItems } = useCart();

  // Calculate total quantity in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle search input
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === "") {
      setShowDropdown(false);
      setFilteredCategories([]);
    } else {
      const filtered = categories.filter((category) =>
        category.toLowerCase().includes(value)
      );
      setFilteredCategories(filtered);
      setShowDropdown(filtered.length > 0);
    }
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSearchTerm(category);
    setFilteredCategories([]);
    setShowDropdown(false);
    onCategorySelect(category);
  };

  return (
    <header className="bg-yellow-400 shadow-md p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <section className="text-xl font-bold">HARMONI</section>
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-yellow-400 lg:bg-transparent top-16 left-0 w-full lg:w-auto p-4 lg:p-0 transition-all duration-300 ${ menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <li className="cursor-pointer hover:text-gray-700">Home</li>
            <li className="cursor-pointer hover:text-gray-700">Categories</li>
            <li className="cursor-pointer hover:text-gray-700">Contact Us</li>
            <li className="cursor-pointer hover:text-gray-700">More Options</li>
          </ul>
          <div className="relative mt-4 lg:mt-0">
            <input type="text" placeholder="Search categories..." value={searchTerm} onChange={handleSearchChange} className="h-10 w-full lg:w-60 rounded-md px-3 border focus:ring-2 focus:ring-blue-500 outline-none"/>
            {showDropdown && (
              <ul className="absolute left-0 w-full lg:w-60 bg-white border mt-1 shadow-lg rounded-md z-10">
                {filteredCategories.map((category, index) => (
                  <li key={index} onClick={() => handleCategorySelect(category)} className="p-2 hover:bg-gray-200 cursor-pointer">
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative">
            <IoIosCart className="text-2xl cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <FaUser className="text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
