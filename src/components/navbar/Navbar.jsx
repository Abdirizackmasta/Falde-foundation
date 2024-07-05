import styles from "./Navbar.module.css";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import useHeaderShadow from "../../hooks/UseHeaderShadow";
import { FaBars } from "react-icons/fa6";
import {  Link } from "react-router-dom";
import { useRef, useState } from "react";
import { getMenuStyles } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/UseOutsideAlerter";


function Navbar() {
  const headerShadow = useHeaderShadow();
  const [openMenu, setMenuOpen] = useState(false)
  const menuRef = useRef(null);
   useOutsideAlerter({
    menuRef,
    setMenuOpen,
  });
  


  return (
    <nav className={styles.nav} style={{ boxShadow: headerShadow }}>
      <div className={styles.upper_nav}>
        <div className={styles.left_upper}>
          <p>Welcome to Falde Foundation</p>

          <a
            href={`mailto:faldefoundation@gmail.com`}
            className={styles.email_link}
          >
            <MdEmail className={styles.email_icon} />
            faldefoundation@gmail.com
          </a>
        </div>
        <div className={styles.right_upper}>
          <ul>
            <li>
              <a href="https://www.facebook.com/share/6oyZhwnxSRCXcNpT/?mibextid=LQQJ4d">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/falde_foundation/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter />
              </a>
            </li>
           

          </ul>
        </div>
      </div>
      <div className={styles.nav_lower}>
        <Link to='/'>
        <img src="/mainlogo.jpg" alt="" />
        </Link>
        <div>
          <ul style={getMenuStyles(openMenu)} ref={menuRef} className={styles.nav_items}>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/latestactivities'>Our Activities</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/upcoming'>Upcoming events</Link></li>
          </ul>
        </div>
         <FaBars className={styles.bar} onClick={() => setMenuOpen((prev) => !prev)}/>
        <Link to='/donate'><button>Get involved</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
