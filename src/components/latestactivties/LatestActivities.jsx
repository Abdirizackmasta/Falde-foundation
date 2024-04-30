import styles from './LatestActivities.module.css';
import { fadeIn,staggerContainer } from "../../utils/motion";
import { motion } from 'framer-motion'; 

function LatestActivities() {
    return (
        <motion.div
           variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}>
            <div className={styles.upper}>
                <img src="./treeplanting.jpeg" alt="" className={styles.img} />
                <div className={styles.upper_inner}>
                    <motion.p className={styles.firstp} variants={fadeIn("right", "tween", 0.9, 1)}>Planting trees at various schools in Ijara constituency, Garissa County.</motion.p>
                    <motion.h1 variants={fadeIn("left", "tween", 0.4, 1)}>Contributing towards Environment Conservation</motion.h1>
                    <motion.p variants={fadeIn("right", "tween", 0.9, 1)} className={styles.secondp}>Event organized by Falhado Dekow</motion.p>
                </div>
            </div>
            <div className={styles.lower}>
                <img src="./treeplanting.jpeg" alt="tree" />
                <img src="./tree2.jpg" alt="tree" />
                <img src="./tree3.jpg" alt="tree" />
                <img src="./tree4.jpg" alt="tree" />
                <img src="./tree5.jpg" alt="tree" />
                <img src="./tree6.jpg" alt="tree" />
            </div>
        </motion.div>
    )
}

export default LatestActivities
