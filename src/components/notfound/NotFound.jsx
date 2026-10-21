import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1>We couldn’t find that page</h1>
        <p className="lead">
          The page may have moved, or the link might be mistyped. Let’s get you
          back on track.
        </p>
        <div className={styles.actions}>
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/latestactivities" className="btn btn-outline">See our activities</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
