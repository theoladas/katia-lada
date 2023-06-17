import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Tabs from "../components/Tabs.js";
import {
  PageTitle,
  HeroContent,
  FlexRowHeroContainer,
} from "../components/GlobalStyle.js";
import { PageStyled } from "./Facial.js";
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
      image: "/img/waxing.jpg",
    },
    {
      id: 2,
      title: t("apotrixosiXerion"),
      description: t("apotrixosiXerionPerigrafi"),
      image: "/img/waxing-arms.webp",
    },
    {
      id: 3,
      title: t("apotrixosiMpikini"),
      description: t("apotrixosiMpikiniPerigrafi"),
      image: "/img/waxing-bikini.jpg",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  const selectedTabData = tabData.find((tab) => tab.id === selectedTab);
  const backgroundImage = selectedTabData ? selectedTabData.image : waxing;
  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <PageStyled backgroundImage={backgroundImage}>
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
            <Tabs tabs={tabData} onTabChange={handleTabChange} />
          </motion.div>
        </HeroContent>
      </FlexRowHeroContainer>
    </PageStyled>
  );
};

export default Waxing;
