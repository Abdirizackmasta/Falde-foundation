import { useState } from 'react';
import styles from './Activities.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { motion } from 'framer-motion'; 

const ourActivities = [
    {
        heading: 'Food Donation to homes in Kenya',
        details: 'reaching to to vulnerable and needy homes to enhance food security',
        image: '/momswithfood.jpeg',
        button: 'view more details'

    },
    {
        heading: 'Planting trees at Masalani in Ijara constituency',
        details: 'contributing towards Environmental Conservation in the Region',
        image: '/treeplanting.jpeg',
        button: 'view more details'

    },
    {
        heading: 'Mobilizing and inspiring the Youth',
        details: 'Mobilizing and inspiring youth is essential for driving positive change and addressing various social, economic, and environmental challenges.',
        image: '/withschoolgirls.jpeg',
        button: 'view more details'

    },
    {
        heading: 'Giving Books to Schools',
        details: 'Donating books to schools as a way to support education and literacy',
        image: '/withschoolgirls.jpeg',
        button: 'view more details'
    }
];

function Activities() {
    const [showTheActivity, setTheShownActivity] = useState(0);
    const activity = ourActivities[showTheActivity];

    const goToPreviousHero = () => {
        setTheShownActivity((prevActivity) => (prevActivity === 0 ? ourActivities.length - 1 : prevActivity - 1));
    };

    const goToNextHero = () => {
        setTheShownActivity((prevActivity) => (prevActivity === ourActivities.length - 1 ? 0 : prevActivity + 1));
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={styles.activities}>
            <div className={styles.left}>
                <motion.p  variants={fadeIn("right", "tween", 0.9, 1)} className={styles.first_p}>Our task</motion.p>
                <motion.h1 variants={fadeIn("left", "tween", 0.4, 1)}>Some of impactful activities</motion.h1>
                <motion.p variants={fadeIn("right", "tween", 0.9, 1)} className={styles.second_p}>We’re working in partnership for results that last</motion.p>
            </div>
            <div className={styles.right}>
                <div>
                    <motion.h1 variants={fadeIn("left", "tween", 0.4, 1)}>{activity.heading}</motion.h1>
                    <motion.p variants={fadeIn("right", "tween", 0.9, 1)}>{activity.details}</motion.p>
                    <Link to='/latestactivities'><motion.button variants={fadeIn("right", "tween", 0.9, 1)}>{activity.button}</motion.button></Link>
                </div>
                <motion.img variants={slideIn("right", "tween", 0.5, 1.2)} src={activity.image} alt="" />
                <IoIosArrowBack onClick={goToPreviousHero} className={styles.left_icon} />
                <IoIosArrowForward onClick={goToNextHero} className={styles.right_icon} />
            </div>
        </motion.div>
    );
}

export default Activities;
