import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const features = [
  {
    icon: 'fas fa-shield-alt',
    title: 'Secure Payment',
    description: 'Your transactions are safe and secure with our encryption technology.',
  },
  {
    icon: 'fas fa-shipping-fast',
    title: 'Fast Delivery',
    description: 'Get your products delivered swiftly right to your doorstep.',
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 Support',
    description: 'Our support team is here to assist you anytime you need help.',
  },
  {
    icon: 'fas fa-box-open',
    title: 'Quality Products',
    description: 'We guarantee the best quality products for all your needs.',
  },
];

const IconCards = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
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
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.8 }, // Adjust the delay and duration for smoother effect
      }));
    }
  }, [controls, isInView]);

  return (
    <div className="py-12" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="flex flex-col items-center text-center p-6"
            >
              <i className={`${feature.icon} text-4xl text-rose-600 mb-4`}></i>
              <h3 className="text-xl font-semibold text-rose-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconCards;
