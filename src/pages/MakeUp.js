import makeup from "../img/makeup.jpg";
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

  const useFadeInAnimation = () => {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
    };
  };

  const fadeIn = useFadeInAnimation();

  const tabData = [
    {
      id: 1,
      title: t("manikiour"),
      description:
        "This is the description for Tab 1.  \n\nThis is the description for Tab 1.This is the description for Tab 1. This is the description for Tab 1.\nThis is the description for Tab 1.\n\nThis is the description for Tab 1. ",
      image: "",
    },
    {
      id: 2,
      title: t("pentikiour"),
      description:
        "This is the description for Tab 2.  \n\nThis is the description for Tab 2.This is the description for Tab 2. This is the description for Tab 2.\nThis is the description for Tab 2.\n\nThis is the description for Tab 2.",
    },
  ];

  return (
    <Page
      className="homepage"
      style={{
        backgroundImage: `url(${makeup})`,
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
            <Tabs tabs={tabData} />
          </motion.div>
        </HeroContent>
      </FlexRowHeroContainer>
    </Page>
  );
};

export default MakeUp;
