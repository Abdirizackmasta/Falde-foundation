import { MdVerified } from "react-icons/md";
import PageHero from "../PageHero/PageHero";
import Reveal from "../Reveal";
import styles from "./TheTeam.module.css";

function TheTeam() {
  return (
    <>
      <PageHero
        image="/hero2.jpeg"
        eyebrow="Meet our team"
        title="Falde Foundation founders & leadership"
        subtitle="Our leadership is dedicated to our mission and to continuing the legacy of innovation to help people build better lives and more durable futures."
        position="center 30%"
      />

      <section className={`section ${styles.section}`}>
        <div className="container">
          <Reveal className={styles.card}>
            <div className={styles.photo}>
              <img
                src="/falhado.png"
                alt="Hon Falhado D. Iman, Chairperson"
                loading="lazy"
              />
            </div>
            <div className={styles.text}>
              <p className="eyebrow">Chairperson &amp; founder</p>
              <h2>
                Hon Falhado D. Iman{" "}
                <MdVerified className={styles.verified} aria-label="Verified" />
              </h2>
              <p>
                Falhado is a prominent figure, serving not only as a Member of
                Parliament in the East African Legislative Assembly (EALA) but
                also as the visionary founder of the esteemed Falde Foundation.
                With a remarkable career dedicated to public service and
                community empowerment, Falhado exemplifies the intersection of
                leadership, compassion, and advocacy.
              </p>
              <p>
                As an MP in EALA, she tirelessly champions the interests and
                welfare of her people, striving to enact positive change on a
                regional level. Her commitment to legislative excellence and her
                advocacy for social justice have earned her widespread respect
                and admiration.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default TheTeam;
