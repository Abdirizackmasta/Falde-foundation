import styles from './Inspiring.module.css';

function Inspiring() {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <p className={styles.latest}>latest stories</p>
                <h1>Falde Foundation: Mobilizing and Inspiring the Youth in Masalani</h1>
                <span className={styles.time}>28st August 2024</span>
                <p className={styles.logo_p}>
                    <img src="./mainlogo.jpg" alt="" />
                    <span>Falde Foundation</span>
                </p>
            </div>
            <div className={styles.lower}>
                <img src="./withschoolgirls.jpeg" alt="madarsa" />
                <p>
                   At Falde Foundation, we recognize that the youth are the driving force behind the future of Masalani town. With their energy, creativity, and potential, they hold the key to unlocking sustainable progress and meaningful change. Our mission is to empower, inspire, and mobilize young people to become proactive leaders and contributors to their community.
                    <br /> <br />
                    Through various youth-centered initiatives, we have established programs aimed at skills development, mentorship, and community engagement. Our mentorship workshops bring together accomplished professionals and local youth, providing guidance, motivation, and practical knowledge on how to navigate the challenges of modern society.
                    <br /> <br />
                    We have also organized sports tournaments, arts and cultural events, and community clean-up drives, encouraging teamwork, creativity, and a sense of responsibility among the youth. By creating these platforms, we not only nurture their talents but also foster a spirit of unity and collaboration.
                    <br /> <br />
                    Additionally, we are proud to offer entrepreneurship training, equipping young people with the skills to innovate, start small businesses, and create opportunities that uplift their peers. Our goal is to help them turn their ideas into impactful solutions that benefit the entire region.
                    <br /> <br />
                    The unwavering enthusiasm of the youth in Masalani has been nothing short of inspiring. Their dedication and passion reaffirm our belief in the power of collective action and the importance of nurturing the next generation.
                    <br /> <br />
                    At Falde Foundation, we are committed to building a future where the youth are empowered to lead with courage, vision, and purpose. Together, we are shaping a brighter tomorrow for Masalani.
                    <br /> <br />
                    #FaldeFoundation #YouthEmpowerment #InspiringYouth #MasalaniRising #LeadershipForTomorrow
                </p>
            </div>
        </div>
    )
}

export default Inspiring
