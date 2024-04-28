import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import styles from './Footer.module.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.upper_footer}>
                <div className={styles.first}>
                    <img src="./biggerLogo.png" alt="" />
                    <p>Rebuilding Resilient, Stable and Cohensive Nation</p>
                </div>
                <div className={styles.second}>
                    <h1>Quck Links</h1>
                    <ul>
                        <li><Link to='/team'>Our Team</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/latestactivities'>Our Programms</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className={styles.third}>
                    <h1>Contact</h1>
                     <a href="tel:+254 722 778749">
                        <span>< IoCall className={styles.icon}/></span>
                        <span>+254 722 778749</span>
                    </a>
                    

                    <a href="mailto:faldefoundation@gmail.com">
                        <span>< SiGmail className={styles.icon}/></span>
                        <span>faldefoundation@gmail.com</span>
                    </a>
                    
                </div>
                <div className={styles.fourth}>
                    <p>Making a difference</p>
                    <h1>Donate <FaArrowDown /></h1>
                    <Link to='contact'> <button><p>Donate Now</p><FaHeart  className={styles.heart} /></button></Link>
                </div>
            </div>
            <div className={styles.lower_footer}>
                <div>
                    <p>© 2024 – Falde Foundation – All rights reserved. Design By <a href="https://abdirizack-masta.netlify.app/">Masta Tech</a>.</p>
                </div>
                <div className={styles.lower_right}>
                    <Link><FaFacebookF /></Link>
                    <Link><FaInstagram /></Link>
                    <Link><BsTwitterX /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
