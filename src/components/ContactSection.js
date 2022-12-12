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
        </Paragraph>
        <Paragraph>
          Αν επιθυμείτε να κλείσετε ραντεβού, μπορείτε να μας καλέσετε{" "}
          <a href="tel:+302374082034" className="call-us-link">
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
        <form action="">
          <label htmlFor="">Ονοματεπώνυμο:</label>
          <input type="text" />
          <label htmlFor="">Email:</label>
          <input type="email" />
          <label htmlFor="">Μήνυμα:</label>
          <textarea rows="4" cols="20" />
          <button type="submit" className="form-btn">
            Στείλτε Μήνυμα
          </button>
        </form>
      </div>
    </section>
  );
};
