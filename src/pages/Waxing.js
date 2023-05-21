import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Tabs from "../components/Tabs.js";
import {
  Page,
  PageTitle,
  HeroContent,
  FlexRowHeroContainer,
} from "../components/GlobalStyle.js";
import waxing from "../img/waxing.jpg";

const Waxing = () => {
  const { t } = useTranslation();
  const dropIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const riseIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers
  });

  const tabData = [
    {
      id: 1,
      title: t("apotrixosiPodion"),
      description: t("apotrixosiPodionPerigrafi"),
    },
    {
      id: 2,
      title: t("apotrixosiXerion"),
      description: t("apotrixosiXerionPerigrafi"),
    },
    {
      id: 3,
      title: t("apotrixosiMpikini"),
      description: t("apotrixosiMpikiniPerigrafi"),
    },
  ];

  return (
    <Page
      className="homepage"
      style={{
        backgroundImage: `url(${waxing})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={dropIn}
        ref={ref}
      >
        <PageTitle className="main-title gallery-title">
          {t("apotrixosi")}
        </PageTitle>
      </motion.div>

      <FlexRowHeroContainer>
        <HeroContent>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={riseIn}
            ref={ref}
          >
            <Tabs tabs={tabData} />
          </motion.div>
        </HeroContent>
      </FlexRowHeroContainer>
    </Page>
  );
};

export default Waxing;
