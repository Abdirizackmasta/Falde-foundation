import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaPeaceSolid } from "react-icons/lia";
import { FaGraduationCap } from "react-icons/fa";
import { TbTrees } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { HiOfficeBuilding } from "react-icons/hi";
import styles from "./Whatwedo.module.css";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { motion } from 'framer-motion'; 



const focusArea = [
  {
    head: "Champion peace and cohesion",
    description:
      "We foster unity, social cohesion, and conflict resolution to build a peaceful nation.",
    icon: <LiaPeaceSolid />,
  },
  {
    head: "Environment Conservation",
    description:
      "We Implement initiatives that protect and preserve the environment, promote sustainable practices.",
    icon: <TbTrees />,
  },
  {
    head: "Champion Access to Education",
    description:
      "We Improve access to quality education for underprivileged children and marginalized communities.",
    icon: <FaGraduationCap />,
  },
  {
    head: "Advocate for Youth Development",
    description:
      "We Empower the youth with skills, opportunities, and platforms for personal and professional growth.",
    icon: <BsPeopleFill />,
  },
  {
    head: "Promote Good Governance and Accountable Public Policy",
    description:
      "We advocate for transparent governance, accountable leadership, and policies that promote social equity and justice.",
    icon: <HiOfficeBuilding />,
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.whatwedo} id="areaoffocus">
      <div className={styles.left}>
        <motion.p variants={fadeIn("left", "tween", 0.4, 1)} className={styles.first_p}>What We Do</motion.p>
        <motion.h1 variants={fadeIn("right", "tween", 0.9, 1)}>Our Focus Area</motion.h1>
        <motion.p variants={fadeIn("left", "tween", 0.4, 1)} className={styles.second_p}>
          Falde Foundation focuses on environmental conservation, education
          access, youth development, good governance, and peace promotion
        </motion.p>
      </div>
      <div className={styles.right}>
        <motion.h1 variants={fadeIn("right", "tween", 0.9, 1)}>{currentFocusArea.head}</motion.h1>
        <motion.p variants={fadeIn("left", "tween", 0.4, 1)}>{currentFocusArea.description}</motion.p>
        <motion.i variants={fadeIn("right", "tween", 0.9, 1)}>{currentFocusArea.icon}</motion.i>
        <IoIosArrowBack onClick={goToPreviousHero} className={styles.left_icon} />
        <IoIosArrowForward onClick={goToNextHero} className={styles.right_icon} />
      </div>
    </motion.div>
  );
}

export default Whatwedo;
