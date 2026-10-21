import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiTreeDoor, GiBookAura } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import PageHero from "../PageHero/PageHero";
import Reveal from "../Reveal";
import styles from "./LatestActivities.module.css";

const activities = [
  {
    to: "/madarasa",
    image: "/madarasa.jpg",
    Icon: GiBookAura,
    title: "Supporting education through the establishment of madarasa",
  },
  {
    to: "/enviromental",
    image: "/tree2.jpg",
    Icon: GiTreeDoor,
    title: "Contributing towards environmental conservation",
  },
  {
    to: "/inspiring",
    image: "/withschoolgirls.jpeg",
    Icon: IoIosPeople,
    title: "Mobilizing and inspiring the youth",
  },
  {
    to: "/feeding-the-community",
    image: "/momswithfood.jpeg",
    Icon: FaBowlFood,
    title: "Food donation to the underprivileged in society",
  },
];

function LatestActivities() {
  return (
    <>
      <PageHero
        image="/treeplanting.jpeg"
        eyebrow="Our activities"
        title="From free quality education to inspiring the youth"
        subtitle="Here are some of our latest activities in Garissa County — from conserving and protecting the environment, and much more."
        position="center 40%"
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          {activities.map(({ to, image, Icon, title }, i) => (
            <Reveal key={to} delay={(i % 2) * 0.1}>
              <Link to={to} className={styles.card}>
                <div className={styles.media}>
                  <img src={image} alt="" loading="lazy" />
                  <span className={styles.icon}>
                    <Icon aria-hidden="true" />
                  </span>
                </div>
                <div className={styles.body}>
                  <h2>{title}</h2>
                  <span className={styles.more}>
                    Read the story <FaArrowRightLong aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default LatestActivities;
