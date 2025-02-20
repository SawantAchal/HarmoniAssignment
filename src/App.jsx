import { ToastContainer } from 'react-toastify';
import './App.css';
import Contact from './components/Contact';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to update selected category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <ToastContainer/>
      <Header onCategorySelect={handleCategorySelect} />
      <Home />
      <Discover />
      <Products selectedCategory={selectedCategory} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
