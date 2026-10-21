import styles from "./PageHero.module.css";

/**
 * Banner used at the top of the inner pages: photo, dark green overlay and
 * readable text on top.
 */
function PageHero({ image, eyebrow, title, subtitle, position = "center" }) {
  return (
    <section className={styles.hero}>
      <img
        src={image}
        alt=""
        className={styles.image}
        style={{ objectPosition: position }}
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        {eyebrow && <p className="eyebrow light">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
