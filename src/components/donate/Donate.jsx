import styles from './Donate.module.css'
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Donate() {
    return (
        <div className={styles.donate}>
            <div className={styles.upper_div}>
            <img src="/mainlogo.jpg" alt="logo" />
            <p>We would like to cordially invite you <br />To the official launch of the Falde Foundation,<br /> which will be held at Nairobi Serena Hotel,<br /> on Sunday 5th May,<br /> 2024 From 12:30pm to 4pm.</p>
            </div>
            <div className={styles.lower_div}>
                <div className={styles.first}>
                    <ul>
                        <li>PAYBILL</li>
                        <li className={styles.paybill}>247247</li>
                        <li>ACCOUNT NO. 7887</li>
                        <li>ACCOUNT NAME</li>
                        <li>Falde Foundation</li>
                    </ul>
                </div>
                <div className={styles.second}>
                    <p>Chief Guest will be:</p>
                    <h1>H.E Rigathi Gachagua</h1>
                    <h1 className={styles.president}>Deputy President of the Republic of Kenya</h1>
                    <p className={styles.social}><span><FaInstagram/></span><span>@faldefoundation</span></p>
                    <p className={styles.social}><span><SiGmail /></span><span>@Faldefoundation@gmail.com</span></p>
                </div>
                <div className={styles.third}>
                    <p>RSVP</p>
                    <p>0722778749</p>
                </div>
            </div>
        </div>
    )
}

export default Donate
