import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Paragraph, CTACall, Flex } from "../components/GlobalStyle.js";
import { PrimaryBtn } from "../components/PrimaryBtn.js";
import { ServicesSection } from "../components/ServicesSection.js";
import { GallerySection } from "../components/GallerySection.js";
import { OurStoreSection } from "../components/OurStoreSection.js";
import { ContactSection } from "../components/ContactSection";
import facial from "../img/icons/facial-200.png";
import makeup from "../img/icons/makeup-200.png";
import lashlift from "../img/icons/lashlift-200.png";
import nails from "../img/icons/nails-200.png";
import waxing from "../img/icons/waxing-200.png";
import homepageBanner from "../img/homepage-banner.png";
import katiaLogo from "../img/katia-lada-text.png";

const Homepage = () => {
  const { t, i18n } = useTranslation();

  const [servicesInView, setServicesInView] = useState(false);
  const [galleryInView, setGalleryInView] = useState(false);
  const [ourStoreInView, setOurStoreInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  const dropIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const riseIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const servicesVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const cards = [
    { image: nails, text: "peripoihshAkron" },
    { image: makeup, text: "makigiaz" },
    { image: waxing, text: "apotrixosi" },
    { image: facial, text: "peripoihshProsopou" },
    { image: lashlift, text: "lashlift" },
  ];

  return (
    <main>
      <Flex
        className="homepage"
        style={{
          backgroundImage: `url(${homepageBanner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-image"></div>
        <motion.div
          className="hero-image"
          initial="hidden"
          animate="visible"
        ></motion.div>
        <div className="hero-content">
          <motion.div
            className="main-title"
            initial="hidden"
            animate="visible"
            variants={dropIn}
            custom={1}
          >
            {t("institutoAisthitikis")}
          </motion.div>
          <motion.img
            src={katiaLogo}
            className="katia-logo-text"
            initial="hidden"
            animate="visible"
            variants={dropIn}
            custom={2}
          ></motion.img>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={dropIn}
            custom={3}
          >
            <Paragraph>{t("professionalServices")}</Paragraph>
            <Paragraph>
              {t("forAppointments")}{" "}
              <CTACall href="tel:+302374082034">23740 82034</CTACall>,{" "}
              {t("workingHours")}
            </Paragraph>
            <Paragraph>
              <strong>{t("monFri")}</strong>: {t("morningHours")}{" "}
              <strong>&</strong> {t("eveningHours")}
            </Paragraph>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={riseIn}
            custom={4}
          >
            <PrimaryBtn />
          </motion.div>
        </div>
      </Flex>
      <InView
        as="div"
        threshold={0.1}
        onChange={(inView) => setServicesInView(inView)}
      >
        <div className="services-wrapper">
          <ServicesSection cards={cards} servicesInView={servicesInView} />
        </div>
      </InView>
      <InView
        as="div"
        threshold={0.1}
        onChange={(inView) => setGalleryInView(inView)}
      >
        <motion.div
          initial={galleryInView ? "visible" : "hidden"}
          animate={galleryInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <GallerySection />
        </motion.div>
      </InView>{" "}
      <InView
        as="div"
        threshold={0.1}
        onChange={(inView) => setOurStoreInView(inView)}
      >
        <motion.div
          initial={ourStoreInView ? "visible" : "hidden"}
          animate={ourStoreInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <OurStoreSection />
        </motion.div>
      </InView>
      <InView
        as="div"
        threshold={0.1}
        onChange={(inView) => setContactInView(inView)}
      >
        <motion.div
          initial={contactInView ? "visible" : "hidden"}
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <ContactSection />
        </motion.div>
      </InView>
    </main>
  );
};

export default Homepage;
