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
                    <p className={styles.position}>Chairperson & Member of Parliament EALA</p>
                    <p className={styles.div2_p2}>Falhado is a prominent figure, serving not only as a Member of Parliament in the East African Legislative Assembly (EALA) but also as the visionary founder of the esteemed Falde Foundation. With a remarkable career dedicated to public service and community empowerment, Falhado exemplifies the intersection of leadership, compassion, and advocacy.As an MP in EALA, She tirelessly champions the interests and welfare of her people, striving to enact positive change on a regional level. Her commitment to legislative excellence and her advocacy for social justice have earned her widespread respect and admiration.</p>
                </div>
                <div>
                    <img src="/haphsa.jpeg" alt="" />
                    <h1>Hafsa Mohamed <MdVerified className={styles.icon}/></h1>
                    <p className={styles.position}>Deputy Director</p>
                    <p className={styles.div2_p2}>Hafsa brings a unique blend of leadership and creativity to her role as Deputy Director. With a keen eye for detail and a passion for innovation, she plays a pivotal role in guiding the strategic direction of our organization.Beyond her duties in the boardroom, Hafsa is a talented fashion designer, infusing her distinctive style and artistic flair into everything she does. Her creative vision not only shapes our organizational strategy but also inspires those around her to think outside the box.</p>
                </div>
            </div>
        </div>
    )
}

export default TheTeam
