import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import PageHero from "../PageHero/PageHero";
import Reveal from "../Reveal";
import styles from "./TakePart.module.css";

const steps = [
  "Open the Lipa na M-Pesa menu on your phone",
  "Choose Pay Bill and enter the business number 247247",
  "Enter account number 7887",
  "Enter the amount you wish to donate and confirm",
];

function TakePart() {
  return (
    <>
      <PageHero
        image="/hero3.jpeg"
        eyebrow="Get involved"
        title="Your gift changes lives"
        subtitle="Your generous donations are not only a lifeline for the community, but also a bridge to an inclusive society that will soon be theirs to explore."
        position="center 35%"
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <Reveal className={styles.steps}>
            <p className="eyebrow">Cash donation</p>
            <h2>How to donate with M-Pesa</h2>
            <ol>
              {steps.map((step, i) => (
                <li key={step}>
                  <span>{i + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className={styles.pay} delay={0.1}>
            <p className={styles.pay_label}>Donate to Falde Foundation via</p>
            <p className={styles.mpesa}>Lipa na M-Pesa</p>

            <div className={styles.numbers}>
              <div>
                <span>Paybill number</span>
                <strong>247247</strong>
              </div>
              <div>
                <span>Account number</span>
                <strong>7887</strong>
              </div>
            </div>

            <p className={styles.thanks}>
              <FaHeart aria-hidden="true" /> Thank you for your generous support.
            </p>
          </Reveal>
        </div>

        <div className={`container ${styles.more}`}>
          <p>Prefer to give your time or partner with us?</p>
          <Link to="/contact" className="btn btn-outline">Get in touch</Link>
        </div>
      </section>
    </>
  );
}

export default TakePart;
