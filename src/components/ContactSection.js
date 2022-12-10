import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Paragraph } from "./GlobalStyle";
import GlobalStyle from "./GlobalStyle";

export const ContactSection = () => {
  return (
    <section className="hero-section contact-section ">
      <div className="contact-content">
        <div className="main-title">Επικοινωνία</div>
        <Paragraph>
          Για πληροφορίες σχετικά με τις υπηρεσίες μας, παρακαλώ επικοινωνήστε
          μαζί μας.
          {/* <p className="address-container">
            <FontAwesomeIcon icon={faHouse} className="address-icon" />
            Σμύρνης & 28ης Οκτωβρίου, Νεα Φώκαια, Χαλκιδική, Τ.Κ. 63077
          </p> */}
        </Paragraph>
        <Paragraph>
          Αν επιθυμείτε να κλείσετε ραντεβού, μπορείτε να μας καλέσετε{" "}
          <a href="tel:+3002374082034" className="call-us-link">
            23740 82034
          </a>
          , στις ώρες λειτουργίας μας.
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
              <a class="footer-link-no-clickable">
                Σμύρνης & 28ης Οκτωβρίου, Νεα Φώκαια, Χαλκιδικής, Τ.Κ. 63077
              </a>
            </Paragraph>
          </ul>
        </div>

        <div className="primary-btn-container">
          <a href="" className="primary-btn">
            Περισσότερα..
          </a>
        </div>
      </div>
      <div className="form-container">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1769.487232705234!2d23.3960987!3d40.132723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a881778cf28ea5%3A0xdcf47ad774598ca3!2zzprOkc6kzpnOkSDOm86RzpTOkQ!5e1!3m2!1sen!2suk!4v1670526803894!5m2!1sen!2suk"
          //   width="600"
          width="500"
          //   height="450"
          height="450"
          style={{ border: 0, borderRadius: "20px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
