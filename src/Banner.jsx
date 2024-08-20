import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Banner = () => {
  const controls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    // Start the animation for the text
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: 'spring', stiffness: 50 },
    });

    // Start the initial load animation for the images
    imageControls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 2, ease: 'easeInOut' },
    });

    // Continuous animation after initial load
    imageControls.start({
      x: [0, 10, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [controls, imageControls]);

  return (
    <div className="relative flex h-screen">
      {/* First Image - Full Image without overlay */}
      <div className="w-1/2">
        <motion.img
          src="https://modelandmodemag.com/wp-content/uploads/2023/06/shutterstock_1076794238.jpg"
          alt="Full Image"
          className="w-full h-full object-cover"
          animate={imageControls}
        />
      </div>

      {/* Second Image - Image with dark overlay and text */}
      <div className="w-1/2 relative">
        <motion.img
          src="https://t3.ftcdn.net/jpg/06/86/30/30/360_F_686303099_IkmiDMmA7UaD1lBh2PzLpcjV7FkMkjCM.jpg"
          alt="Overlay Image"
          className="w-full h-full object-cover"
          animate={imageControls}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-playfair italic leading-tight">
              Fashion Never Dies
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Embrace the trend, define your style.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
