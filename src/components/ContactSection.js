import { Paragraph } from "./GlobalStyle";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const ContactSection = ({ animate }) => {
  const { t } = useTranslation();

  const useFadeInAnimation = () => {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
    };
  };

  const fadeIn = useFadeInAnimation();

  return (
    <section className="hero-section contact-section ">
      {animate && (
        <>
          <motion.div
            className="contact-content"
            initial={{ x: -200 }}
            animate={{ x: 0, ...fadeIn.visible }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <div className="main-title">{t("epikoinonia")}</div>
            <Paragraph>{t("plirofories")}</Paragraph>
            <Paragraph>
              {t("forAppointments")}{" "}
              <a href="tel:+302374082034" className="call-us-link">
                23740 82034
              </a>
              {", "}
              {t("workingHoursContant")}
            </Paragraph>
            <div className="contact-details">
              <ul>
                <Paragraph>
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <a
                    href="mailto:lada.katia@gmail.com"
                    className="contact-links"
                  >
                    lada.katia@gmail.com
                  </a>
                </Paragraph>
                <Paragraph>
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <a href="tel:+3002374082034" className="contact-links">
                    23740 82034
                  </a>
                </Paragraph>
                <Paragraph>
                  <FontAwesomeIcon icon={faHouse} className="contact-icon" />
                  <span class="footer-link-no-clickable">
                    {t("dieuthinsi")}
                  </span>
                </Paragraph>
              </ul>
            </div>
            <div className="primary-btn-container">
              <a href="" className="primary-btn">
                {t("perisotera")}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="form-container"
            initial={{ x: 200 }}
            animate={{ x: 0, ...fadeIn.visible }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <form action="https://formspree.io/f/mrgvjnvg" method="POST">
              <label htmlFor="">{t("onomateponimo")}</label>
              <input type="text" name="name" required />
              <label htmlFor="">Email:</label>
              <input type="email" name="email" required />
              <label htmlFor="">{t("minima")}</label>
              <textarea rows="4" cols="20" name="message" required></textarea>
              <button type="submit" className="form-btn">
                {t("steilteMinima")}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </section>
  );
};
