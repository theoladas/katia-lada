import "../styles/Footer.scss";
import katiaLogo from "../img/katia-lada-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "./GlobalStyle";

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
              <a href="">Επικοινωνία</a>
            </li>
            <hr></hr>
            <li>
              <FontAwesomeIcon icon={faHouse} className="footer-icon" />
              <a>
                Σμύρνης & 28ης Οκτωβρίου, <br></br>Νεα Φώκαια, Χαλκιδικής,
                <br></br>Τ.Κ. 63077
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <a href="">23740 82034</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <a href="">lada.katia@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
