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

const FooterStyled = styled.footer`
  min-height: 40vh;
  background: #77787b;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;

const FooterColumns = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FooterParagraph = styled.p`
  color: #fff;
  letter-spacing: 1px;
  font-size: 0.6rem;
  padding: 0.5rem 0rem;
`;

const FooterWebsiteByLink = styled.a`
  font-size: 0.6rem;
  color: #fff;
  opacity: 0.8;
  transition: all 0.4s ease;
  &:hover {
    opacity: 1;
    color: #fff;
  }
`;

const FooterLinkNoClickable = styled.span`
  list-style: none;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: left;
  letter-spacing: 1.5px;
  color: #fff;
  padding: 0.5rem 0rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterLink = styled.a`
  list-style: none;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: left;
  letter-spacing: 1.5px;
  color: #fff;
  padding: 0.5rem 0rem;
  transition: color 0.4s ease;
  &:hover {
    color: #f49ac1;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterLinkAttribute = styled.a`
  font-size: 0.45rem;
  list-style: none;
  text-decoration: none;
  text-align: left;
  letter-spacing: 1.5px;
  color: #fff;
  padding: 0.5rem 0rem;
  &:hover {
    color: #f49ac1;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterIntagramIconLink = styled.a`
  font-size: 1.2rem;
  color: #f49ac1;
  margin-left: 0.5rem;
  padding-right: 0.5rem;
  transition: color 0.4s ease;
  &:hover {
    color: #f49ac1;
  }
  @media (max-width: 915px) {
    padding-right: 0.3rem;
  }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: #f49ac1;
  padding-right: 0.5rem;
  @media (max-width: 915px) {
    padding-right: 0.3rem;
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
  gap: 30px;
  padding: 0.3rem 0;
`;

const FooterAttributeLi = styled.li`
  font-size: 0.45rem;
  list-style: none;
  color: #fff;
`;

const FooterAttributeLiNoHover = styled.li`
  font-size: 0.55rem;
  list-style: none;
  pointer-events: none;
  color: #fff;
`;

const LinkStyled = styled(Link)`
  list-style: none;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: left;
  letter-spacing: 1.5px;
  color: #fff;
  padding: 0.5rem 0rem;
  transition: color 0.4s ease;
  &:hover {
    color: #f49ac1;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterLi = styled.li`
  list-style: none;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: left;
  letter-spacing: 1.5px;
  color: #fff;
  padding: 0.5rem 0rem;
  transition: color 0.4s ease;
  &:hover {
    color: #f49ac1;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyled>
      <FooterColumns>
        <FooterCard>
          <ul>
            <FooterLi>
              <LinkStyled to="/gallery">Gallery</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled to="/">{t("oXorosMas")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <FlexStyled>
                <li>
                  <FooterLink
                    href="https://www.instagram.com/katia_lada"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("akolouthisteMas")}
                  </FooterLink>
                </li>
                <FooterIntagramIconLink
                  href="https://www.instagram.com/katia_lada"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </FooterIntagramIconLink>
              </FlexStyled>
            </FooterLi>
          </ul>
        </FooterCard>
        <FooterCard>
          <ul>
            <FooterLinkNoClickable>{t("ipiresies")}</FooterLinkNoClickable>
            <hr></hr>
            <FooterLi>
              <LinkStyled to="/manicure-pedicure">{t("manikiour")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled to="/make-up">{t("makigiaz")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled to="/waxing">{t("apotrixosi")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled href="/facial">{t("peripoihshProsopou")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled to="/lashlift">{t("lashlift")}</LinkStyled>
            </FooterLi>
          </ul>
        </FooterCard>
        <FooterCard>
          <ul>
            <LinkStyled to="/contact">{t("epikoinonia")}</LinkStyled>
            <hr></hr>
            <FooterLi>
              <FontAwesomeIconStyled icon={faHouse} />
              <FooterLinkNoClickable>{t("dieuthinsi")}</FooterLinkNoClickable>
            </FooterLi>
            <FooterLi>
              <FontAwesomeIconStyled icon={faPhone} />
              <FooterLink href="tel:+3002374082034">23740 82034</FooterLink>
            </FooterLi>
            <FooterLi>
              <FontAwesomeIconStyled icon={faEnvelope} />
              <FooterLink href="mailto:lada.katia@gmail.com">
                lada.katia@gmail.com
              </FooterLink>
            </FooterLi>
            <FooterLi></FooterLi>
            <FooterAttributeLiNoHover>
              Attribute for the images
            </FooterAttributeLiNoHover>
            <hr></hr>
          </ul>
          <FooterCardAttribute>
            {attributesData.map((attribute, index) => (
              <FooterAttributeLi key={index}>
                <FooterLinkAttribute href={attribute.href}>
                  {attribute.text}
                </FooterLinkAttribute>{" "}
                {attribute.source}
              </FooterAttributeLi>
            ))}
          </FooterCardAttribute>
          <FooterCardAttribute>
            {attributesData2.map((attribute, index) => (
              <FooterAttributeLi key={index}>
                <FooterLinkAttribute href={attribute.href}>
                  {attribute.text}
                </FooterLinkAttribute>{" "}
                {attribute.source}
              </FooterAttributeLi>
            ))}
          </FooterCardAttribute>
        </FooterCard>
      </FooterColumns>
      <FooterParagraph>
        &#169; 2023 Κάτια Λαδά | Website:{" "}
        <FooterWebsiteByLink
          href="https://uk.linkedin.com/in/theodorosladas"
          target="_blank"
          rel="noreferrer"
        >
          Theo Ladas
        </FooterWebsiteByLink>
      </FooterParagraph>
    </FooterStyled>
  );
};

export default Footer;
