import styles from "./Navbar.module.css";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useHeaderShadow from "../../hooks/UseHeaderShadow";
import useOutsideAlerter from "../../hooks/UseOutsideAlerter";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/latestactivities", label: "Our Activities" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact Us" },
  { to: "/upcoming", label: "Events" },
];

function Navbar() {
  const headerShadow = useHeaderShadow();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);

  useOutsideAlerter({ menuRef, setMenuOpened: setMenuOpen });

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbar_inner}`}>
          <a href="mailto:faldefoundation@gmail.com" className={styles.email_link}>
            <MdEmail aria-hidden="true" />
            <span>faldefoundation@gmail.com</span>
          </a>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://www.facebook.com/share/6oyZhwnxSRCXcNpT/?mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
                aria-label="Falde Foundation on Facebook"
              >
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/falde_foundation/"
                target="_blank"
                rel="noreferrer"
                aria-label="Falde Foundation on Instagram"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav
        className={styles.bar}
        style={{ boxShadow: headerShadow || "none" }}
        aria-label="Main"
      >
        <div className={`container ${styles.bar_inner}`} ref={menuRef}>
          <Link to="/" className={styles.logo} aria-label="Falde Foundation home">
            <img src="/mainlogo.jpg" alt="Falde Foundation" />
          </Link>

          <ul
            id="main-menu"
            className={`${styles.menu} ${menuOpen ? styles.open : ""}`}
          >
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className={styles.menu_cta}>
              <Link to="/donate" className="btn btn-primary">
                Donate
              </Link>
            </li>
          </ul>

          <Link to="/donate" className={`btn btn-primary ${styles.cta}`}>
            Donate
          </Link>

          <button
            type="button"
            className={styles.toggle}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
