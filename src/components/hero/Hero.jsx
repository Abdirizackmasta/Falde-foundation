import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const slides = ["/hero2.jpeg", "/hero1.jpeg", "/hero3.jpeg", "/hero4.jpeg"];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.slides} aria-hidden="true">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={i === current ? styles.active : ""}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <p className={`eyebrow light ${styles.rise}`}>
          Registered society · Nairobi, Kenya
        </p>
        <h1 className={styles.rise}>
          Falde Foundation: Advocating for Inspiration and Change, where{" "}
          <em>People and Nature</em> Thrive
        </h1>
        <p className={`${styles.sub} ${styles.rise}`}>
          Together, we rebuild a stable, cohesive and resilient nation by
          ensuring equal access to quality education.
        </p>
        <div className={`${styles.actions} ${styles.rise}`}>
          <Link to="/donate" className="btn btn-primary">
            Donate now
          </Link>
          <Link to="/latestactivities" className="btn btn-ghost-light">
            See our activities
          </Link>
        </div>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Hero photos">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Show photo ${i + 1}`}
            className={i === current ? styles.dot_active : styles.dot}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
