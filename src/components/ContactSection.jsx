import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xeojrjad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Error submitting form');
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 py-32" id='contact'>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-300 rounded-[3rem] shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-[3rem] bg-gray-300 shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-[1rem] bg-gray-300 shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-rose-600 text-white font-semibold rounded-[3rem] shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Send Message
            </button>
          </form>
          {isSuccess && <p className="mt-4 text-green-600">Message sent successfully!</p>}
          {isError && <p className="mt-4 text-red-600">An error occurred. Please try again.</p>}
        </div>

        {/* Map */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-128 rounded-[1rem] shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4546545765834!2d-122.41941568468177!3d37.7749294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b6b8e3b7%3A0x7e3d1b0a0c1e1b89!2s1600%20Pine%20St%2C%20San%20Francisco%2C%20CA%2094180%2C%20USA!5e0!3m2!1sen!2sin!4v1636764384926!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
