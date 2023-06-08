import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const PrimaryButton = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  padding: 2rem 0;
  a {
    font-size: 1.1rem;
    text-decoration: none;
    letter-spacing: 1px;
    color: #e4389b;
    padding: 10px 12px;
    color: #fff;
    background: #f49ac1;
    border: 1px solid #f49ac1;
    border-radius: 10px;
    opacity: 1;
    transition: all 0.4s ease;
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
`;

export const PrimaryBtn = () => {
  const { t } = useTranslation();

  return (
    <PrimaryButton>
      <a href="tel:+302374082034" rel="noreferrer">
        {t("kleisteRantebou")}
      </a>
    </PrimaryButton>
  );
};
