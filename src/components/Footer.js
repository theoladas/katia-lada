import "../styles/Footer.scss";
import instagram from "../img/icons/instagram.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaFacebook } from "react-icons/fa";
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
              <a href="" className="footer-title">
                Gallery
              </a>
            </li>
            <li>
              <a href="" className="footer-title">
                Ο χώρος μας
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram className="icon" />
              </a>
              <a>
                <FaFacebook className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-card">
          <ul>
            <li>
              <a href="" className="footer-title">
                Υπηρεσίες
              </a>
            </li>
            <hr></hr>
            <li>
              <a href="">Περιποίηση Άκρων</a>
            </li>
            <li>
              <a href="">Μακιγιάζ</a>
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
              <a href="" className="footer-title">
                Επικοινωνία
              </a>
            </li>
            <hr></hr>
            <li class="footer-address">
              <FontAwesomeIcon icon={faHouse} className="footer-icon" />
              <a class="footer-address">
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
    </footer>
  );
};

export default Footer;
