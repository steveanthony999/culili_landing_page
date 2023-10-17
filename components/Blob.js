import { motion } from 'framer-motion';
import styles from './Blob.module.css';

const blobVariants = {
  animate: {
    d: [
      'M50,150 Q10,300 50,450 Q90,600 150,480 Q210,360 240,450 Q270,540 330,480 Q390,420 450,450 Q510,480 570,390 Q630,300 600,150 Q570,0 420,90 Q270,180 220,80 Q170,-20 120,90 Q70,200 50,150',
      'M50,150 Q0,300 50,450 Q100,600 150,480 Q200,360 300,450 Q400,540 330,480 Q260,420 450,450 Q640,480 570,390 Q500,300 600,150 Q700,0 420,90 Q270,180 220,80 Q170,-20 70,90 Q20,200 50,150',
    ],
  },
  transition: {
    duration: 4,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'reverse',
  },
};

const Blob = ({ dur, flipX, flipXY }) => {
  return (
    <motion.svg
      width="300"
      height="300"
      viewBox="0 0 700 600"
      className={flipX ? styles.flippedX : flipXY ? styles.flippedXY : ''}
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff7e5f', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#feb47b', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <motion.path
        fill="url(#blobGradient)"
        variants={blobVariants}
        initial="animate"
        animate="animate"
        transition={{ ...blobVariants.transition, duration: dur }}
      />
    </motion.svg>
  );
};

export default Blob;
