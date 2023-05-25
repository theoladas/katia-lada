import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Tabs from "../components/Tabs.js";
import {
  Page,
  PageTitle,
  FlexRowHeroContainer,
} from "../components/GlobalStyle.js";
import Accordion from "../components/Accordion.js";
import lashlift from "../img/lashlift.jpg";

const Lashlift = () => {
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
      title: "Lashlift",
      description: t("lashliftPerigrafi"),
      image: "/img/lashlift.jpg",
    },
    {
      id: 2,
      title: t("lashBrow"),
      description: t("lashBrowPerigrafi"),
      image: "/img/waxing-arms.webp",
    },
    {
      id: 3,
      title: "",
      description: "",
      image: "/img/waxing-bikini.jpg",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  const selectedTabData = tabData.find((tab) => tab.id === selectedTab);
  const backgroundImage = selectedTabData ? selectedTabData.image : lashlift;
  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <Page
      className="homepage"
      style={{
        backgroundImage: `url(${lashlift})`,
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
          {t("lashlift")}
        </PageTitle>
      </motion.div>

      <FlexRowHeroContainer>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={riseIn}
          ref={ref}
        >
          {/* <Tabs tabs={tabData} onTabChange={handleTabChange} /> */}
          <Accordion data={tabData} />
        </motion.div>
      </FlexRowHeroContainer>
    </Page>
  );
};

export default Lashlift;
