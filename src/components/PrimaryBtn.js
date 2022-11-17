import { Link } from "react-router-dom";
import styled from "styled-components";

export const PrimaryBtn = () => {
  return (
    <StyledPrimary>
      <Link to="/contact">Κλείστε Ραντεβού</Link>
    </StyledPrimary>
  );
};

const StyledPrimary = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  padding: 2rem 0;
  a {
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
      opacity: 0.9;
    }
  }
`;
