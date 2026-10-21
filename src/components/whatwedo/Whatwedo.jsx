import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Reveal from "../Reveal";
import styles from "./Whatwedo.module.css";

const focusArea = [
  {
    head: "Empowering the girl child on various aspects of life",
    description:
      "Through comprehensive programs and initiatives, we provide invaluable resources, support, and education to help girls thrive and reach their full potential...",
  },
  {
    head: "Advocating and championing for peace, equality and environment conservation",
    description:
      "At our foundation, we are dedicated to advocating and championing crucial causes that shape a better world for all...",
  },
  {
    head: "Advocating for opportunities for the vulnerable women in our society",
    description:
      "At our foundation, we passionately advocate for creating opportunities for vulnerable women in our society...",
  },
  {
    head: "Championing for growth and development of the youth",
    description:
      "We believe that investing in the next generation is essential for building a brighter future...",
  },
  {
    head: "Working to ensure that the voices of all groups of society are heard",
    description:
      "At our foundation, we are dedicated to ensuring that the voices of all groups in society are heard and valued...",
  },
];

function Whatwedo() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className={`section ${styles.whatwedo}`} id="areaoffocus">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.intro}>
          <p className="eyebrow">What we do</p>
          <h2>Our focus areas</h2>
          <p className={styles.lead}>
            Falde Foundation is dedicated to fostering positive change through
            a multifaceted approach focused on environmental conservation,
            access to education, youth development, good governance, and the
            promotion of peace.
          </p>
        </Reveal>

        <Reveal className={styles.accordion} delay={0.1}>
          {focusArea.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.head}
                className={`${styles.item} ${open ? styles.item_open : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    className={styles.header}
                    aria-expanded={open}
                    aria-controls={`focus-panel-${index}`}
                    id={`focus-header-${index}`}
                    onClick={() => toggle(index)}
                  >
                    <span className={styles.num}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.title}>{item.head}</span>
                    <FaChevronDown className={styles.chevron} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`focus-panel-${index}`}
                  role="region"
                  aria-labelledby={`focus-header-${index}`}
                  className={styles.panel}
                >
                  <div className={styles.panel_inner}>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export default Whatwedo;
