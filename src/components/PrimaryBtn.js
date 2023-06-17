import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const PrimaryButton = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
  padding: 2rem 0;
  a {
    font-size: var(--font-size-primary-button);
    text-decoration: none;
    letter-spacing: 1px;
    color: var(--color-pink-strong);
    padding: 10px 12px;
    color: var(--color-white);
    background: var(--color-pink);
    border: var(--border-button);
    border-radius: var(--border-radius-primary);
    opacity: 1;
    transition: var(--transition-primary);
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
