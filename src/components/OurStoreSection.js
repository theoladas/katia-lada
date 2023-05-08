import { Paragraph } from "../components/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const OurStoreSection = () => {
  const { t, i18 } = useTranslation();

  return (
    <section className="hero-section our-store ">
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

      <div className="our-store-content">
        <div className="main-title">{t("oXorosMas")}</div>
        <Paragraph>
          <p className="address-container">
            <FontAwesomeIcon icon={faHouse} className="address-icon" />
            {t("dieuthinsi")}
          </p>
        </Paragraph>
        <h2 className="opening-hours-title">{t("oresLitourgias")}</h2>
        <div className="flex-open-store">
          <div className="open-days">
            <p>{t("deutera")}</p>
            <p>{t("triti")}</p>
            <p>{t("tetarti")}</p>
            <p>{t("pempti")}</p>
            <p>{t("paraskeui")}</p>
            <p>{t("sabato")}</p>
            <p>{t("kiriaki")}</p>
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
            <p>{t("kleista")}</p>
            <p>{t("kleista")}</p>
          </div>
        </div>

        <div className="primary-btn-container">
          <a href="" className="primary-btn">
            {t("perisotera")}
          </a>
        </div>
      </div>
    </section>
  );
};
