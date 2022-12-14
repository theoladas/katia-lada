import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-card">
          <ul>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Ο χώρος μας</a>
            </li>
            <li>
              <div className="flex">
                <li>
                  <a
                    href="https://www.instagram.com/katia_lada"
                    target="_blank"
                  >
                    Ακολουθήστε μας
                  </a>
                </li>
                <a
                  href="https://www.instagram.com/katia_lada"
                  target="_blank"
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
              <a href="">Υπηρεσίες</a>
            </li>
            <hr></hr>
            <li>
              <a href="">Περιποίηση Άκρων</a>
            </li>
            <li>
              <Link to="/make-up">Μακιγιάζ</Link>
            </li>
            <li>
              <a href="">Αποτρίχωση</a>
            </li>
            <li>
              <a href="">Περιποίηση Προσώπου</a>
            </li>
            <li>
              <a href="">Τοποθέτηση Βλαφαρίδων Lashlift</a>
            </li>
          </ul>
        </div>
        <div className="footer-card">
          <ul>
            <li>
              <a href="">Επικοινωνία</a>
            </li>
            <hr></hr>
            <li class="footer-address">
              <FontAwesomeIcon icon={faHouse} className="footer-icon" />
              <a class="footer-link-no-clickable">
                Σμύρνης & 28ης Οκτωβρίου, Νεα Φώκαια, Χαλκιδικής, Τ.Κ. 63077
              </a>
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
          className="website-by"
        >
          Theo Ladas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
