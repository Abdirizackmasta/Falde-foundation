import styles from './Environmental.module.css'

function Environmental() {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <p className={styles.latest}>latest stories</p>
                <h1>Falde Foundation: Advancing Environmental Conservation in Masalani</h1>
                <span className={styles.time}>22nd June 2024</span>
                <p className={styles.logo_p}>
                    <img src="./mainlogo.jpg" alt="" />
                    <span>Falde Foundation</span>
                </p>
            </div>
            <div className={styles.lower}>
                <img src="./treeplanting.jpeg" alt="madarsa" />
                <p>
                   At Falde Foundation, our dedication to fostering positive change extends to addressing one of the most critical challenges of our time—environmental conservation. In Masalani town, where natural beauty and resources are integral to the community's livelihood, we are committed to protecting and preserving the environment for future generations.
                    <br /> <br/>
                    In line with this mission, we have initiated impactful programs to combat deforestation, promote tree planting, and educate the community on sustainable environmental practices. Through our tree-planting campaigns, we have planted hundreds of trees in schools, public spaces, and arid lands, helping to restore degraded ecosystems and mitigate the effects of climate change.
                    <br /> <br/>
                    Moreover, we actively engage with local residents, including youth and women, in workshops that emphasize the importance of waste management, recycling, and the responsible use of natural resources. By empowering the community with knowledge and tools, we are fostering a culture of stewardship and shared responsibility for the environment.
                    <br /> <br/>
                    The overwhelming support from the residents of Masalani has been both inspiring and motivating. Their enthusiasm and willingness to participate in these initiatives reaffirm our belief in the power of collective action to make a lasting impact.
                    <br /> <br/>
                    Together, we are not just conserving the environment—we are cultivating a future of sustainability, resilience, and harmony with nature. At Falde Foundation, we remain steadfast in our commitment to building a greener and healthier Masalani.
                    <br /> <br/>
                    🌱 Let’s nurture our planet, one tree at a time! 🌱
                    <br /> <br/>
                    #FaldeFoundation #EnvironmentalConservation #TreePlanting #Sustainability #ClimateAction
                </p>
            </div>
        </div>
    )
}

export default Environmental
