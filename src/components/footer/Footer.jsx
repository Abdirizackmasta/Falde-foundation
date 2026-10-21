import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.upper}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="Falde Foundation home">
            <img src="/mainlogo.jpg" alt="Falde Foundation" />
          </Link>
          <p>Rebuilding a resilient, stable and cohesive nation.</p>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/share/6oyZhwnxSRCXcNpT/?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              aria-label="Falde Foundation on Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/falde_foundation/"
              target="_blank"
              rel="noreferrer"
              aria-label="Falde Foundation on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <nav className={styles.col} aria-label="Quick links">
          <h2>Quick links</h2>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/team">Our team</Link></li>
            <li><Link to="/latestactivities">Our programmes</Link></li>
            <li><Link to="/upcoming">Events</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </nav>

        <div className={styles.col}>
          <h2>Contact</h2>
          <ul className={styles.contact}>
            <li>
              <a href="tel:+254722778749">
                <IoCall aria-hidden="true" />
                <span>+254 722 778749</span>
              </a>
            </li>
            <li>
              <a href="mailto:faldefoundation@gmail.com">
                <SiGmail aria-hidden="true" />
                <span>faldefoundation@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.col} ${styles.give}`}>
          <h2>Making a difference</h2>
          <p>Every contribution helps girls, women and youth in our region.</p>
          <Link to="/donate" className="btn btn-primary">
            Donate now <FaHeart aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className={`container ${styles.lower}`}>
        <p>
          © {new Date().getFullYear()} Falde Foundation. All rights reserved.
        </p>
        <p>Registered society · Nairobi, Kenya</p>
      </div>
    </footer>
  );
}

export default Footer;
