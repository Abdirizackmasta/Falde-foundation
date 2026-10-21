import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import styles from "./Donate.module.css";

function Donate() {
  return (
    <section className={`section ${styles.donate}`}>
      <div className="container">
        <div className={styles.invite}>
          <div className={styles.upper}>
            <img src="/mainlogo.jpg" alt="Falde Foundation" />
            <p className="eyebrow">You’re invited</p>
            <h1>Official launch of the Falde Foundation</h1>
            <p className={styles.lead}>
              We would like to cordially invite you to the official launch of
              the Falde Foundation.
            </p>
            <ul className={styles.facts}>
              <li>
                <FaCalendarDays aria-hidden="true" />
                <span>Sunday 5th May 2024 · 12:30pm – 4pm</span>
              </li>
              <li>
                <FaLocationDot aria-hidden="true" />
                <span>Nairobi Serena Hotel</span>
              </li>
            </ul>
          </div>

          <div className={styles.lower}>
            <div className={styles.block}>
              <h2>Chief guest</h2>
              <p className={styles.guest}>H.E Rigathi Gachagua</p>
              <p className={styles.role}>Deputy President of the Republic of Kenya</p>
            </div>

            <div className={styles.block}>
              <h2>Give via M-Pesa</h2>
              <dl className={styles.pay}>
                <div>
                  <dt>Paybill</dt>
                  <dd>247247</dd>
                </div>
                <div>
                  <dt>Account no.</dt>
                  <dd>7887</dd>
                </div>
              </dl>
              <p className={styles.role}>Account name: Falde Foundation</p>
            </div>

            <div className={styles.block}>
              <h2>RSVP</h2>
              <p className={styles.guest}>
                <a href="tel:+254722778749">0722 778 749</a>
              </p>
              <p className={styles.social}>
                <FaInstagram aria-hidden="true" /> @faldefoundation
              </p>
              <p className={styles.social}>
                <SiGmail aria-hidden="true" />
                <a href="mailto:faldefoundation@gmail.com">faldefoundation@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donate;
