import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer} role="status" aria-live="polite">
      <img src="/mainlogo.jpg" alt="Falde Foundation" className={styles.logo} />
      <div className={styles.bar} aria-hidden="true">
        <span />
      </div>
      <span className={styles.sr}>Loading</span>
    </div>
  );
}
