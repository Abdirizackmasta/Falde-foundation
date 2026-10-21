import { RiDoubleQuotesL } from "react-icons/ri";
import Reveal from "../Reveal";
import styles from "./Founder.module.css";

function Founder() {
  return (
    <section className={`section ${styles.founder}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.portrait}>
          <img
            src="/falhado.png"
            alt="Hon Falhada Dekow Iman, Chairperson of Falde Foundation"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <RiDoubleQuotesL className={styles.mark} aria-hidden="true" />
          <blockquote className={styles.quote}>
            <p>
              Greetings good people. My name is Falhada Dekow Iman, born and
              bred in Masalani, Ijara Constituency, Garissa County. As you are
              aware, our County and region is marginalized, and when we grew up
              we were exposed to a myriad of challenges and poverty that affects
              more the girl child. We were exposed to vices and handicaps but in
              the midst of all these we pulled through successfully.
            </p>
            <p>
              I hereby invite you and our development partners to walk with
              Falde in this journey to bring and stir up empowerment and
              development for the women and youth of our region. Asante sana
              and Karibu to Falde. Hit us up!
            </p>
          </blockquote>
          <p className={styles.author}>
            <strong>Hon Falhada Dekow Iman</strong>
            <span>Chairperson, Falde Foundation</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Founder;
