import React from 'react';
import { motion } from 'framer-motion';
import styles from './Intro.module.css';

function Intro({ onSelection }) {
  const handleSelection = (selection) => {
    localStorage.setItem('theme', selection);
    onSelection();
  };

  return (
    <div className={styles.introContainer}>
      <h1 className={styles.header}>I am a...</h1>
      <div className={styles.imageContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.imageCard}
        >
          <img
            src="/images/cat.png"
            alt="Cat Person"
            onClick={() => handleSelection('cat')}
            className={styles.image}
          />
          <div className={styles.label}>Cat Person</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.imageCard}
        >
          <img
            src="/images/dog.png"
            alt="Dog Person"
            onClick={() => handleSelection('dog')}
            className={styles.image}
          />
          <div className={styles.label}>Dog Person</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.imageCard}
        >
          <img
            src="/images/penguin.png"
            alt="Penguin Person"
            onClick={() => handleSelection('penguin')}
            className={`${styles.image} ${styles.penguinImage}`}
          />
          <div className={styles.label}>Penguin Person</div>
        </motion.div>
      </div>
      <a href="#" onClick={() => onSelection()} className={styles.skipLink}>
        Skip
      </a>
    </div>
  );
}

export default Intro;