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
import makeup from "../img/makeup.jpg";

const MakeUp = () => {
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
      title: "Standard",
      description: t("makigiazPerigrafi"),
      image: "/img/makeup.jpg",
    },
    {
      id: 2,
      title: t("nifikoMakigiaz"),
      description: t("nigikoMakigiazPerigrafi"),
      image: "/img/makeup-bride.jpg",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  const selectedTabData = tabData.find((tab) => tab.id === selectedTab);
  const backgroundImage = selectedTabData ? selectedTabData.image : makeup;
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
          {t("makigiaz")}
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

export default MakeUp;
