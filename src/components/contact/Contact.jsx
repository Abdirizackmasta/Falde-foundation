import styles from './Contact.module.css'
import { CgMailOpen } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.div_1}>
                <h1>Contact  <span>us</span></h1>
                <p>Send us your questions about membership, partnerships, events and more..</p>
            </div>
            <div className={styles.div_2}>
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
                    <p>+254 769 862 273</p>
                </div>
            </div>
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
            
        </div>
    )
}

export default Contact
