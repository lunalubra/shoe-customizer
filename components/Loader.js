import React from 'react';
import { motion } from 'framer-motion';

import Image from './Image';

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    }
  }
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="gradient-1" name="image-1" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img layoutId="main-image-1" src={`/images/gradient-2.jpg`} />
        </motion.div>
        <ImageBlock variants={item} id="gradient-3" name="image-3" />
        <ImageBlock variants={item} id="gradient-4" name="image-4" />
        <ImageBlock variants={item} id="gradient-5" name="image-5" />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id, name }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${name}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `
      }}
    >
      <Image src={`/images/${id}.jpg`} alt={id} />
    </motion.div>
  );
};
export default Loader;
