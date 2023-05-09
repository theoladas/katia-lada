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
              <a href="/">Gallery</a>
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
            <li>
              <a href="/">{t("ipiresies")}</a>
            </li>
            <hr></hr>
            <li>
              <a href="/">{t("peripoihshAkron")}</a>
            </li>
            <li>
              <Link to="/make-up">{t("makigiaz")}</Link>
            </li>
            <li>
              <a href="/">{t("apotrixosi")}</a>
            </li>
            <li>
              <a href="/">{t("peripoihshProsopou")}</a>
            </li>
            <li>
              <a href="/">{t("lashlift")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-card">
          <ul>
            <li>
              <a href="/">{t("epikoinonia")}</a>
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
        &#169; 2022 Κάτια Λαδά | Website:{" "}
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
