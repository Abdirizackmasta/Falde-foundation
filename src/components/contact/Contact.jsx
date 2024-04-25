import styles from './Contact.module.css'
import { CgMailOpen } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { motion } from 'framer-motion'; 


function Contact() {
    return (
        <motion.div className={styles.contact}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <div className={styles.div_1}>
                <motion.h1 variants={fadeIn("right", "tween", 0.9, 1)}>Contact  <span>us</span></motion.h1>
                <motion.p variants={fadeIn("left", "tween", 0.4, 1)}>Send us your questions about membership, partnerships, events and more..</motion.p>
            </div>
            <motion.div
                variants={fadeIn("right", "tween", (1 + 1) * 0.2, 1)}
                className={styles.div_2}>
                <div>
                   <CgMailOpen className={styles.icon_div}/>
                    <p>faldefoundation@gmail.com</p>
                </div>
                <div>
                    <FaLocationDot className={styles.icon_div}/>
                    <p>Nairobi, Kenya</p>
                </div>
                <div>
                    <FaPhoneAlt className={styles.icon_div}/>
                    <p>+254 722 778749</p>
                </div>
            </motion.div>
            <div className={styles.div_3}>
                <div className={styles.div3_left}>
                    <div className={styles.upperleft}>
                        <p className={styles.upperleft_firstp}>Get In Touch</p>
                        <h1>Love to hear from you</h1>
                        <p className={styles.upperleft_secondp}>We're here to help and answer any question you might have. We look forward to hearing from you</p>
                    </div>
                    <div className={styles.leftLower}>
                        <Link><FaFacebookF className={styles.lowericons}/></Link> 
                        <Link><FaInstagram  className={styles.lowericons}/></Link> 
                        <Link><FaXTwitter  className={styles.lowericons}/></Link> 
                       
                    </div>
                </div>
                <div className={styles.div3_right}>
                    <form>
                        <label>Your Name</label>
                        <input type="text" required/>
                        <label>Your Email</label>
                        <input type="text" required/>
                        <label>Subject</label>
                        <input type="text" required/>
                        <label>Your Message</label>
                        <textarea></textarea>
                        <button>submit</button>
                    </form>
                </div>
            </div>
            
        </motion.div>
    )
}

export default Contact
