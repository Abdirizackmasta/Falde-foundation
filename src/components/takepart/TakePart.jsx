import styles from './TakePart.module.css'
function Donate() {
    return (
        <div className={styles.donate_container}>
            <div className={styles.inner_container}>
                <div>
                    <p className={styles.top_p}>To make a <b>Cash Donation</b>, kindly Go to your Lipa Na M-pesa Menu and use the Pay Bill Number <b>247247</b> and Account Number <b>7887</b> and then Enter the Amount you wish to donate.</p>
                </div>
                <div className={styles.m_pesa}>
                    <p className={styles.first}>Donate to Falde Foundation via mpesa</p>
                    <p className={styles.second}>lipa na m-pesa</p>
                    <p className={styles.third}>paybill number</p>
                    <p className={styles.paybill}>247247</p>
                    <p className={styles.fourth}>account number</p>
                    <p className={styles.account}>7887</p>
                </div>
                <div className={styles.lower}>
                    <p>Your generous donations are not only a lifeline for the community, but also a bridge to an inclusive society that will soon be theirs to explore.</p>
                    <p>Thank you for your generous support.</p>
                </div>
            </div>
        </div>
    )
}

export default Donate