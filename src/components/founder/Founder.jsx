import { RiDoubleQuotesR } from "react-icons/ri";
import styles from './Founder.module.css'
function Founder() {
    return (
        <div className={styles.founder}>
            <div className={styles.left}>
                <img src="/falhado.png" alt="" />
            </div>
            <div className={styles.right}>
                <div className={styles.founder_quote}>
                    I’m humbled to welcome and record my sincere gratitude to all Foundation’s Stakeholders (Partners, Donors, Communities, Local and National Authorities, Institutions etc.) It’s my pleasure to recognize the contributions of the Foundation’s Executive Board, community elders, Management Team, staff for their hard work and dedication to ensure that the Foundation’s Mission, Goals and Objectives are realized.
                </div>
                <div className={styles.right_low}>
                    <p className={styles.upper_p}>
                        <span className={styles.bold}>Hon Falhado D. Iman</span>
                        <span>Chairperson & Member of Parliament EALA</span>
                    </p>
                    <p><RiDoubleQuotesR className={styles.icon}/></p>
                </div>
            </div>
        </div>
    )
}

export default Founder
