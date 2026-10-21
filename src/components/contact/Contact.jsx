import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import PageHero from "../PageHero/PageHero";
import Reveal from "../Reveal";
import styles from "./Contact.module.css";

const EMAIL = "faldefoundation@gmail.com";

function Contact() {
  const [sent, setSent] = useState(false);

  // There is no backend, so the form opens the visitor's email app with the
  // message pre-filled and addressed to Falde Foundation.
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get("subject")} (from ${data.get("name")})`;
    const body = `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        image="/contactus.jpeg"
        eyebrow="Contact us"
        title="Let’s start a conversation"
        subtitle="Send us your questions about membership, partnerships, events and more."
      />

      <section className={`section ${styles.contact}`}>
        <div className={`container ${styles.grid}`}>
          <Reveal className={styles.info}>
            <p className="eyebrow">Get in touch</p>
            <h2>We’d love to hear from you</h2>
            <p className={styles.lead}>
              We are here to help and answer any question you might have. We
              look forward to hearing from you.
            </p>

            <ul className={styles.cards}>
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <span className={styles.icon}><MdEmail aria-hidden="true" /></span>
                  <span>
                    <small>Email</small>
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+254722778749">
                  <span className={styles.icon}><FaPhone aria-hidden="true" /></span>
                  <span>
                    <small>Phone</small>
                    +254 722 778749
                  </span>
                </a>
              </li>
              <li>
                <div>
                  <span className={styles.icon}><FaLocationDot aria-hidden="true" /></span>
                  <span>
                    <small>Headquarters</small>
                    Nairobi, Kenya
                  </span>
                </div>
              </li>
            </ul>

            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/share/6oyZhwnxSRCXcNpT/?mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
                aria-label="Falde Foundation on Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/falde_foundation/"
                target="_blank"
                rel="noreferrer"
                aria-label="Falde Foundation on Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </Reveal>

          <Reveal className={styles.formWrap} delay={0.1}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h3>Send us a message</h3>

              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />

              <label htmlFor="email">Your email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />

              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" required />

              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" rows="6" required />

              <button type="submit" className="btn btn-primary">
                Send message
              </button>
              <p className={styles.note} role="status">
                {sent
                  ? "Your email app should open with your message ready to send."
                  : "Sending opens your email app with the message ready to go."}
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;
