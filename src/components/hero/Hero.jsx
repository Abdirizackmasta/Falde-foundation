import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import {  useState } from 'react';
import { motion } from 'framer-motion'; 
import styles from './Hero.module.css';

const heroDetails = [
  {
    image: '/hero1.jpeg',
    boldText: ' Falde Foundation inspires change so nature and people thrive',
    smallText: 'Rebuilding Stable, Cohesive, and Resilient Nation Together'
  },
  {
    image: '/hero2.jpeg',
    boldText: 'It Gives them a helping hand and show them the way',
    smallText: 'Equal access to quality Education'
  }
];

function Hero() {
  const [heroInfo, setHeroInfo] = useState(0);
  const detail = heroDetails[heroInfo];


  
  return (
    <div  className={styles.hero} id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.hero_item}
      >
        <motion.img  variants={slideIn("left", "tween", 0.5, 1.2)} src={detail.image} alt='NGO' />
        <div>
          <motion.h1 variants={fadeIn("right", "tween", 0.9, 1)}>{detail.boldText}</motion.h1>
          <motion.p variants={fadeIn("left", "tween", 0.4, 1)}>{detail.smallText}</motion.p>
        </div>
      </motion.div>
      
    </div>
  );
}

export default Hero;
