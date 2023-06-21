import React from "react";
import { HeroSection, HeroTitle } from "../components/GlobalStyle";
import { useTranslation } from "react-i18next";

const OurStore = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroTitle>{t("oXorosMas")}</HeroTitle>
    </HeroSection>
  );
};

export default OurStore;
