import { Flex, FlexCenter } from "./GlobalStyle";
import "../styles/ServicesSection.scss";
import facial from "../img/icons/facial-200.png";
import makeup from "../img/icons/makeup-200.png";
import lashlift from "../img/icons/lashlift-200.png";
import nails from "../img/icons/nails-200.png";
import waxing from "../img/icons/waxing-200.png";
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="half-container">
      <FlexCenter className="main-title">{t("ipiresies")} </FlexCenter>
      <div className="serviceSection">
        <FlexCenter>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={nails}></img>
              </div>
              <div>
                <p>{t("peripoihshAkron")}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={makeup}></img>
              </div>
              <p>{t("makigiaz")}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={waxing}></img>
              </div>
              <p>{t("apotrixosi")}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={facial}></img>
              <p>{t("peripoihshProsopou")}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={lashlift}></img>
              </div>
              <p>{t("lashlift")}</p>
            </div>
          </div>
        </FlexCenter>
      </div>
    </div>
  );
};
