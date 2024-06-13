import { RiDoubleQuotesR } from "react-icons/ri";
import styles from './Founder.module.css'


function Founder() {
    return (
        <div className={styles.founder_container}>
            <div className={styles.founder}>
                <div className={styles.left}>
                    <img src="/falhado.png" alt="" />
                </div>
                <div
                    className={styles.right}>
                    <div className={styles.founder_quote}>
                        Greetings good People My name is Falhada Dekow Iman born and bred in Masalani, Ijara Constituency Garissa County. As you are aware our County and region is marginalized and when we grew up we were exposed to a myriad of challenges and poverty that affects more the girl child. We were exposed to vices and handicaps but in the midst of all these we pulled through successfully. I hereby invite you and our development partners to walk with Falde in this journey to bring and stir up empowerment and development for the women and youth of our region. Asante sana and Karibu to Falde, Hit us up!
                    </div>
                    <div className={styles.right_low}>
                        <p className={styles.upper_p}>
                            <span className={styles.bold}>Hon Falhada Dekow Iman</span>
                            <span>Chairperson</span>
                        </p>
                        <p><RiDoubleQuotesR className={styles.icon}/></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Founder
