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
import styled from "styled-components";
import manicure from "../img/manicure.jpg";

const PageStyled = styled(Page)`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Manicure = () => {
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
      title: t("manikiour"),
      description: t("manikiourPerigrafi"),
      image: "/img/manicure.jpg",
    },
    {
      id: 2,
      title: t("pentikiour"),
      description: t("pentikiourPerigrafi"),
      image: "/img/pedicure.jpg",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  const selectedTabData = tabData.find((tab) => tab.id === selectedTab);
  const backgroundImage = selectedTabData ? selectedTabData.image : manicure;
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
          {t("peripoihshAkron")}
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

export default Manicure;
