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
            href={`mailto:abdirizackissack2018@gmail.com`}
            className={styles.email_link}
          >
            <MdEmail className={styles.email_icon} />
            abdirizackissack2018@gmail.com
          </a>
        </div>
        <div className={styles.right_upper}>
          <ul>
            <li>
              <a href="">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
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
          <ul style={getMenuStyles(openMenu)} ref={menuRef}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li><Link to='/about'>Who Are We</Link></li>
            <li><Link to='/latestactivities'>Our Activities</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
         <FaBars className={styles.bar} onClick={() => setMenuOpen((prev) => !prev)}/>
        <button>Get involved</button>
      </div>
    </nav>
  );
}

export default Navbar;
