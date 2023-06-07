import {
  HeroSection,
  HeroTitle,
  HeroTitleSecondary,
  Paragraph,
  PrimaryButtonContainer,
  PrimaryButton,
} from "../components/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styled from "styled-components";

const AddressContainer = styled(motion.div)`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AddressIcon = styled(FontAwesomeIcon)`
  color: var(--color-pink);
  padding-right: 10px;
`;

const MapContainer = styled(motion.div)`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  iframe {
    width: 90%;
    border: 0;
    border-radius: 20px;
    @media (max-width: 768px) {
      width: 100%;
      padding-bottom: 1rem;
    }
  }
`;

const OurStoreSectionStyled = styled(HeroSection)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: var(--color-white);
`;

const OurStoreContent = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0rem;
  }
`;

const OpenStoreContainer = styled.div`
  display: flex;
  gap: 1.4rem;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    gap: 10px;
  }
`;

const OpenStoreDays = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 27px;
  @media screen and (max-width: 849px) {
    font-size: 0.97rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

const OpenStoreHours = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 27px;
  color: var(--color-pink);
  span {
    color: var(--color-text);
  }
  @media screen and (max-width: 849px) {
    font-size: 0.97rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

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
    <OurStoreSectionStyled>
      {animate && (
        <>
          <MapContainer initial="hidden" animate="visible" variants={fadeIn}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1769.487232705234!2d23.3960987!3d40.132723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a881778cf28ea5%3A0xdcf47ad774598ca3!2zzprOkc6kzpnOkSDOm86RzpTOkQ!5e1!3m2!1sen!2suk!4v1670526803894!5m2!1sen!2suk"
              width="500"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Katia Lada map"
            ></iframe>
          </MapContainer>
          <OurStoreContent>
            <HeroTitle initial="hidden" animate="visible" variants={fromTop}>
              {t("oXorosMas")}
            </HeroTitle>
            <Paragraph>
              <AddressContainer
                initial="hidden"
                animate="visible"
                variants={fromTop}
              >
                <AddressIcon icon={faHouse} />
                {t("dieuthinsi")}
              </AddressContainer>
            </Paragraph>
            <HeroTitleSecondary
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {t("oresLitourgias")}
            </HeroTitleSecondary>
            <OpenStoreContainer>
              <OpenStoreDays
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
              </OpenStoreDays>
              <OpenStoreHours
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
              </OpenStoreHours>
            </OpenStoreContainer>
            <PrimaryButtonContainer
              initial="hidden"
              animate="visible"
              variants={fromBottom}
            >
              <PrimaryButton to="/contact">{t("perisotera")}</PrimaryButton>
            </PrimaryButtonContainer>
          </OurStoreContent>
        </>
      )}
    </OurStoreSectionStyled>
  );
};
