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
                <p className={styles.second_p}>FALDE FOUNDATION is a registered society under the laws of Kenya with its headquarters based in Nairobi. Through their community roots and outreach, Falde seeks among its objectives,to be the change-maker in some of the handicaps in Garissa County and the larger Northern Region.</p>
                <Link to='/about'><button>More Information</button></Link>
            </div>
        </div>
    )
}

export default Welcome
