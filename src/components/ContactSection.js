import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Paragraph } from "./GlobalStyle";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section contact-section ">
      <div className="contact-content">
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
              <a href="mailto:lada.katia@gmail.com" className="contact-links">
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
              <p class="footer-link-no-clickable">{t("dieuthinsi")}</p>
            </Paragraph>
          </ul>
        </div>

        <div className="primary-btn-container">
          <span href="" className="primary-btn">
            {t("perisotera")}
          </span>
        </div>
      </div>
      <div className="form-container">
        <form action="">
          <label htmlFor="">{t("onomateponimo")}</label>
          <input type="text" />
          <label htmlFor="">Email:</label>
          <input type="email" />
          <label htmlFor="">{t("minima")}</label>
          <textarea rows="4" cols="20" />
          <button type="submit" className="form-btn">
            {t("steilteMinima")}
          </button>
        </form>
      </div>
    </section>
  );
};
