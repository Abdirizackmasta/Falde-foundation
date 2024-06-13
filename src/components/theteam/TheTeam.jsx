import styles from './TheTeam.module.css'
import { MdVerified } from "react-icons/md";

function TheTeam() {
    return (
        <div className={styles.the_team}>
            <div className={styles.div_1}>
                <img src="/team.jpg" alt="" />
                <p className={styles.p1}>Meet our team</p>
                <h1>FPF Founders & Leadership</h1>
                <p className={styles.p2}>FPF leadership is dedicated to our mission and to continuing the legacy of innovation to help people build better lives and more durable futures.</p>
            </div>
            <div className={styles.div_2}>
                <div>
                    <img src="/falhado.png" alt="" />
                    <h1>Hon Falhado D. Iman  <MdVerified className={styles.icon}/></h1>
                    <p className={styles.position}>Chairperson</p>
                    <p className={styles.div2_p2}>Falhado is a prominent figure, serving not only as a Member of Parliament in the East African Legislative Assembly (EALA) but also as the visionary founder of the esteemed Falde Foundation. With a remarkable career dedicated to public service and community empowerment, Falhado exemplifies the intersection of leadership, compassion, and advocacy.As an MP in EALA, She tirelessly champions the interests and welfare of her people, striving to enact positive change on a regional level. Her commitment to legislative excellence and her advocacy for social justice have earned her widespread respect and admiration.</p>
                </div>
            </div>
        </div>
    )
}

export default TheTeam
