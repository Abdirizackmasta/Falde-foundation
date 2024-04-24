import styles from './LatestActivities.module.css';


function LatestActivities() {
    return (
        <div>
            <div className={styles.upper}>
                <p className={styles.firstp}>Planting trees at various schools in Ijara constituency, Garissa County.</p>
                <h1>Contributing towards Environment Conservation</h1>
                <p className={styles.secondp}>Event organized by Falhado Dekow</p>
            </div>
            <div className={styles.lower}>
                <img src="./treeplanting.jpeg" alt="tree" />
                <img src="./tree2.jpg" alt="tree" />
                <img src="./tree3.jpg" alt="tree" />
                <img src="./tree4.jpg" alt="tree" />
                <img src="./tree5.jpg" alt="tree" />
                <img src="./tree6.jpg" alt="tree" />
            </div>
        </div>
    )
}

export default LatestActivities
