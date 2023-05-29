import React, { useState } from "react";
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
import facial from "../img/facial.jpg";

const Facial = () => {
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
    threshold: 0.1,
  });

  const tabData = [
    {
      id: 1,
      title: "Standard",
      description: t("peripoihshProsopouStandard"),
      image: "/img/facial.jpg",
    },
    {
      id: 2,
      title: "Luxury",
      description: t("peripoihshProsopouLuxury"),
      image: "/img/facial-luxury.jpg",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  const selectedTabData = tabData.find((tab) => tab.id === selectedTab);
  const backgroundImage = selectedTabData ? selectedTabData.image : facial;
  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };
  return (
    <Page
      className="homepage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
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
          {t("peripoihshProsopou")}
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
    </Page>
  );
};

export default Facial;
