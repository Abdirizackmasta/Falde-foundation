import { Link } from "react-router-dom";
import { FaEye, FaBullseye } from "react-icons/fa6";
import PageHero from "../PageHero/PageHero";
import Reveal from "../Reveal";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <PageHero
        image="/blackandwhite.jpeg"
        eyebrow="About us"
        title="Falde Foundation inspires change so people and nature thrive"
        position="center 35%"
      />

      <section className={`section ${styles.intro}`}>
        <div className={`container ${styles.intro_grid}`}>
          <Reveal>
            <p className="eyebrow">Rebuilding a stable, cohesive and resilient nation</p>
            <h2>Welcome</h2>
            <p className={styles.body}>
              FALDE FOUNDATION is a registered society under the laws of Kenya
              with its headquarters based in Nairobi. Through their community
              roots and outreach, Falde seeks, among its objectives, to be the
              change-maker in some of the handicaps in Garissa County and the
              larger Northern Region.
            </p>
            <div className={styles.actions}>
              <Link to="/latestactivities" className="btn btn-primary">
                See our activities
              </Link>
              <Link to="/team" className="btn btn-outline">
                Meet the team
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className={styles.photo}>
            <img
              src="/hero1.jpeg"
              alt="Girls in a classroom supported by Falde Foundation"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.values}`}>
        <div className="container">
          <Reveal className={styles.values_head}>
            <p className="eyebrow">What guides us</p>
            <h2>Our vision and mission</h2>
          </Reveal>

          <div className={styles.cards}>
            <Reveal className={styles.card}>
              <div className={styles.card_img}>
                <img src="/vission.jpeg" alt="" loading="lazy" />
                <span className={styles.badge}><FaEye aria-hidden="true" /></span>
              </div>
              <div className={styles.card_body}>
                <h3>Our vision</h3>
                <p>
                  We envision a world where every young person and woman has
                  equal opportunities, access to education, and the ability to
                  reach their full potential. Through our efforts, we aim to
                  create a society that celebrates diversity, empowers
                  individuals, and promotes gender equality.
                </p>
              </div>
            </Reveal>

            <Reveal className={styles.card} delay={0.12}>
              <div className={styles.card_img}>
                <img src="/mission.jpeg" alt="" loading="lazy" />
                <span className={styles.badge}><FaBullseye aria-hidden="true" /></span>
              </div>
              <div className={styles.card_body}>
                <h3>Our mission</h3>
                <p>
                  FALDE is dedicated to empowering youth and women through
                  comprehensive programs, resources, and support, fostering
                  their personal and professional development for a brighter
                  and more equitable future.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.cta_inner}`}>
          <h2>Walk with us on this journey</h2>
          <p>
            Partner with Falde, volunteer, or give — every contribution
            supports education, empowerment and a greener future.
          </p>
          <div className={styles.actions}>
            <Link to="/donate" className="btn btn-primary">Donate</Link>
            <Link to="/contact" className="btn btn-ghost-light">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
