import { RiDoubleQuotesR } from "react-icons/ri";
import styles from './Founder.module.css'
import { motion } from 'framer-motion'; 
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

function Founder() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={styles.founder}>
            <div className={styles.left}>
                <motion.img variants={slideIn("left", "tween", 0.5, 1.2)}  src="/falhado.png" alt="" />
            </div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={styles.right}>
                <motion.div variants={fadeIn("left", "tween", 0.4, 1)} className={styles.founder_quote}>
                    I’m humbled to welcome and record my sincere gratitude to all Foundation’s Stakeholders (Partners, Donors, Communities, Local and National Authorities, Institutions etc.) It’s my pleasure to recognize the contributions of the Foundation’s Executive Board, community elders, Management Team, staff for their hard work and dedication to ensure that the Foundation’s Mission, Goals and Objectives are realized.
                </motion.div>
                <div className={styles.right_low}>
                    <motion.p variants={fadeIn("right", "tween", 0.9, 1)} className={styles.upper_p}>
                        <span className={styles.bold}>Hon Falhado D. Iman</span>
                        <span>Chairperson & Member of Parliament EALA</span>
                    </motion.p>
                    <p><RiDoubleQuotesR className={styles.icon}/></p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Founder
