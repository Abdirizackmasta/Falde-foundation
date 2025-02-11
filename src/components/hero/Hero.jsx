import {  staggerContainer } from "../../utils/motion";
import { motion } from 'framer-motion'; 
import styles from './Hero.module.css';
import { Link } from "react-router-dom";


function Hero() {

  return (
    <div className={styles.hero} id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.hero_item}
      >
        <div className={styles.hero_left}>
          <div>
            <h1>Falde Foundation: Advocating for Inspiration and Change, Where People and Nature Thrive</h1>
            <p>Together, We Rebuild a Stable, Cohesive, and Resilient Nation by Ensuring Equal Access to Quality Education.</p>
            <Link to='latestactivities'>See our activities &gt;</Link>
          </div>
        </div>
        <div className={styles.hero_right}>
          <img src="/hero1.jpeg" alt="" />
        </div>  
      </motion.div>
    </div>
  );
}

export default Hero;
