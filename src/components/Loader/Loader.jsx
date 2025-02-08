import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <span className={styles.text}>Welcome to Falde Foundation</span>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}