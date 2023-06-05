import "../styles/Footer.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import attributesData from "../resources/attributes-data.json";
import attributesData2 from "../resources/attributes2-data.json";
import { useTranslation } from "react-i18next";

const FlexStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

const FooterColumns = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FooterLinkNoClickable = styled.span`
  color: #fff;
  &:hover {
    color: #fff;
  }
`;

const FooterCard = styled.div`
  flex-basis: 27%;
  display: block;
  height: 300px;
  padding: 1rem;
  @media (max-width: 1070px) {
    flex-basis: 30%;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    padding: 0.5rem;
    height: auto;
  }
`;

const FooterCardAttribute = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

const FooterAttributeLi = styled.li`
  font-size: 0.45rem;
`;
const FooterAttributeLink = styled.a`
  font-size: 0.45rem;
`;
const FooterAttributeLiNoHover = styled.li`
  font-size: 0.45rem;
  pointer-events: none;
`;
const FooterLiNoHover = styled.li`
  pointer-events: none;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <FooterColumns>
        <FooterCard>
          <ul>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <a href="/">{t("oXorosMas")}</a>
            </li>
            <li>
              <FlexStyled>
                <li>
                  <a
                    href="https://www.instagram.com/katia_lada"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("akolouthisteMas")}
                  </a>
                </li>
                <a
                  href="https://www.instagram.com/katia_lada"
                  target="_blank"
                  rel="noreferrer"
                  className="icon footer-icon"
                >
                  <FaInstagram />
                </a>
              </FlexStyled>
            </li>
          </ul>
        </FooterCard>
        <FooterCard>
          <ul>
            <FooterLiNoHover>{t("ipiresies")}</FooterLiNoHover>
            <hr></hr>
            <li>
              <Link to="/manicure-pedicure">{t("manikiour")}</Link>
            </li>
            <li>
              <Link to="/make-up">{t("makigiaz")}</Link>
            </li>
            <li>
              <Link to="/waxing">{t("apotrixosi")}</Link>
            </li>
            <li>
              <a href="/facial">{t("peripoihshProsopou")}</a>
            </li>
            <li>
              <Link to="/lashlift">{t("lashlift")}</Link>
            </li>
          </ul>
        </FooterCard>
        <FooterCard>
          <ul>
            <li>
              <Link to="/contact">{t("epikoinonia")}</Link>
            </li>
            <hr></hr>
            <li class="footer-address">
              <FontAwesomeIcon icon={faHouse} className="footer-icon" />
              <FooterLinkNoClickable>{t("dieuthinsi")}</FooterLinkNoClickable>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <a href="tel:+3002374082034">23740 82034</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <a href="mailto:lada.katia@gmail.com">lada.katia@gmail.com</a>
            </li>
            <li></li>
            <FooterAttributeLiNoHover>
              Attribute for the images
            </FooterAttributeLiNoHover>
            <hr></hr>
          </ul>
          <FooterCardAttribute>
            {attributesData.map((attribute, index) => (
              <FooterAttributeLi key={index}>
                <FooterAttributeLink href={attribute.href}>
                  {attribute.text}
                </FooterAttributeLink>{" "}
                {attribute.source}
              </FooterAttributeLi>
            ))}
          </FooterCardAttribute>
          <FooterCardAttribute>
            {attributesData2.map((attribute, index) => (
              <FooterAttributeLi key={index}>
                <FooterAttributeLink href={attribute.href}>
                  {attribute.text}
                </FooterAttributeLink>{" "}
                {attribute.source}
              </FooterAttributeLi>
            ))}
          </FooterCardAttribute>
        </FooterCard>
      </FooterColumns>
      <p>
        &#169; 2023 Κάτια Λαδά | Website:{" "}
        <a
          href="https://uk.linkedin.com/in/theodorosladas"
          target="_blank"
          rel="noreferrer"
          className="website-by"
        >
          Theo Ladas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
