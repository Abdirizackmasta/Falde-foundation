import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';



function Welcome() {
    return (
        <div
            className={styles.welcome}>
            <div className={styles.left}>
                <img  src="/welcome.jpeg" alt="" className={styles.welcome_img} />
                <Link to='/about'><button>READ MORE</button></Link>

            </div>
            <div className={styles.right}>
                <p className={styles.first_p}>Rebuilding a Stable, Cohesive, and Resilient Nation</p>
                <h1>Welcome to Falde Foundation</h1>
                <p className={styles.second_p}>Falde Foundation is a startup NGO dedicated to contributing towards rebuilding a stable, cohesive, and resilient nation. Our mission is to address critical challenges facing our society through targeted initiatives in environmental conservation, education, youth development, good governance, and peace promotion.</p>
                <Link to='/about'><button>More Information</button></Link>
            </div>
        </div>
    )
}

export default Welcome
