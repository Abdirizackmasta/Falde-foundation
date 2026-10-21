import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import Reveal from "../Reveal";
import styles from "./Activities.module.css";

const ourActivities = [
  {
    heading: "Supporting education through the establishment of madarasa",
    details:
      "Empowering the community through education: Falde Foundation’s dedication to learning and growth.",
    image: "/madarasa.jpg",
    to: "/madarasa",
  },
  {
    heading: "Food donation to homes in Kenya",
    details:
      "Reaching vulnerable and needy homes to enhance food security.",
    image: "/momswithfood.jpeg",
    to: "/feeding-the-community",
  },
  {
    heading: "Planting trees at Masalani in Ijara constituency",
    details:
      "Contributing towards environmental conservation in the region.",
    image: "/treeplanting.jpeg",
    to: "/enviromental",
  },
  {
    heading: "Mobilizing and inspiring the youth",
    details:
      "Mobilizing and inspiring youth is essential for driving positive change and addressing social, economic and environmental challenges.",
    image: "/withschoolgirls.jpeg",
    to: "/inspiring",
  },
];

function Activities() {
  const [index, setIndex] = useState(0);
  const total = ourActivities.length;

  const previous = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <section className={`section ${styles.activities}`}>
      <div className="container">
        <Reveal className={styles.top}>
          <div>
            <p className="eyebrow">Our task</p>
            <h2>Some of our impactful activities</h2>
          </div>
          <p className={styles.partner}>
            We’re working in partnership for results that last.
          </p>
        </Reveal>

        <Reveal className={styles.slider} delay={0.1}>
          <div className={styles.track} aria-live="polite">
            {ourActivities.map((activity, i) => (
              <article
                key={activity.heading}
                className={`${styles.slide} ${i === index ? styles.current : ""}`}
                aria-hidden={i !== index}
              >
                <img
                  src={activity.image}
                  alt=""
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className={styles.shade} />
                <div className={styles.caption}>
                  <span className={styles.count}>
                    {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                  <h3>{activity.heading}</h3>
                  <p>{activity.details}</p>
                  <Link
                    to={activity.to}
                    className={`btn btn-primary ${styles.more}`}
                    tabIndex={i === index ? 0 : -1}
                  >
                    Read the story <FaArrowRightLong aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.controls}>
            <div className={styles.dots}>
              {ourActivities.map((activity, i) => (
                <button
                  key={activity.heading}
                  type="button"
                  className={i === index ? styles.dot_active : styles.dot}
                  aria-label={`Show activity ${i + 1}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <div className={styles.arrows}>
              <button type="button" onClick={previous} aria-label="Previous activity">
                <FaArrowLeft />
              </button>
              <button type="button" onClick={next} aria-label="Next activity">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Activities;
