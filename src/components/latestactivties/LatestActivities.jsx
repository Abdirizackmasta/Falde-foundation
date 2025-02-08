import styles from './LatestActivities.module.css';
import { fadeIn,staggerContainer } from "../../utils/motion";
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import { GiTreeDoor } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GiBookAura } from "react-icons/gi";
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
                    <motion.p className={styles.firstp} variants={fadeIn("right", "tween", 0.9, 1)}>Here are some of our latest activities in Garissa County.</motion.p>
                    <motion.h1 variants={fadeIn("left", "tween", 0.4, 1)}>From providing free quality education, to inspiring the youth in the community</motion.h1>
                    <motion.p variants={fadeIn("right", "tween", 0.9, 1)} className={styles.secondp}>to conserving and protecting the environment and many more</motion.p>
                </div>
            </div>
            <div className={styles.lower}>
                   <Link to='/madarasa'>
                    <img src="./madarasa.jpg" alt="tree" />
                        <GiBookAura className={styles.icon}/>
                    <div>
                        <h1>Supporting Education through the establishment of madarasa</h1>
                    </div>
                </Link>
                <Link to='/enviromental'>
                    <img src="./tree2.jpg" alt="tree" />
                        <GiTreeDoor  className={styles.icon}/>
                    <div>
                       <h1>contributing towards Environment Conservation</h1> 
                    </div>
                </Link>
                <Link to='/inspiring'>
                    <img src="./withschoolgirls.jpeg" alt="tree" />
                        <IoIosPeople  className={styles.icon}/>
                    <div>
                        <h1>Mobilizing and inspiring the Youth</h1>
                    </div>
                </Link>
                 <Link to='/feeding-the-community'>
                    <img src="./momswithfood.jpeg" alt="tree" />
                        <FaBowlFood  className={styles.icon}/>
                    <div>
                        <h1>Food Donation to the unprivileged the society</h1>
                    </div>
                </Link>
               
              
            </div>
        </motion.div>
    )
}

export default LatestActivities
