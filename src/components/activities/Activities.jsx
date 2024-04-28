import { useState } from 'react';
import styles from './Activities.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


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
        <div
            className={styles.activities}>
            <div className={styles.left}>
                <p   className={styles.first_p}>Our task</p>
                <h1 >Some of impactful activities</h1>
                <p  className={styles.second_p}>We’re working in partnership for results that last</p>
            </div>
            <div className={styles.right}>
                <div>
                    <h1>{activity.heading}</h1>
                    <p>{activity.details}</p>
                    <Link to='/latestactivities'><button>{activity.button}</button></Link>
                </div>
                <img src={activity.image} alt="" />
                <IoIosArrowBack onClick={goToPreviousHero} className={styles.left_icon} />
                <IoIosArrowForward onClick={goToNextHero} className={styles.right_icon} />
            </div>
        </div>
    );
}

export default Activities;
