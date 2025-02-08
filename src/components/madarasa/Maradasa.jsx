import styles from './Madarasa.module.css'

function Maradasa() {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <p className={styles.latest}>latest stories</p>
                <h1>Empowering the Community Through Education: Falde Foundation’s Dedication to Learning and Growth</h1>
                <span className={styles.time}>1st February 2025</span>
                <p className={styles.logo_p}>
                    <img src="./mainlogo.jpg" alt="" />
                    <span>Falde Foundation</span>
                </p>
            </div>
            <div className={styles.lower}>
                <img src="./madrasaa.jpg" alt="madarsa" />
                <p>
                    At Falde Foundation, we take immense pride in our unwavering commitment to fostering meaningful change in Masalani town by championing Islamic education as a pillar of empowerment and community development. Education is not just about knowledge—it is a tool for transformation, a beacon of hope, and a path to a brighter future.
                    <br /><br />
                    With deep humility and a profound sense of responsibility, we are honored to announce the establishment of a Madrasa dedicated to nurturing the spiritual, moral, and intellectual growth of women and young children. This institution will provide profound Islamic knowledge, ethical values, and a strong foundation for lifelong learning.
                    <br /><br />
                    Beyond this, we have also taken concrete steps to enhance literacy and educational access by providing essential reading materials to ensure that no child or community member is left behind. Education is a fundamental right, and we strive to make it accessible to all, regardless of background or circumstance.
                    <br /><br />
                    The heartfelt gratitude, encouragement, and unwavering support from the residents of Masalani have been truly inspiring. Their enthusiasm reinforces our belief in this noble mission and strengthens our commitment to expanding educational opportunities within the community.
                    <br /><br />
                    Together, we are not just building a Madrasa—we are cultivating a future enriched with faith, wisdom, and knowledge. Through collective effort and shared vision, we can empower generations, uplift communities, and inspire positive change.
                    <br /><br />
                    🌿 Join us in this journey of transformation! 🌿
                    <br /><br />
                    #FaldeFoundation #EmpoweringCommunities #EducationForAll #FaithAndKnowledge
                </p>
            </div>
        </div>
    )
}

export default Maradasa
