import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    head: "Championing for growth and development of the youth.",
    description:
      "We believe that investing in the next generation is essential for building a brighter future...",
  },
  {
    head: "Working to ensure that the voices of all groups of society are heard.",
    description:
      "At our foundation, we are dedicated to ensuring that the voices of all groups in society are heard and valued...",
  },
];

function Whatwedo() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.whatwedo} id="areaoffocus">
      <div className={styles.left}>
        <p className={styles.first_p}>What We Do</p>
        <h1>Our Focus Area</h1>
        <p className={styles.second_p}>
          Falde Foundation is dedicated to fostering positive change through a multifaceted approach focused on environmental conservation, access to education, youth development, good governance, and the promotion of peace...
        </p>
      </div>
      <div className={styles.accordion}>
        {focusArea.map((item, index) => (
          <div key={index} className={styles.item}>
            <div
              className={styles.header}
              onClick={() => toggleAccordion(index)}
            >
              {item.head}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>
            <div className={`${styles.content} ${openIndex === index ? styles.open : ""}`}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whatwedo;
