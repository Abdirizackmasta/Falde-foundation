import styles from './About.module.css'
import { FaEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { motion } from 'framer-motion'; 
import { fadeIn, staggerContainer } from "../../utils/motion";
function About() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={styles.about}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={styles.div_1}>
                <motion.h1  variants={fadeIn("right", "tween", 0.9, 1)}>About <span>us</span></motion.h1>
                <motion.p variants={fadeIn("left", "tween", 0.4, 1)}>Falde Foundation inspires change so people and nature thrive</motion.p>
            </motion.div>
            <div className={styles.div_2}>
                <div className={styles.div2_details}>
                        <p>Rebuilding a Stable, Cohesive, and Resilient Nation</p>
                        <h1>Welcome</h1>
                        <p>FALDE FOUNDATION is a registered society under the laws of Kenya with its headquarters based in Nairobi. Through their community roots and outreach, Falde seeks among its objectives, to be the change-maker in some of the handicaps in Garissa County and the larger Northern Region.</p>
                </div>
                <div className={styles.div2_img}>
                        <img src="./hero1.jpeg" alt="" />
                    </div>
                </div>
            <div className={styles.div_3}>
                <div>
                    <img src="./vission.jpeg" alt="" />
                    <FaEye className={styles.icon1} />
                    <span>
                    <h1 >
                        Our Vision
                    </h1>
                    <p>We envision a world where every young person and woman has equal opportunities, access to education, and the ability to reach their full potential. Through our efforts, we aim to create a society that celebrates diversity, empowers individuals, and promotes gender equality.</p>
                    </span>
                    
                </div>
                <div>
                    <img src="./mission.jpeg" alt="" />
                    <FaBullseye variants={fadeIn("left", "tween", 0.4, 1)} className={styles.icon2} width={1000}/>
                    <span>
                    <h1>
                        Our Mission
                    </h1>
                    <p>FALDE is dedicated to empowering youth and women through comprehensive programs, resources, and support, fostering their personal and professional development for a brighter and more equitable future.</p>
                    </span>
                </div>
            </div>
            <div className={styles.fourth}></div>
        </motion.div>
    )
}

export default About
