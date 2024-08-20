import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import ProductCard from '../components/ProductCard'; // Ensure the path is correct

const categories = ['All', 'men\'s clothing', 'women\'s clothing', 'jewelery'];

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const controls = useAnimation();
  const tabRefs = useRef([]);
  const productRefs = useRef([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const filteredProducts = response.data.filter(product => 
          product.category !== 'electronics'
        );
        setProducts(filteredProducts);
        setFilteredProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory, products]);

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger animation when 10% of the element is visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5 },
          }));
          observer.unobserve(entry.target); // Stop observing once the animation has triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe tabs
    tabRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe products
    productRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [controls, filteredProducts]);

  return (
    <div className="p-6 md:p-12 lg:p-28" id='product'>
      <div className="text-center">
        <h1 className='text-5xl py-3 text-bold'>Browse The Latest Collection</h1>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            ref={(el) => (tabRefs.current[index] = el)}
            custom={index}
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            className={`px-6 py-3 m-2 rounded-full text-white uppercase font-semibold transition-colors duration-300 ${activeCategory === category ? 'bg-rose-600 shadow-lg' : 'bg-gray-300 hover:bg-gray-400'} ${window.innerWidth < 640 ? 'w-full' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            ref={(el) => (productRefs.current[index] = el)}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex justify-center"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
