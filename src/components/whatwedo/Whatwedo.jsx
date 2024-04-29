import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdGirl } from "react-icons/md";
import { TbTrees } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { IoWoman } from "react-icons/io5";
import { MdSettingsVoice } from "react-icons/md";
import styles from "./Whatwedo.module.css";



const focusArea = [
  {
    head: "Empowering the girl child on various aspects of life",
    description:
      "Through comprehensive programs and initiatives, we provide invaluable resources, support, and education to help girls thrive and reach their full potential. From promoting access to quality education and healthcare to fostering leadership skills and advocating for gender equality, we are dedicated to equipping girls with the tools and opportunities they need to succeed.",
    icon: <MdGirl />,
  },
  {
    head: "Advocating and championing for peace, equality and environment conservation",
    description:
      "At our foundation, we are dedicated to advocating and championing crucial causes that shape a better world for all. With a firm commitment to promoting peace, fostering equality, and spearheading environmental conservation efforts, we strive to create lasting positive change",
    icon: <TbTrees />,
  },
  {
    head: "Advocating for opportunities for the vulnerable women in our society",
    description:
      "At our foundation, we passionately advocate for creating opportunities for vulnerable women in our society. With a steadfast commitment to equity and empowerment, we work tirelessly to address the unique challenges faced by women who are marginalized, disadvantaged, or facing hardship.",
    icon: <IoWoman />,
  },
  {
    head: "Championing for growth and development of the youth.",
    description:
      "We believe that investing in the next generation is essential for building a brighter future. Through mentorship programs, educational initiatives, and skills development workshops, we empower young people to unlock their full potential and become leaders in their communities.",
    icon: <BsPeopleFill />,
  },
  {
    head: "Working to ensure that the voices of all groups of society are heard.",
    description:
      "At our foundation, we are dedicated to ensuring that the voices of all groups in society are heard and valued. We recognize the importance of inclusivity and diversity in shaping policies, decisions, and actions that affect our communities.",
    icon: <MdSettingsVoice />,
  },
];

function Whatwedo() {
  const [focusAreaIndex, setFocusAreaIndex] = useState(0);

  const goToPreviousHero = () => {
    setFocusAreaIndex((prevIndex) =>
      prevIndex === 0 ? focusArea.length - 1 : prevIndex - 1
    );
  };

  const goToNextHero = () => {
    setFocusAreaIndex((prevIndex) =>
      prevIndex === focusArea.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentFocusArea = focusArea[focusAreaIndex];

  return (
    <div className={styles.whatwedo} id="areaoffocus">
      <div className={styles.left}>
        <p className={styles.first_p}>What We Do</p>
        <h1>Our Focus Area</h1>
        <p className={styles.second_p}>Falde Foundation is dedicated to fostering positive change through a multifaceted approach focused on environmental conservation, access to education, youth development, good governance, and the promotion of peace. Our mission encompasses a wide range of initiatives aimed at creating a more sustainable and equitable world. From preserving natural resources and promoting eco-friendly practices to expanding educational opportunities and empowering youth to become leaders of tomorrow.</p>
      </div>
      <div className={styles.right}>
        <h1>{currentFocusArea.head}</h1>
        <p>{currentFocusArea.description}</p>
        <i>{currentFocusArea.icon}</i>
        <IoIosArrowBack onClick={goToPreviousHero} className={styles.left_icon} />
        <IoIosArrowForward onClick={goToNextHero} className={styles.right_icon} />
      </div>
    </div>
  );
}

export default Whatwedo;
