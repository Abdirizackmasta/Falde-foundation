import styles from './About.module.css'
import { FaEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.div_1}>
                <h1>About <span>us</span></h1>
                <p>Falde Foundation inspires change so people and nature thrive</p>
            </div>
            <div className={styles.div_2}>
                <div className={styles.div2_details}>
                        <p>Rebuilding a Stable, Cohesive, and Resilient Nation</p>
                        <h1>Welcome</h1>
                        <p>Falde Foundation is a startup NGO dedicated to contributing towards rebuilding a stable, cohesive, and resilient nation. Our mission is to address critical challenges facing our society through targeted initiatives in environmental conservation, education, youth development, good governance, and peace promotion. This strategic plan outlines our vision, goals, objectives, and action plans for the next five years, focusing on making a positive impact in the communities we serve.</p>
                </div>
                <div className={styles.div2_img}>
                        <img src="./hero1.jpeg" alt="" />
                    </div>
                </div>
            <div className={styles.div_3}>
                <div>
                    <img src="./vission.jpeg" alt="" />
                    <FaEye className={styles.icon1} />
                    <span>
                        <h1>
                        Our Vision
                    </h1>
                    <p>We envision a world where every young person and woman has equal opportunities, access to education, and the ability to reach their full potential. Through our efforts, we aim to create a society that celebrates diversity, empowers individuals, and promotes gender equality.</p>
                    </span>
                    
                </div>
                <div>
                    <img src="./mission.jpeg" alt="" />
                    <FaBullseye className={styles.icon2} width={1000}/>
                    <span>
                    <h1>
                        Our Mission
                    </h1>
                    <p>FALDE is dedicated to empowering youth and women through comprehensive programs, resources, and support, fostering their personal and professional development for a brighter and more equitable future.</p>
                    </span>
                </div>
            </div>
            <div className={styles.fourth}>
                <p className={styles.fourth_firstp}>Our Strategies</p>
                <h1>How We Implement Our Programmes & Projects</h1>
                <ul>
                    <li>Establish project teams and assign responsibilities for each objective.</li>
                    <li>Set up a monitoring and evaluation framework to track progress and measure impact.</li>
                    <li>We seek collaborations and partnerships with government agencies, NGOs, and private sector organizations.</li>
                    <li>Secure funding through grants, donations, and fundraising events.</li>
                    <li>Conduct periodic reviews and adjust strategies as needed to stay relevant and responsive to emerging challenges.</li>
                </ul>
            </div>
        </div>
    )
}

export default About
