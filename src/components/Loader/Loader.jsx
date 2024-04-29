import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
}