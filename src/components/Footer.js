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
            {/* <li className="no-hover attribute">Attribute for the images</li>
            <hr></hr>
            <li className="attribute">
              <a
                href="https://www.freepik.com/free-photo/pink-nail-design-female-hands-with-glitter-manicure_9129245.htm#page=4&query=pedicure&position=42&from_view=search&track=sph"
                className="attribute"
              >
                Image by devmaryna
              </a>{" "}
              on Freepik
            </li>
            <li className="attribute">
              <a
                href="https://www.freepik.com/free-photo/high-fashion-look-glamor-sexy-sunbathed-model-girl-white-lingerie-bikini-colorful-sunhat-blue-beach-ocean-water_6529436.htm#page=7&query=bikini&position=11&from_view=search&track=sph"
                className="attribute"
              >
                Image by halayalex
              </a>{" "}
              on Freepik
            </li> */}
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
        <div className="footer-card ">
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
            <li></li>

            <li className="no-hover attribute">Attribute for the images</li>
            <hr></hr>
          </ul>
          <ul className="footer-card-attribute">
            <li className="attribute">
              <a
                href="https://www.freepik.com/free-photo/pink-nail-design-female-hands-with-glitter-manicure_9129245.htm#page=4&query=pedicure&position=42&from_view=search&track=sph"
                className="attribute"
              >
                Image by devmaryna
              </a>{" "}
              on Freepik
            </li>

            <li className="attribute">
              <a
                href="https://www.freepik.com/free-photo/high-fashion-look-glamor-sexy-sunbathed-model-girl-white-lingerie-bikini-colorful-sunhat-blue-beach-ocean-water_6529436.htm#page=7&query=bikini&position=11&from_view=search&track=sph"
                className="attribute"
              >
                Image by halayalex
              </a>{" "}
              on Freepik
            </li>
            <li className="attribute">
              Image by{" "}
              <a
                href="https://www.freepik.com/free-photo/beautician-with-female-client-salon-face-care-routine_12780848.htm#query=facial%20treatment&position=7&from_view=keyword&track=ais"
                className="attribute"
              >
                Freepik
              </a>
            </li>
            <li className="attribute">
              <a
                href="https://www.freepik.com/free-photo/beautiful-woman-portrait-doing-make-up_8300925.htm#query=maquillage&position=0&from_view=search&track=sph"
                className="attribute"
              >
                Image by Racool_studio
              </a>{" "}
              on Freepik
            </li>
            <li className="attribute">
              <a
                href="https://www.freepik.com/free-photo/beautiful-bride-with-white-dress_7220749.htm#query=bride%20makeup&position=45&from_view=search&track=ais"
                className="attribute"
              >
                Image by Racool_studio
              </a>{" "}
              on Freepik
            </li>
          </ul>
          <ul className="footer-card-attribute">
            <li className="attribute">
              <a
                href="https://www.freepik.com/free-photo/beautiful-slender-female-legs-photo-grey-background_10872212.htm#page=2&query=waxing%20legs&position=49&from_view=search&track=ais"
                className="attribute"
              >
                Image by valuavitaly
              </a>{" "}
              on Freepik
            </li>
            <li className="attribute"></li>
            <li className="attribute"></li>
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
