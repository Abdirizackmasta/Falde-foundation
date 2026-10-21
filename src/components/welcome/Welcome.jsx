import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <section className={`section ${styles.welcome}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.media}>
          <div className={styles.frame}>
            <img
              src="/welcome.jpeg"
              alt="Falde Foundation members meeting with community members"
              className={styles.main_img}
            />
          </div>
          <img
            src="/treeplanting.jpeg"
            alt="Planting a tree in Masalani"
            className={styles.small_img}
            loading="lazy"
          />
        </Reveal>

        <Reveal className={styles.text} delay={0.1}>
          <p className="eyebrow">Rebuilding a stable, cohesive and resilient nation</p>
          <h2>Welcome to Falde Foundation</h2>
          <p className={styles.body}>
            FALDE FOUNDATION is a registered society under the laws of Kenya
            with its headquarters based in Nairobi. Through their community
            roots and outreach, Falde seeks, among its objectives, to be the
            change-maker in some of the handicaps in Garissa County and the
            larger Northern Region.
          </p>
          <ul className={styles.chips}>
            <li>Registered in Kenya</li>
            <li>Headquartered in Nairobi</li>
            <li>Rooted in Garissa County</li>
          </ul>
          <Link to="/about" className="btn btn-primary">
            More about us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default Welcome;
