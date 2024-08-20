import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Message = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, type: 'spring', stiffness: 50 },
      });
    }
  }, [controls, isInView]);

  return (
    <section
      className="antialiased dark:bg-gray-900 py-8 bg-[#fbc4ab]"
      ref={sectionRef}
    >
      <div className="mx-auto grid max-w-screen-xl rounded-lg p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          className="lg:col-span-5 lg:mt-0"
        >
          <a href="#">
            <img
              className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full object-contain"
              src="https://i.pinimg.com/1200x/f1/12/6c/f1126cd7cd71ab8db5e0e64f131a1099.jpg"
              alt="Fashion Model"
            />
            <img
              className="mb-4 hidden dark:block md:h-full object-cover"
              src="https://example.com/your-model-image-dark.jpg"
              alt="Fashion Model"
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          className="me-auto place-self-center lg:col-span-7"
        >
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Elevate Your Style with Our Latest Collection <br />
            Shop Now and Save Up to 50%!
          </h1>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Discover the latest trends and exclusive designs that redefine fashion. Embrace your unique style with our curated collection and enjoy unmatched quality and comfort.
          </p>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Express your individuality with our cutting-edge styles. Perfect for every occasion.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center btn hover:bg-[#f4978e] rounded-[3rem] duration-1000 bg-primary-700 px-5 py-3 text-center text-base font-medium text-white bg-rose-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Shop the Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
