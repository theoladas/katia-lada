import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import {
  Page,
  PageTitle,
  FlexRowHeroContainer,
} from "../components/GlobalStyle.js";
import Accordion from "../components/Accordion.js";
import lashlift from "../img/lashlift.jpg";
import styled from "styled-components";

const PageStyled = styled(Page)`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

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
    threshold: 0.1,
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
      image: "/img/lash-brow-tint.jpg",
    },
    {
      id: 3,
      title: t("browShape"),
      description: t("browShapePerigrafi"),
      image: "/img/brow-shape.jpg",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  const selectedTabData = tabData.find((tab) => tab.id === selectedTab);
  const backgroundImage = selectedTabData ? selectedTabData.image : lashlift;
  const handleTabChange = (tabId) => {
    setSelectedTab(tabId ? tabId : tabData[0].id);
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
          <Accordion data={tabData} onTabChange={handleTabChange} />
        </motion.div>
      </FlexRowHeroContainer>
    </PageStyled>
  );
};

export default Lashlift;
