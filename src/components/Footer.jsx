import React from 'react';

const Footer = () => {
    const myStyle = {
        textShadow: "2px 2px 3px pink"
    }
  return (
    <footer className="bg-white text-gray-700 border-t borderb-black">
      <div className="container mx-auto px-4 py-8 md:flex md:justify-between">
        {/* First Section: About Us */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h2 className="text-3xl font-bold mb-2 text-gray-900"><i>VogueVerse</i></h2>
          <p className="text-gray-600 text-sm leading-relaxed w-[320px]">
            We are committed to providing you with the latest trends and high-quality products. Our goal is to enhance your style and provide exceptional customer service.
          </p>
        </div>

        {/* Second Section: Quick Links */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Quick Links</h2>
          <ul className="list-none space-y-2">
            <li>
              <a href="/" className="text-gray-600 hover:text-rose-600">Home</a>
            </li>
            <li>
              <a href="#product" className="text-gray-600 hover:text-rose-600">Products</a>
            </li>
            <li>
              <a href="/cart" className="text-gray-600 hover:text-rose-600 snipcart-checkout">Cart</a>
            </li>
          </ul>
        </div>

        {/* Third Section: Contact Info */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Contact Info</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>Phone:</strong> +92 318 254 6510
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>Email:</strong> <a href='mailto:arhamazeem318@gmail.com'>arhamazeem318@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-center py-2">
        <p className="text-sm">
          © {new Date().getFullYear()} All Rights Reserved by Arham Azeem
        </p>
      </div>
    </footer>
  );
};

export default Footer;
