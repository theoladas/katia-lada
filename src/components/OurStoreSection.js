import { Flex, Paragraph } from "../components/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const OurStoreSection = () => {
  return (
    <Flex className="hero-section ">
      <div className="map-container">
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

      <div className=" our-store-content">
        <div className="main-title">Ο Χώρος μας</div>
        <Paragraph>
          <p>
            <FontAwesomeIcon icon={faHouse} className="address-icon" />
            Σμύρνης & 28ης Οκτωβρίου, Νεα Φώκαια, Χαλκιδική, Τ.Κ. 63077
          </p>
        </Paragraph>
        <h2 className="opening-hours-title">Ώρες Λειτουργίας:</h2>
        <div className="flex-open-store">
          <div className="open-days">
            <p>Δευτέρα</p>
            <p>Τρίτη</p>
            <p>Τετάρτη</p>
            <p>Πέμπτη</p>
            <p>Παρασκευή</p>
            <p>Σάββατο</p>
            <p>Κυριακή</p>
          </div>
          <div className="open-hours">
            <p>
              09:00 - 13:00 <span>| </span>17:00 - 19:00
            </p>
            <p>
              09:00 - 13:00 <span>| </span>17:00 - 19:00
            </p>
            <p>
              09:00 - 13:00 <span>| </span>17:00 - 19:00
            </p>
            <p>
              09:00 - 13:00 <span>| </span>17:00 - 19:00
            </p>
            <p>
              09:00 - 13:00 <span>| </span>17:00 - 19:00
            </p>
            <p>Κλειστά</p>
            <p>Κλειστά</p>
          </div>
        </div>

        <div className="primary-btn-container">
          <a href="" className="primary-btn">
            Περισσότερα..
          </a>
        </div>
      </div>
    </Flex>
  );
};
