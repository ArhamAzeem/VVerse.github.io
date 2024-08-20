import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Bind modal to your app element

const ProductCard = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(quantity - 1, 1));

  const addToCart = () => {
    // Add to cart functionality here
    closeModal();
  };

  return (
    <div className="relative group my-10 max-w-xs flex flex-col overflow-hidden bg-white transform transition-transform duration-300 hover:scale-105">
      {/* Product Image */}
      <div className="relative flex h-80 w-72 h-[225px] overflow-hidden shadow-lg">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 right-0 h-full w-full object-contain rounded-3xl"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <button
              className="snipcart-add-item bg-rose-600 text-white p-2 rounded-full"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-url={window.location.href}
              data-item-description={product.description}
              data-item-image={product.image}
              data-item-name={product.title}
              data-item-quantity={quantity}
            >
              <i className="fas fa-cart-plus"></i>
            </button>
            <button
              onClick={openModal}
              className="bg-rose-600 text-white p-2 rounded-full"
            >
              <i className="fas fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-rose-600 text-xl font-semibold">${product.price.toFixed(2)}</p>
      </div>

      {/* Product Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Details"
        className="modal w-full max-w-md mx-auto p-4 md:p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900"
        overlayClassName="modal-overlay fixed inset-0 bg-gray-900 bg-opacity-50"
      >
        <button onClick={closeModal} className="absolute top-2 right-2 p-2 text-gray-700 dark:text-gray-300">
          <i className="fas fa-times text-xl"></i>
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-6">
          <div className="w-full md:w-1/2 max-w-md flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-auto h-auto md:h-[50vh] rounded-[0] shadow-md mimg"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{product.title}</h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-2">{product.description}</p>
            <p className="text-lg md:text-xl font-semibold text-indigo-600 mt-4">${product.price}</p>
            <ul className="mt-4">
              {product.features && JSON.parse(product.features).map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 100 2h2a1 1 0 100-2H8z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                className="snipcart-add-item bg-rose-600 px-6 py-2 text-white rounded-lg hover:bg-indigo-700 transition duration-300 text-sm md:text-base"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url={window.location.href}
                data-item-description={product.description}
                data-item-image={product.image}
                data-item-name={product.title}
                data-item-quantity={quantity}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
