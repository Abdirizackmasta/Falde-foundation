import styles from './TheTeam.module.css'
import { MdVerified } from "react-icons/md";

function TheTeam() {
    return (
        <div className={styles.the_team}>
            <div className={styles.div_1}>
                <p className={styles.p1}>Meet our team</p>
                <h1>FPF Founders & Leadership</h1>
                <p className={styles.p2}>FPF leadership is dedicated to our mission and to continuing the legacy of innovation to help people build better lives and more durable futures.</p>
            </div>
            <div className={styles.div_2}>
                <div>
                    <img src="./falhado.png" alt="" />
                    <h1>Hon Falhado D. Iman  <MdVerified className={styles.icon}/></h1>
                    <p className={styles.position}>Chairperson & Member of Parliament EALA</p>
                    <p className={styles.div2_p2}>Hon. Maina Karobia Mwangi is a young prominent Kenya politician and member of parliament. He is elected as the youngest member of parliament in the East African Legislative Assembly (EALA), and a resident of Kiambu County. He is a graduate of the Mount Kenya University, where he obtained a bachelor’s degree in education. He is a current candidate for master’s in international relations at the University of Nairobi. As an MP, Hon. Karobia serves in the Committee of agriculture, tourism, and natural resources, whilst chairing the sub-committee on natural resources. Furthermore, he is in the Committee of General-purpose encompassing health, education, youth, sports, finance, and budget. Hon. Karobia is the Chief Whip of the Kenyan Delegation in EALA. He is a strong advocate of youth participation in EAC matters, climate change, food security, cybersecurity, mental health, and drug abuse. His areas of interest are inter alia peace and security, governance, and youth development.</p>
                </div>
                <div>
                    <img src="./falhado.png" alt="" />
                    <h1>Hon Falhado D. Iman  <MdVerified className={styles.icon}/></h1>
                    <p className={styles.position}>Chairperson & Member of Parliament EALA</p>
                    <p className={styles.div2_p2}>Hon. Maina Karobia Mwangi is a young prominent Kenya politician and member of parliament. He is elected as the youngest member of parliament in the East African Legislative Assembly (EALA), and a resident of Kiambu County. He is a graduate of the Mount Kenya University, where he obtained a bachelor’s degree in education. He is a current candidate for master’s in international relations at the University of Nairobi. As an MP, Hon. Karobia serves in the Committee of agriculture, tourism, and natural resources, whilst chairing the sub-committee on natural resources. Furthermore, he is in the Committee of General-purpose encompassing health, education, youth, sports, finance, and budget. Hon. Karobia is the Chief Whip of the Kenyan Delegation in EALA. He is a strong advocate of youth participation in EAC matters, climate change, food security, cybersecurity, mental health, and drug abuse. His areas of interest are inter alia peace and security, governance, and youth development.</p>
                </div>
            </div>
        </div>
    )
}

export default TheTeam
