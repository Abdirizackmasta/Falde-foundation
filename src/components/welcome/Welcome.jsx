import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { motion } from 'framer-motion'; 



function Welcome() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={styles.welcome}>
            <div className={styles.left}>
                <motion.img variants={slideIn("left", "tween", 0.5, 1.2)} src="/welcome.jpeg" alt="" className={styles.welcome_img} />
                <Link to='/about'><button>READ MORE</button></Link>

            </div>
            <div className={styles.right}>
                <motion.p variants={fadeIn("left", "tween", 0.4, 1)} className={styles.first_p}>Rebuilding a Stable, Cohesive, and Resilient Nation</motion.p>
                <motion.h1 variants={fadeIn("right", "tween", 0.9, 1)}>Welcome to Falde Foundation</motion.h1>
                <motion.p variants={fadeIn("left", "tween", 0.4, 1)} className={styles.second_p}>Falde Foundation is a startup NGO dedicated to contributing towards rebuilding a stable, cohesive, and resilient nation. Our mission is to address critical challenges facing our society through targeted initiatives in environmental conservation, education, youth development, good governance, and peace promotion.</motion.p>
                <Link to='/about'><button>More Information</button></Link>
            </div>
        </motion.div>
    )
}

export default Welcome
