import { Paragraph } from "../components/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const OurStoreSection = ({ animate }) => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const fromTop = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fromBottom = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="hero-section our-store">
      {animate && (
        <>
          <motion.div
            className="map-container"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1769.487232705234!2d23.3960987!3d40.132723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a881778cf28ea5%3A0xdcf47ad774598ca3!2zzprOkc6kzpnOkSDOm86RzpTOkQ!5e1!3m2!1sen!2suk!4v1670526803894!5m2!1sen!2suk"
              width="500"
              height="450"
              style={{ border: 0, borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Katia Lada map"
            ></iframe>
          </motion.div>

          <div className="our-store-content">
            <motion.div
              className="main-title"
              initial="hidden"
              animate="visible"
              variants={fromTop}
            >
              {t("oXorosMas")}
            </motion.div>
            <Paragraph>
              <motion.div
                className="address-container"
                initial="hidden"
                animate="visible"
                variants={fromTop}
              >
                <FontAwesomeIcon icon={faHouse} className="address-icon" />
                {t("dieuthinsi")}
              </motion.div>
            </Paragraph>
            <motion.h2
              className="opening-hours-title"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {t("oresLitourgias")}
            </motion.h2>
            <div className="flex-open-store">
              <motion.div
                className="open-days"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                {" "}
                <p>{t("deutera")}</p>
                <p>{t("triti")}</p>
                <p>{t("tetarti")}</p>
                <p>{t("pempti")}</p>
                <p>{t("paraskeui")}</p>
                <p>{t("sabato")}</p>
                <p>{t("kiriaki")}</p>
              </motion.div>
              <motion.div
                className="open-hours"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
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
              </motion.div>
            </div>

            <motion.div
              className="primary-btn-container"
              initial="hidden"
              animate="visible"
              variants={fromBottom}
            >
              <a href="/" className="primary-btn">
                {t("perisotera")}
              </a>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
};
