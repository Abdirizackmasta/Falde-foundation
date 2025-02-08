import styles from './Feeding.module.css';
function Feeding() {
    return (
       <div className={styles.container}>
            <div className={styles.upper}>
                <p className={styles.latest}>latest stories</p>
                <h1>Falde Foundation: Feeding the Community in Ijara Constituency</h1>
                <span className={styles.time}>21st November 2024</span>
                <p className={styles.logo_p}>
                    <img src="./mainlogo.jpg" alt="" />
                    <span>Falde Foundation</span>
                </p>
            </div>
            <div className={styles.lower}>
                <img src="./madrasaa.jpg" alt="madarsa" />
                <p>
                    At Falde Foundation, we believe that no one should go to bed hungry, and we are steadfast in our mission to provide food security to the residents of Masalani town. Hunger and malnutrition not only affect individual well-being but also hinder the growth and development of communities. With this in mind, we have launched initiatives to ensure that families in need have access to nutritious meals.
                    <br /><br />
                    Our feeding programs are designed to reach the most vulnerable members of the community, including children, the elderly, and low-income households. Through partnerships with local farmers, suppliers, and volunteers, we have distributed essential food supplies, including grains, fresh produce, and cooking essentials, to hundreds of families in Masalani.
                     <br /><br />
                    In addition to food distribution, we have organized community kitchens where residents can gather, share meals, and foster a spirit of togetherness. These kitchens also serve as platforms for educating the community about the importance of balanced nutrition and sustainable eating practices.
                     <br /><br />
                    To ensure long-term food security, we are also investing in sustainable agricultural practices. By providing farmers with training, tools, and resources, we aim to boost local food production and reduce dependency on external supplies. Our programs also encourage community members to establish home gardens, enabling them to grow their own fruits and vegetables.
                     <br /><br />
                    The gratitude and resilience of the people of Masalani inspire us to continue this noble cause. Their unwavering support fuels our commitment to building a future where hunger is no longer a barrier to success.
                     <br /><br />
                    At Falde Foundation, we are not just feeding the community; we are nurturing hope, dignity, and a sense of unity. Together, we are cultivating a brighter, healthier, and more prosperous Masalani.
                     <br /><br />
                    #FaldeFoundation #FeedingTheCommunity #FoodSecurity #MasalaniCares #SustainableFutures
                </p>
            </div>
        </div>
    )
}

export default Feeding
