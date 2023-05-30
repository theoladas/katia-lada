import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-card">
          <ul>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <a href="/">{t("oXorosMas")}</a>
            </li>
            <li>
              <div className="flex">
                <li>
                  <a
                    href="https://www.instagram.com/katia_lada"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("akolouthisteMas")}
                  </a>
                </li>
                <a
                  href="https://www.instagram.com/katia_lada"
                  target="_blank"
                  rel="noreferrer"
                  className="icon footer-icon"
                >
                  <FaInstagram />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-card">
          <ul>
            <li className="no-hover">{t("ipiresies")}</li>
            <hr></hr>
            <li>
              <Link to="/manicure-pedicure">{t("manikiour")}</Link>
            </li>
            <li>
              <Link to="/make-up">{t("makigiaz")}</Link>
            </li>
            <li>
              <Link to="/waxing">{t("apotrixosi")}</Link>
            </li>
            <li>
              <a href="/facial">{t("peripoihshProsopou")}</a>
            </li>
            <li>
              <Link to="/lashlift">{t("lashlift")}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-card">
          <ul>
            <li>
              <Link to="/contact">{t("epikoinonia")}</Link>
            </li>
            <hr></hr>
            <li class="footer-address">
              <FontAwesomeIcon icon={faHouse} className="footer-icon" />
              <span class="footer-link-no-clickable">{t("dieuthinsi")}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <a href="tel:+3002374082034">23740 82034</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <a href="mailto:lada.katia@gmail.com">lada.katia@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <p>
        &#169; 2023 Κάτια Λαδά | Website:{" "}
        <a
          href="https://uk.linkedin.com/in/theodorosladas"
          target="_blank"
          rel="noreferrer"
          className="website-by"
        >
          Theo Ladas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
